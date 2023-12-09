
export default function TabBtn({ category, innerText, setActiveTab }) {
  return (
    <button
      onClick={() => setActiveTab(category)}
      className="font-light text-bismark-700 text-start"
    >
      {innerText}
    </button>
  );
}
