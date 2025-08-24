const skills = [
  { name: "React / Next.js", level: "Expert" },
  { name: "Node.js / Express", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "MongoDB / PostgreSQL", level: "Beginner" },
];

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto glass p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="p-4 glass hover:scale-105 transition">
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
