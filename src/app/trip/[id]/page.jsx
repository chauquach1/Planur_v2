import Link from "next/link"

export default function TripDashboard({params}) {

  const tripid = params.id
  // console.log('tripid from trip dashboard',tripid);
  
  return (
    <>
      <h1>Trip {tripid} </h1>
    </>
  )
}