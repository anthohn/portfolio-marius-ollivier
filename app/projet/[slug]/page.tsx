// app/projet/[slug]/page.tsx
import { projectsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProjectClient from '@/app/projet/[slug]/Projet';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((proj) => proj.href === `/projet/${slug}`);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}