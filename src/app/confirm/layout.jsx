export default function ConfirmLayout({ children }) {
  return (
    <main className="flex min-h-fit min-w-full flex-col items-center">
      <div className=" flex-1 flex flex-col w-full justify-start items-center">
        {children}
      </div>
    </main>
  );
}
