import SignIn from "@/components/sign-in";
import SignUp from "@/components/sign-up";

export default function AuthPage() {
  return (
    <div className="flex justify-center gap-2">
      <SignUp />
      <SignIn />
    </div>
  );
}
