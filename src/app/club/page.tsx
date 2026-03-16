export default function ClubPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6">
        <span className="text-neon-cyan">Robotics</span> Club
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-12">
        Hands-on robotics, competitions and innovation hub for school and college students.
      </p>
      <div className="w-full max-w-4xl glass-panel rounded-2xl p-8 border-neon-cyan/30">
        <h2 className="text-2xl font-bold text-white mb-4">Under Construction</h2>
        <p className="text-slate-400">The full club experience is being materialized...</p>
      </div>
    </div>
  );
}
