"use client";

import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { useState } from "react";
import { ResumeValues } from "@/libs/validation";
import ResumePreviewSection from "./ResumePreviewSection";
import { cn } from "@/libs/utils";
import useUnloadWarning from "@/hooks/useUnloadWarnings";
import useAutoSaveResume from "./useAutoSaveResume";

export default function ResumeEditor() {
  const searchParam = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeValues>({});

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);

  const currentStep = searchParam.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParam = new URLSearchParams(searchParam);
    newSearchParam.set("step", key);
    window.history.pushState(null, "", `?${newSearchParam.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Розробіть своє резюме.</h1>
        <p className="text-sm text-muted-foreground">
          Виконайте наведені нижче кроки, щоб створити своє резюме.Ваш прогрес
          буде збережений автоматично.
        </p>
      </header>

      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div
            className={cn(
              "w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2",
              showSmResumePreview && "hidden",
            )}
          >
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>

          <div className="grow md:border-r" />

          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            classname={cn(showSmResumePreview && "flex")}
          />
        </div>
      </main>

      <Footer
        isSaving={isSaving}
        currentStep={currentStep}
        setCurrentStep={setStep}
        setShowSmResumePreview={setShowSmResumePreview}
        showSmResumePreview={showSmResumePreview}
      />
    </div>
  );
}
