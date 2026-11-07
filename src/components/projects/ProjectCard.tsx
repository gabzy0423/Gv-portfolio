import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <Card className="rounded-xl border border-line bg-surface/60 py-0 text-foreground shadow-none ring-0 transition-[background-color,transform,box-shadow,border-color] duration-500 ease-out group-hover:bg-surface group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-black/10 group-focus-visible:bg-surface group-focus-visible:-translate-y-1 group-focus-visible:border-accent/50 group-focus-visible:shadow-lg group-focus-visible:shadow-black/10 motion-reduce:transform-none motion-reduce:transition-none">
        <CardContent className="p-0">
          <div className="p-3 pb-0">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-surface shadow-lg ring-1 ring-foreground/10">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform delay-100 duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-focus-visible:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background" aria-hidden="true" />
              )}
            </div>
          </div>

          <div className="p-4">
            <CardTitle className="font-mono text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-lg">
              {project.title}
            </CardTitle>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-md border border-line bg-background/60 px-2 py-1 font-pixel text-[10px] text-muted">
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>
    </Link>
  );
}
