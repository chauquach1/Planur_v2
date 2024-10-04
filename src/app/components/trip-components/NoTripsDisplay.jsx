import PinaColada from "../../public/loadingdrinks.svg"
import Image from "next/image"
import NewTripModal from "./NewTripModal"

export default function NoTripsDisplay( {userData, tripProps}) {
  const { tripsIndex, setTripsIndex } = tripProps;
  const { uuid } = userData;
  
  return (
    <div
      id="content-panel-main"
      className="w-full md:basis-3/4 h-full text-center my-auto"
    >
      <Image
        src={PinaColada}
        alt="Pina Colada"
        className="m-auto self-center justify-self-center"
        priority={true}
      />
      <h1 className="text-center my-6">Let's plan your trip!</h1>
      <NewTripModal trips={tripsIndex} user={uuid} setTripsIndex={setTripsIndex}/>
    </div>
  );
}