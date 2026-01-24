export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-black border-t border-green-500/30 py-8 px-6 font-mono">
      <div className="space-y-6">
        <div className="text-green-400 text-sm">
          <span className="opacity-60">[system@hmpsn ~]$</span> whoami
        </div>
        <div className="border border-green-500/30 bg-green-950/10 p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-green-400 font-bold mb-3">~/HMPSN</div>
              <p className="text-green-300/80 text-xs">
                Principal Software Engineering & Technology Leadership
              </p>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-3 uppercase text-xs">Navigation</div>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="#work" className="text-green-300/80 hover:text-green-300 transition-colors">
                    &gt; work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-green-300/80 hover:text-green-300 transition-colors">
                    &gt; about
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-green-300/80 hover:text-green-300 transition-colors">
                    &gt; blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-3 uppercase text-xs">Contact</div>
              <ul className="space-y-1 text-xs">
                <li>
                  <a href="mailto:michael@hmpsn.co.uk" className="text-green-300/80 hover:text-green-300 transition-colors">
                    &gt; michael@hmpsn.co.uk
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mrhammo" target="_blank" rel="noopener noreferrer" className="text-green-300/80 hover:text-green-300 transition-colors">
                    &gt; github
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/michaelhampson" target="_blank" rel="noopener noreferrer" className="text-green-300/80 hover:text-green-300 transition-colors">
                    &gt; linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-green-400/60 text-xs">
          © {currentYear} HMPSN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
