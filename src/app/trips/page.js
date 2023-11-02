import Link from "next/link"

export default function Page() {
  return (
    <>
    <div className="row-auto flex-col">
      some div
    </div>
      <div className="container flex flex-col border border-solid border-white">
        <h1 className="underline">Trips Index</h1>
        <Link href="trip/1">Trip 1 Link</Link>
        <Link href="trip/2">Trip 2 Link</Link>
        <Link href="trip/3">Trip 3 Link</Link>
      </div>
    </>
  );
}