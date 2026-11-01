import { Suspense } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/projects/ProjectDetails";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default function ProjectDetailsPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<ProjectDetailsFallback />}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailsContent({ params }: { params: PageProps<"/projects/[slug]">["params"] }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return <ProjectDetails project={project} />;
}

function ProjectDetailsFallback() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 text-sm text-muted sm:px-6 lg:pb-24 lg:pt-12" aria-live="polite">
      Loading project...
    </div>
  );
}
