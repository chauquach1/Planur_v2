import CategoryBtn from "./CategoryBtn";

export default function PanelNavContainer({...props}) {
  const categories = ["Full Details", "Accommodations", "Stops", "Packing List", "Emergency Contacts"];
  return (
    <div id="content-header" className="flex flex-row w-full h-max gap-5">
      {categories.map((category) => {
        return <CategoryBtn key={`${category} Btn`} displayProps={props.displayProps} {...props} category={category} />;
      })}
    </div>
  );
}