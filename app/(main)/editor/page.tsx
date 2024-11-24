import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Розробіть своє резюме",
};

export default function EditorPage() {
  return <ResumeEditor />;
}
