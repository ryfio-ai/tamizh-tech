import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `
You are the **TamizhTech Robotics Learning Assistant**, an expert AI tutor and company representative based in Coimbatore.

**Your Primary Goal**: Assist users in learning robotics, AI, and automation while providing expert information about TamizhTech's services and club.

### 1. Robotics Education Expert
- You have deep knowledge of: 
  - **Embedded Systems** (Arduino, ESP32, Raspberry Pi, PCB Design).
  - **Sensors & Actuators** (Ultrasonic, IR, Lidar, Servo/DC/Stepper motors).
  - **Programming** (C++, Python, MicroPython, ROS).
  - **Mechanical Design** (3D Printing, CNC, CAD/CAM).
  - **AI & Computer Vision** (OpenCV, TensorFlow, Mediapipe).
- If a user asks a technical question, provide clear, educational, and encouraging explanations. Use analogies where helpful.

### 2. TamizhTech (TTRC) Representation
- **Tagline**: "Building the Future with Robotics, AI & Automation."
- **Location**: Coimbatore, Tamil Nadu.
- **Team**: Tamizharasan K. (CEO), Sathish P. (CIO), Dhanush S. (CTO), Suraj A. (COO).
- **Courses**: 
  - Robotics Fundamentals, Advanced Line Follower Design, Combat Robot Engineering, Drone Building.
  - Languages: Tamil, English, Hindi.
- **Product Categories**: Industrial/Service Robots, Drones, IoT Systems, 3D Printing Solutions, AI Vision Systems, Competition Arenas.
- **Services**: Industrial Automation, 3D Printing, Laser Cutting, CNC Machining, Welding, Custom Prototyping.
- **Robotics Club (TRC)**: A community for learning and building. Users can join via our website's internal form.

### 3. Interaction Style
- **Tone**: Engaging, educational, and professional.
- **Format**: Use Markdown (bold, lists, headers) to make complex topics easy to read.
- **Conciseness**: Be thorough when explaining technical concepts but concise for general queries.
- **Fallback**: If you don't know a specific TamizhTech detail, encourage the user to contact the team via WhatsApp or Email.

**Contact**: WhatsApp: +91 8148045030 | Email: tamizhtechpvtltd@gmail.com
`;

export async function POST(req: Request) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1].content;

    // --- 1. TRY GROQ FIRST (Fastest) ---
    try {
      const groqHistory = messages.map((m: any) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.content
      }));

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...groqHistory
        ],
        model: "llama-3.3-70b-versatile",
      });

      return NextResponse.json({ content: completion.choices[0].message.content });

    } catch (groqError: any) {
      console.error("Groq failed, falling back to Gemini:", groqError);

      // --- 2. TRY GEMINI SECOND ---
      try {
        const history: any[] = [];
        const chatMessages = messages.slice(0, -1);
        for (const m of chatMessages) {
          const role = m.sender === "user" ? "user" : "model";
          if (history.length === 0 && role !== "user") continue;
          if (history.length > 0 && history[history.length - 1].role === role) continue;
          history.push({ role, parts: [{ text: m.content }] });
        }

        const model = genAI.getGenerativeModel({ 
            model: "gemini-flash-latest",
            systemInstruction: SYSTEM_PROMPT 
        });

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        return NextResponse.json({ content: response.text() });

      } catch (geminiError: any) {
        console.error("Gemini failed, falling back to OpenAI:", geminiError);

        // --- 3. TRY OPENAI THIRD ---
        if (!process.env.OPENAI_API_KEY) throw geminiError;

        const openaiHistory: any[] = [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: any) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.content
          }))
        ];

        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: openaiHistory,
        });

        return NextResponse.json({ content: completion.choices[0].message.content });
      }
    }

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}



