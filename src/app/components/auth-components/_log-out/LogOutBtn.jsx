"use client";
import LogOutFunction from "./log-out-csr";

export default async function LogOutBtn() {
  const handleSignOut = async () => {
    LogOutFunction();
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </>
  );
}
