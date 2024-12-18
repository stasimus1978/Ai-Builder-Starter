import { EditorFormProps } from "@/libs/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    title: "Загальна інформація",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Особиста інформація",
    component: PersonalInfoForm,
    key: "personal-info",
  },
  {
    title: "Досвід роботи",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Освіта",
    component: EducationForm,
    key: "education",
  },
  {
    title: "Навички",
    component: SkillsForm,
    key: "skill",
  },
  {
    title: "Резюме",
    component: SummaryForm,
    key: "summary",
  },
];
