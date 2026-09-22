import { ecosystemProjects } from "@/content/ecosystem";

export function ProjectGrid() {
  return (
    <section
      id="ecosysteme"
      className="mx-auto max-w-[1440px] px-5 pt-16 pb-32 sm:px-10 sm:pb-40"
    >
      <h2 className="text-display mb-10 text-[48px] sm:text-[64px]">
        Écosystème
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {ecosystemProjects.map((project) => (
          <a key={project.name} href={project.href} className="group block">
            <div className="aspect-[4/5] rounded-card bg-bone transition-colors group-hover:bg-charcoal/10" />
            <div className="mt-3 font-mono text-sm leading-[1.15]">
              <p>{project.name}</p>
              <p className="text-charcoal">{project.scope}</p>
              <p className="text-charcoal">{project.stack}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
