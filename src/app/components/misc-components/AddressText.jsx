export function AddressText ({category, value}) {
  return (
    <>
      {category && category[value] ? (
        category[value]
      ) : (
        <span className="italic text-slate-500">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )}
    </>
  );
}