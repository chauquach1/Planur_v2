import ContentNavCard from "./ContentNavCard";
export default function ContentNavContainer() {
  return (
    <div id="content-nav-container" className="flex flex-col h-fit w-full bg-white">
      <h1>content nav container</h1>
      <ContentNavCard 
        title="trip1"
      />
      <ContentNavCard 
        title="trip2"
      />
      <ContentNavCard 
        title="trip3"
      />
    </div>
  );
}