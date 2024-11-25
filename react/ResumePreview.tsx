import { cn } from "@/libs/utils";
import { ResumeValues } from "@/libs/validation";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreviewProps) {
  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
    >
      <h1 className="p-6 text-3xl font-bold">
        Цей текст повинен змінюватися з розміром контейнера DIV
      </h1>
    </div>
  );
}
