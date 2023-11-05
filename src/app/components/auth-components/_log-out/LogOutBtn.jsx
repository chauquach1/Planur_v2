import LogOutFunction from "./log-out-csr";

export default async function LogOutBtn() {
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
        onClick={LogOutFunction}
      >
        Logout
      </button>
    </>
  );
}
