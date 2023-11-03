import { useState } from "react";
import SignInModal from "./MagicLinkSignIn";

const SignInButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSignInClick}
      >
        Sign In
      </button>
      <SignInModal open={showModal} onClose={handleCloseModal} />
    </>
  );
};

export default SignInButton;
