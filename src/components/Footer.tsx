export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              HMPSN
            </h3>
            <p className="text-zinc-400">
              Principal Software Engineering & Technology Leadership
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:michael@hmpsn.co.uk" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  michael@hmpsn.co.uk
                </a>
              </li>
              <li>
                <a href="https://github.com/mrhammo" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/michaelhampson" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-800">
          <p className="text-center text-zinc-400 text-sm">
            &copy; {currentYear} HMPSN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
