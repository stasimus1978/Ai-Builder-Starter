import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";
import prisma from "@/libs/prisma";
import { auth } from "@clerk/nextjs/server";
import { resumeDataInclude } from "@/libs/types";

export const metadata: Metadata = {
  title: "Розробіть своє резюме",
};

interface PageProps {
  searchParams: Promise<{ resumeId?: string }>;
}

export default async function EditorPage({ searchParams }: PageProps) {
  const { resumeId } = await searchParams;

  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: { id: resumeId, userId },
        include: resumeDataInclude,
      })
    : null;

  return <ResumeEditor resumeToEdit={resumeToEdit} />;
}
