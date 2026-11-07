import Link from "next/link";
import { projects } from "@/data/projects";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectGrid() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6 lg:pb-24 lg:pt-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href="/" />}
              className="font-pixel text-xs font-bold text-muted transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-pixel text-xs font-bold text-muted">Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8 max-w-2xl">
        <h1 className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">Selected work</h1>
        <p className="mt-3 text-xs leading-6 text-muted sm:text-sm">
          A focused collection of projects, experiments, and digital solutions.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
