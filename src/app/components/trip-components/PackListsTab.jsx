import AccommodationsCard from "../../components/trip-components/AccommodationsCard";

export default function PackListsTab({ tripConsoleDetails }) {
  tripId=tripConsoleDetails.tripId

  return (
    accomIds && accomIds.length > 0 ? (
      accomIds.map((accomId) => (
        <AccommodationsCard key={accomId} accomId={accomId} />
      ))
    ) : (
      <p className="font-thin italic text-gray-500"> Accommodations Empty</p>
    )
  )
}
