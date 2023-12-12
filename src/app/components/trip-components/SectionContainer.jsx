export default function SectionContainer({children, category}) {
  return (
    <div id={`${category}-section`}>
      <h1 className="font-bold">{category}</h1>
      {children}
    </div>
  );
}
