export default async function TripDashboardLayout({ children }) {
  return (
    <div className="columns-1 flex flex-col w-full max-w-7xl h-auto text-center items-start justify-start">
      {children}
    </div>
  );
}
