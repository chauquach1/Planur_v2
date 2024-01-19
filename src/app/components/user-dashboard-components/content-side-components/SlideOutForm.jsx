export default function SlideOutForm({children, ...props}) {

  const visible = props.showForm ? "block" : "hidden";
  return (
    <div className={`${visible} bg-slate-400 right-0 top-0 fixed w-full h-full rounded-tl-xl md:max-w-[225px] lg:max-w-[400px] xl:max-w-[500] 2xl:max-w-[600px]`}>
      <button onClick={() => props.setShowForm(!props.showForm)}>X</button>< br/>
      some form container
      {children}
    </div>
  )
}