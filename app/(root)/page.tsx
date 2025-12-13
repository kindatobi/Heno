import { signOutUser } from "@/actions/user.action";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <form action={signOutUser}>
        <Button>Log out</Button>
      </form>
    </main>
  );
}
