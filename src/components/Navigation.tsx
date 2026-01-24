export default function Navigation() {
  return (
    <nav className="w-full bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">HMPSN</h1>
          </div>
          <div className="flex space-x-8">
            <a href="#work" className="text-zinc-400 hover:text-purple-400 transition-colors">
              Work
            </a>
            <a href="#about" className="text-zinc-400 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#blog" className="text-zinc-400 hover:text-purple-400 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
