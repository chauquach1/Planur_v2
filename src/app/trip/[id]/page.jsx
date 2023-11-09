const punycode = require('punycode/');
import Link from "next/link"
import getTrip from "../../api/trip/get-trip"

export default async function TripDashboard() {

  const uuid = 'b9c85a1a-6605-4de5-9ccb-386472df4647'
  const user = await getTrip(uuid)
  
  return (
    <>
      <h1>Trip {uuid} </h1>
    </>
  )
}