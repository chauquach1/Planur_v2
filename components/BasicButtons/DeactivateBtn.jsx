const DeactivateBtn = ({ setOpen }) => {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      onClick={() => setOpen(false)}
    >
      Deactivate
    </button>
  );
}

export default DeactivateBtn;
