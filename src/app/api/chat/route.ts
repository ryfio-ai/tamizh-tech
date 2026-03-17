import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `
You are the AI assistant for TamizhTech Robotics Company (TTRC), Coimbatore.

Core Knowledge:
- TamizhTech (TTRC) Tagline: "Building the Future with Robotics, AI & Automation."
- Location: Coimbatore, Tamil Nadu, India.
- Team: Tamizharasan K. (Founder & CEO), Sathish P. (CIO), Dhanush S. (CTO), Suraj A. (COO).
- Courses: Robotics Fundamentals, Advanced Line Follower Design, Combat Robot Engineering, Drone Building Workshop. Languages: Tamil, English, Hindi.
- Product Categories: Industrial Robots, Drones, Corporate/Service Robots, IoT & Embedded Systems, 3D Printing Solutions, Educational Platforms, AI & Vision Systems, Competition Arenas, Custom R&D Projects.
- Robotics Development Kits: Line Follower Kit, Maze Solver Kit, RC Soccer Kit, RC Race Kit, RC Sumo Kit, Mini RC Soccer Kit, Career Board, 2-in-1 RC Soccer Kit.
- Services: Industrial Automation, 3D Printing, PCB Design, Laser Cutting, Machining (CNC/Manual), Lathing, Welding, Custom Prototyping.
- Club: Tamizh Robotics Club (TRC) - Learn, Build, Launch. Members can join via of the internal join form.
- Contact: WhatsApp/Phone: +91 8148045030, Email: tamizhtechpvtltd@gmail.com.

Interaction Guidelines:
1. **General & Specific Queries**: You are a fully capable AI assistant. You MUST answer ALL questions from the user. If the question is about TTRC, prioritize the provided core knowledge. If the question is completely unrelated to TTRC, answer it helpfully using your broad knowledge.
2. **Be Concise**: Answer the user's question directly. Do not repeat your identity or contact info unless it's the primary answer or requested.
3. **Format**: Use clean Markdown. Use bullet points for lists and bold for emphasis. 
4. **Tone**: Professional, friendly, and helpful.
`;

export async function POST(req: Request) {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1].content;

    // --- TRY GEMINI FIRST ---
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

      // --- FALLBACK TO OPENAI ---
      if (!process.env.OPENAI_API_KEY) {
        throw geminiError; // Rethrow if no fallback available
      }

      const openaiHistory: any[] = [
        { role: "system", content: SYSTEM_PROMPT }
      ];

      for (const m of messages) {
        openaiHistory.push({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.content
        });
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Or "gpt-4o" if your key supports it
        messages: openaiHistory,
      });

      return NextResponse.json({ content: completion.choices[0].message.content });
    }

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}



