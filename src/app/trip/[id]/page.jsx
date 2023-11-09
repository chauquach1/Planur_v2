import Link from "next/link"

export default function TripDashboard({uuid}) {

console.log(uuid);
  // console.log('tripid from trip dashboard',tripid);
  
  return (
    <>
      <h1>Trip {uuid} </h1>
    </>
  )
}