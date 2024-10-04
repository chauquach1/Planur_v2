import SignUpBtn from "../auth-components/SignUpBtn";
export default function SignUpBanner() {
  return (
    <div
      id="sign-up-banner"
      className="w-full flex flex-row justify-center gap-4 items-center h-16 m-12"
    >
        <h1>Plan Your Next Trip</h1>
        <SignUpBtn/>
    </div>
  );
}
