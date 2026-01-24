export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">
            Principal Software Engineering & Technology Leadership
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            Architecting scalable solutions, driving innovation through AI, and leading engineering teams to deliver exceptional results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#work" 
              className="border border-zinc-300 dark:border-zinc-700 text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
