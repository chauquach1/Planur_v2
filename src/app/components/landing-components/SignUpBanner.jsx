import { Button } from "@nextui-org/react";
export default function SignUpBanner() {
  return (
    <div
      id="sign-up-banner"
      className="container flex flex-row justify-center align-center items-center bg-slate-200 border border-black h-16"
    >
      <div className="flex flex-col flex-grow">
        <h1>Ready To Get</h1>
        <h1>Sign Up Banner</h1>
      </div>
      <div className="flex flex-col flex-grow">
        <Button
          size="md"
          color="primary"
        >Sign Up</Button>
      </div>
    </div>
  );
}
