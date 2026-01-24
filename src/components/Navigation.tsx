export default function Navigation() {
  return (
    <nav className="w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-black dark:text-white">HMPSN</h1>
          </div>
          <div className="flex space-x-8">
            <a href="#work" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#blog" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
