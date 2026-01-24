export default function Services() {
  const services = [
    {
      title: "software_architecture",
      description: "Designing scalable, resilient systems that grow with your business needs.",
      cmd: "design",
    },
    {
      title: "software_development",
      description: "Full-stack development expertise with modern technologies and best practices.",
      cmd: "build",
    },
    {
      title: "ai_machine_learning",
      description: "Implementing cutting-edge AI solutions and LLM integrations for real-world problems.",
      cmd: "train",
    },
    {
      title: "principal_engineering",
      description: "Technical leadership, mentoring teams, and establishing engineering excellence.",
      cmd: "lead",
    },
    {
      title: "cloud_infrastructure",
      description: "Building and managing cloud-native applications on AWS, Azure, and GCP.",
      cmd: "deploy",
    },
    {
      title: "technical_strategy",
      description: "Aligning technology decisions with business objectives for maximum impact.",
      cmd: "plan",
    },
  ];

  return (
    <section id="about" className="w-full bg-black py-10 px-6">
      <div className="mb-6">
        <div className="text-green-400 text-sm mb-4 font-mono">
          <span className="opacity-60">[system@hmpsn ~]$</span> ./services --list
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-green-500/30 bg-green-950/10 p-5 hover:border-green-500 transition-colors font-mono"
          >
            <div className="text-green-400 mb-3 text-sm">
              <span className="opacity-60">$</span> {service.cmd} <span className="text-green-300">{service.title}</span>
            </div>
            <p className="text-green-300/80 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
