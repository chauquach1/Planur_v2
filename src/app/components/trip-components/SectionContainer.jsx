export default function SectionContainer({children, category}) {
  return (
    <div>
      <h1>{category}</h1>
      {children}
    </div>
  );
}
