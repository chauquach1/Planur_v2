import checkPackingList from "../../_utils/checkPackingList";
export default function PackingCategoryList({...props}) {
  return (
    <div id={`${props.category}-list`} className="rounded-xl bg-white p-2 w-[200px]">
      <h1 className="font-semibold underline underline-offset-2">{props.category}</h1>
      <ul className="px-2">
        {props.items.map((item) => {
          return (
            <li key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  )
}