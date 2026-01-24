export default function SocialLinks() {
  const links = [
    { name: "github", url: "https://github.com/mrhammo", cmd: "open" },
    { name: "linkedin", url: "https://linkedin.com/in/michaelhampson", cmd: "open" },
    { name: "blog", url: "/blog", cmd: "cd" },
    { name: "email", url: "mailto:michael@hmpsn.co.uk", cmd: "mail" },
  ];

  return (
    <section className="w-full bg-black py-10 px-6">
      <div className="border border-green-500/30 bg-green-950/10 p-6">
        <div className="text-green-400 text-sm mb-4">
          <span className="opacity-60">[system@hmpsn ~]$</span> ls -la ./links
        </div>
        <div className="space-y-2 font-mono text-sm">
          {links.map((link) => {
            const isExternalLink = link.url.startsWith("http");
            return (
              <a
                key={link.name}
                href={link.url}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
                className="block text-green-400 hover:text-green-300 hover:bg-green-500/10 px-3 py-2 transition-colors"
              >
                <span className="opacity-60">drwxr-xr-x</span> {link.cmd} <span className="text-green-300">./{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
