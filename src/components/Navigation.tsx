export default function Navigation() {
  return (
    <nav className="w-full border-b border-green-500/30 bg-black/50 backdrop-blur">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-green-400" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              ~/HMPSN<span className="terminal-cursor">_</span>
            </h1>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#work" className="text-green-400 hover:text-green-300 transition-colors terminal-prompt">
              work
            </a>
            <a href="#about" className="text-green-400 hover:text-green-300 transition-colors terminal-prompt">
              about
            </a>
            <a href="#blog" className="text-green-400 hover:text-green-300 transition-colors terminal-prompt">
              blog
            </a>
            <a href="#contact" className="text-green-400 hover:text-green-300 transition-colors terminal-prompt">
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
