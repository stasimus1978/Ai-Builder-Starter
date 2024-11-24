"use client";

import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";

export default function ResumeEditor() {
  const searchParam = useSearchParams();

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
          <div className="w-full space-y-6 overflow-y-auto p-3 md:w-1/2">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && <FormComponent />}
          </div>

          <div className="grow md:border-r" />

          <div className="hidden w-1/2 md:flex">right</div>
        </div>
      </main>

      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
}
