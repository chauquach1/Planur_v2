'use client'
import { useState } from "react";
import SignUpModal from "./SignUpModal";

const SignUpBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSignUpClick}
      >
        Sign Up Form Modal
      </button>
      <SignUpModal open={showModal} onClose={handleCloseModal} />
    </>
  );
};

export default SignUpBtn;
