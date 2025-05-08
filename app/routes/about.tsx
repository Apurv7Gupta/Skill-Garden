export function meta() {
  return [{ title: "About | Skill Garden" }];
}

export default function About() {
  return (
    <section className="max-w-5xl min-w-[450px] mx-auto px-6 py-16 text-center space-y-10">
      <h1 className="text-5xl font-extrabold tracking-tight text-green-400">
        Welcome to Skill Garden
      </h1>
      <p className="text-xl text-white leading-relaxed">
        Skill Garden is your personal playground for growth. Map your learning
        journey, track your progress, and cultivate new skills — all at your own
        pace.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">
            Curated Roadmaps
          </h2>
          <p className="text-white">
            Follow expert-designed paths to master technologies faster. Stay
            focused, stay inspired.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">
            Build Your Own Paths
          </h2>
          <p className="text-white">
            Prefer custom journeys? Create your own learning tracks tailored to
            your goals and interests.
          </p>
        </div>
      </div>
      <p className="text-lg text-cyan-400 mt-10">
        Powered by React, React Flow, Tailwind CSS, and Material UI — built to
        keep you motivated
      </p>
    </section>
  );
}
