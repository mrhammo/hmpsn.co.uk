export default function Hero() {
  return (
    <section className="w-full bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Principal Software Engineering & Technology Leadership
          </h1>
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            Architecting scalable solutions, driving innovation through AI, and leading engineering teams to deliver exceptional results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
            >
              Get in Touch
            </a>
            <a 
              href="#work" 
              className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-500/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
