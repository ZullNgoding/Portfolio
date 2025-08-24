const projects = [
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio with dark/light mode and glassmorphism design.",
      link: "#",
    },
    {
      title: "E-commerce App",
      desc: "Full-stack application with product catalog, cart, and payment gateway.",
      link: "#",
    },
    {
      title: "Chat Application",
      desc: "Real-time chat app with WebSocket & modern UI.",
      link: "#",
    },
  ];
  
  export default function Projects() {
    return (
      <div className="max-w-5xl mx-auto glass p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              href={p.link}
              key={i}
              className="p-6 glass hover:scale-105 transition flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              </div>
              <span className="mt-4 text-primary-500 text-sm">View Project →</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
  