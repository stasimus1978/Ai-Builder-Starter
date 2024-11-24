import { EditorFormProps } from "@/libs/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";

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
];
