import { SignUp } from "@clerk/nextjs";

export default function SignUnPage() {
  return (
    <main className="flex h-screen items-center justify-center p-3">
      <SignUp />
    </main>
  );
}
