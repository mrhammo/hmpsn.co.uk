export default function WorkProjects() {
  const projects = [
    {
      title: "enterprise_ai_platform",
      description: "Scalable AI platform processing millions of requests daily. LLM integrations and model orchestration.",
      technologies: ["Python", "TypeScript", "AWS", "Kubernetes"],
      year: "2024",
    },
    {
      title: "microservices_arch",
      description: "Resilient microservices architecture serving 10M+ users. High availability and fault tolerance.",
      technologies: ["Go", "React", "Docker", "PostgreSQL"],
      year: "2023",
    },
    {
      title: "analytics_engine",
      description: "Real-time data processing pipeline handling terabytes of data. Instant insights for stakeholders.",
      technologies: ["Kafka", "Spark", "Python", "Redis"],
      year: "2022",
    },
  ];

  return (
    <section id="work" className="w-full bg-black py-10 px-6">
      <div className="mb-6">
        <div className="text-green-400 text-sm mb-4 font-mono">
          <span className="opacity-60">[system@hmpsn ~]$</span> cat ./projects/*.log
        </div>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-green-500/30 bg-green-950/10 p-5 hover:border-green-500 transition-colors font-mono"
          >
            <div className="flex justify-between items-start mb-3 text-sm">
              <h3 className="text-green-400 font-bold">
                [{project.year}] {project.title}
              </h3>
            </div>
            <p className="text-green-300/80 mb-4 text-sm leading-relaxed">
              &gt; {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
