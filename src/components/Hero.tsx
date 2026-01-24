export default function Hero() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 px-6">
      <div className="space-y-4">
        <div className="text-green-400 text-sm mb-6">
          <span className="opacity-60">[system@hmpsn ~]$</span> cat README.md
        </div>
        <div className="border border-green-500/30 bg-green-950/10 p-6 rounded font-mono">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">
            # Principal Software Engineering
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-6">
            ## & Technology Leadership
          </h2>
          <p className="text-green-300/80 mb-6 leading-relaxed text-sm">
            &gt; Architecting scalable solutions, driving innovation through AI,
            <br />
            &gt; and leading engineering teams to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <a 
              href="#" 
              className="border border-green-500 bg-green-500/10 text-green-400 px-5 py-2 hover:bg-green-500/20 transition-all font-mono"
            >
              [ENTER] Get in Touch
            </a>
            <a 
              href="#" 
              className="border border-green-500/50 text-green-400 px-5 py-2 hover:border-green-500 hover:bg-green-500/10 transition-all font-mono"
            >
              [TAB] View My Work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
