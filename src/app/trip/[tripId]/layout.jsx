export default async function TripDashboardLayout({ children }) {
  return (
    <div className="columns-1 flex flex-col w-full h-fit text-center items-center justify-center">
      {children}
    </div>
  );
}
