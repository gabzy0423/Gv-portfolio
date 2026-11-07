import Image from "next/image";
import Link from "next/link";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { technologies } from "@/data/technologies";
import type { Project } from "@/types/portfolio";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const projectOneTechnologyLabels = ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"];
const projectTwoTechnologyLabels = ["React.js", "JavaScript", "Vite", "Tailwind CSS"];

export function ProjectDetails({ project }: { project: Project }) {
  const iconTechnologyLabels = project.slug === "project-one" ? projectOneTechnologyLabels : project.slug === "project-two" ? projectTwoTechnologyLabels : [];
  const detailTechnologies = technologies.filter(({ label }) => iconTechnologyLabels.includes(label));

  return (
    <article className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:pb-24 lg:pt-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href="/projects" />}
              className="font-pixel text-xs font-bold text-muted transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Projects
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-48 truncate font-pixel text-xs font-bold text-muted sm:max-w-none">{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
        <div>
          <p className="font-pixel text-sm font-bold uppercase tracking-[0.12em] text-accent">
            {project.category ?? "Featured project"}
          </p>
          <h1 className="mt-3 font-pixel text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-foreground/80 sm:text-lg">{project.summary}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{project.description}</p>
          <a href={`mailto:gabrielvargas0423@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${project.title}`)}`} className="mt-8 inline-flex min-h-11 items-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Discuss a similar project
            <RocketLaunchIcon aria-hidden="true" className="ml-3 size-4" />
          </a>
        </div>

        <div className="rounded-2xl border border-line bg-surface/50 p-5 shadow-lg shadow-black/5 ring-1 ring-foreground/5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-pixel text-xs font-bold uppercase tracking-[0.14em] text-muted">Project snapshot</p>
          </div>

          <div className="mt-6 space-y-5">
          <div>
            <p className="font-pixel text-xs text-muted">Role</p>
            <p className="mt-2 text-base font-semibold tracking-tight">{project.role}</p>
          </div>

          <div className="border-t border-line pt-5">
            <p className="font-pixel text-xs text-muted">Technologies</p>
            {detailTechnologies.length > 0 ? (
              <div className="mt-3 flex flex-wrap items-center gap-2" aria-label="Technologies used">
                {detailTechnologies.map(({ label, icon }) => (
                  <span key={label} title={label} aria-label={label} className="grid size-9 place-items-center rounded-lg border border-line bg-background/60">
                    <svg aria-hidden="true" className="size-4.5" viewBox="0 0 24 24" style={{ fill: `#${icon.hex}` }}>
                      <path d={icon.path} />
                    </svg>
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-foreground/[0.06] px-2.5 py-1 font-mono text-[10px] text-muted">{technology}</span>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
            <p className="font-pixel text-xs text-muted">Outcome</p>
            <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">{project.outcome}</p>
          </div>
          </div>
        </div>
      </div>

      {project.image && (
        <figure className="mt-12">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.title} website`}
            className="group relative block overflow-hidden rounded-xl border border-line bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            style={{ aspectRatio: project.imageWidth && project.imageHeight ? `${project.imageWidth} / ${project.imageHeight}` : "16 / 9" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 grid place-items-center bg-black/0 text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:bg-black/55 group-hover:opacity-100 group-focus-visible:bg-black/55 group-focus-visible:opacity-100">
              Visit website
            </span>
          </a>
          <figcaption className="mt-3 font-pixel text-xs text-muted">
            {project.title} <span className="px-1 text-line">/</span> Frontend showcase
          </figcaption>
        </figure>
      )}
    </article>
  );
}
