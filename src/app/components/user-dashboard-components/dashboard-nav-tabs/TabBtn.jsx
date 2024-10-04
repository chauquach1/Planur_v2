
export default function TabBtn({ ...props }) {
  return (
    <h1
      // onClick={() => props.setActiveTab(props.category)}
      className="font-light text-bismark-400 text-start w-full flex flex-row items-center gap-2"
    >
      {props.icon}
      {props.innerText}
    </h1>
  );
}
