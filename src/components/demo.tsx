"use client";

import { Gravity, MatterBody } from "@/components/ui/gravity";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

function Preview() {
  return (
    <div className="w-full min-h-screen flex flex-col relative font-sans overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <div className="w-full h-[80vh] min-h-[500px] flex flex-col relative overflow-hidden">
        <div className="pt-20 z-10 text-4xl sm:text-5xl md:text-7xl text-primary font-bold w-full text-center">
          TamizhTech
        </div>
        <p className="pt-4 z-10 text-base sm:text-xl md:text-2xl text-slate-600 w-full text-center max-w-2xl mx-auto px-4">
          Transforming ideas into innovation through accessible robotics, AI, IoT, and automation.
        </p>
        
        <div className="flex justify-center gap-4 mt-8 z-10">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">
            Explore Robotics Programs
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">
            Talk to Our Team
          </button>
        </div>

        <Gravity gravity={{ x: 0, y: 1 }} className="absolute inset-0 w-full h-full pointer-events-auto">
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="10%"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-[#0015ff] text-white rounded-full cursor-grab active:cursor-grabbing px-8 py-4 shadow-lg select-none">
              Robotics
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="30%"
            y="70%"
            angle={25}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-[#E794DA] text-white rounded-full cursor-grab active:cursor-grabbing  px-8 py-4 shadow-lg select-none">
              Automation
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="40%"
            y="20%"
            angle={10}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-[#1f464d] text-white rounded-full cursor-grab active:cursor-grabbing  px-8 py-4 shadow-lg select-none">
              IoT Solutions
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="75%"
            y="40%"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-[#ff5941] text-white rounded-full cursor-grab active:cursor-grabbing  px-8 py-4 shadow-lg select-none">
              AI
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="80%"
            y="80%"
            angle={-20}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-orange-500 text-white rounded-full cursor-grab active:cursor-grabbing  px-8 py-4 shadow-lg select-none">
              Education
            </div>
          </MatterBody>
          <MatterBody
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x="50%"
            y="10%"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-[#ffd726] text-slate-900 rounded-full cursor-grab active:cursor-grabbing  px-8 py-4 shadow-lg select-none">
              Innovation
            </div>
          </MatterBody>
        </Gravity>
      </div>

      {/* Velocity Scroll Section */}
      <div className="w-full py-24 bg-white border-y border-slate-200 overflow-hidden flex flex-col gap-6">
        <VelocityScroll
          text="TamizhTech Robotics • Innovation • Automation • AI • "
          default_velocity={3}
          className="font-sans text-center text-5xl sm:text-7xl font-bold tracking-tight text-slate-800 drop-shadow-sm md:text-9xl md:leading-[6rem]"
        />
        <VelocityScroll
          text="Education • Industrial IoT • Manufacturing • Smart Homes • "
          default_velocity={-3}
          className="font-sans text-center text-5xl sm:text-7xl font-bold tracking-tight text-orange-500 drop-shadow-sm md:text-9xl md:leading-[6rem]"
        />
      </div>

      {/* Further Content Placeholder */}
      <div className="min-h-screen py-24 px-8 container mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Empowering the Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">1</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Hands-on Learning</h3>
            <p className="text-slate-600">Students build real robots and IoT devices, transitioning from theory to practical application.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">2</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Industry Ready</h3>
            <p className="text-slate-600">Our curriculum matches modern manufacturing needs, closing the gap between academia and industry in Coimbatore.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">3</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Enterprise Solutions</h3>
            <p className="text-slate-600">We don't just teach; we implement. TamizhTech provides end-to-end automation for MSMEs and factories.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Preview };
