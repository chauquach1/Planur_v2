import { Button } from "@nextui-org/react";
export default function SignUpBanner() {
  return (
    <div
      id="sign-up-banner"
      className="w-full flex flex-row justify-center gap-4 items-center h-16 mb-12"
    >
        <h1>Got a Trip in Mind?</h1>
        <Button size="md" radius="full" className="bg-peach-400 text-white">
          Sign Up
        </Button>
    </div>
  );
}
