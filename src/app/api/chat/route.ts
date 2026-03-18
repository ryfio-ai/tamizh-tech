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

    // --- AI Providers in order of preference ---
    const providers = [
      {
        name: "Groq",
        key: process.env.GROQ_API_KEY,
        execute: async () => {
          const groqHistory = messages.map((m: any) => ({
            role: (m.sender === "user" ? "user" : "assistant") as "user" | "assistant",
            content: m.content
          }));
          const completion = await groq.chat.completions.create({
            messages: [{ role: "system" as "system", content: SYSTEM_PROMPT }, ...groqHistory],
            model: "llama-3.3-70b-versatile",
          });
          return completion.choices[0].message.content;
        }
      },
      {
        name: "OpenRouter",
        key: process.env.OPENROUTER_API_KEY,
        execute: async () => {
          const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.0-flash-001",
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map((m: any) => ({
                  role: m.sender === "user" ? "user" : "assistant",
                  content: m.content
                }))
              ]
            })
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error?.message || "OpenRouter failed");
          return data.choices[0].message.content;
        }
      },
      {
        name: "Gemini",
        key: process.env.GOOGLE_GEMINI_API_KEY,
        execute: async () => {
          const history: any[] = [];
          const chatMessages = messages.slice(0, -1);
          for (const m of chatMessages) {
            const role = m.sender === "user" ? "user" : "model";
            if (history.length === 0 && role !== "user") continue;
            if (history.length > 0 && history[history.length - 1].role === role) continue;
            history.push({ role, parts: [{ text: m.content }] });
          }
          const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash", 
            systemInstruction: SYSTEM_PROMPT 
          });
          const chat = model.startChat({ history });
          const result = await chat.sendMessage(lastMessage);
          const response = await result.response;
          return response.text();
        }
      },
      {
        name: "OpenAI",
        key: process.env.OPENAI_API_KEY,
        execute: async () => {
          const openaiHistory = [
            { role: "system" as "system", content: SYSTEM_PROMPT },
            ...messages.map((m: any) => ({
              role: (m.sender === "user" ? "user" : "assistant") as "user" | "assistant",
              content: m.content
            }))
          ];
          const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: openaiHistory as any,
          });
          return completion.choices[0].message.content;
        }
      }
    ];

    for (const provider of providers) {
      if (!provider.key) {
        console.warn(`Skipping ${provider.name}: API key missing.`);
        continue;
      }
      try {
        console.log(`Attempting chat with ${provider.name}...`);
        const content = await provider.execute();
        console.log(`${provider.name} successful.`);
        return NextResponse.json({ content, provider: provider.name });
      } catch (error: any) {
        console.error(`${provider.name} failed:`, error.message || error);
        // Continue to the next provider
      }
    }

    throw new Error("All AI providers failed. Please check your API keys and quotas.");

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}



