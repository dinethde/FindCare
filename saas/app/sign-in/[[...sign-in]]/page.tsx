import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-50">
      <SignIn />
    </div>
  );
}
