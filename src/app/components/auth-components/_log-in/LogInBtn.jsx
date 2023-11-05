'use client'
import { useState } from "react";
import LogInModal from "./LogInModal";

const LogInBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleLoginClick}
      >
        Log In Form Modal
      </button>
      <LogInModal open={showModal} onClose={handleCloseModal} />
    </>
  );
};

export default LogInBtn;
