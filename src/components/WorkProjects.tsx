export default function WorkProjects() {
  const projects = [
    {
      title: "Enterprise AI Platform",
      description: "Led the architecture and development of a scalable AI platform processing millions of requests daily, implementing LLM integrations and model orchestration.",
      technologies: ["Python", "TypeScript", "AWS", "Kubernetes"],
      year: "2024",
    },
    {
      title: "Distributed Microservices Architecture",
      description: "Designed and implemented a resilient microservices architecture serving 10M+ users, with focus on high availability and fault tolerance.",
      technologies: ["Go", "React", "Docker", "PostgreSQL"],
      year: "2023",
    },
    {
      title: "Real-time Analytics Engine",
      description: "Built a real-time data processing pipeline handling terabytes of data, enabling instant insights and decision-making for business stakeholders.",
      technologies: ["Kafka", "Spark", "Python", "Redis"],
      year: "2022",
    },
  ];

  return (
    <section id="work" className="w-full bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
          Notable Work
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          A selection of projects that showcase my expertise in building scalable, innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {project.year}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
