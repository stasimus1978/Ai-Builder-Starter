import prisma from "@/libs/prisma";
import { resumeDataInclude } from "@/libs/types";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import ResumeItem from "./ResumeItem";
import CreateResumeButton from "./CreateResumeButton";

export const metadata: Metadata = {
  title: "Ваші резюме",
};

export default async function ResumesPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),

    prisma.resume.count({
      where: {
        userId,
      },
    }),
  ]);

  // TODO: Check quota for non-premium users

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <CreateResumeButton canCreate={totalCount < 3} />

      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Ваші резюме</h1>
        <p className="">Загальний: {totalCount}</p>
      </div>

      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}
