import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <Card className="rounded-xl border-0 bg-transparent py-0 shadow-none ring-0">
        <CardContent className="p-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background" aria-hidden="true" />
            )}
          </div>

        </CardContent>
      </Card>
    </Link>
  );
}
