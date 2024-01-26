import { useEffect, useRef } from "react";
export default function SlideOutForm({children, ...props}) {
  let formRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      console.log('!formRef.current.contains(e.target)', !formRef.current.contains(e.target));
      console.log('formRef.current.contains(e.target)', formRef.current.contains(e.target));
      if (formRef.current.contains(e.target)) {
        props.setShowForm(false);
        console.log("formRef.current: ", formRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const isVisible = props.showForm ? "block" : "hidden";
  return (
    <div ref={formRef} className={`${isVisible} bg-slate-400 right-0 top-0 fixed w-full h-full rounded-tl-xl md:max-w-[225px] lg:max-w-[400px] xl:max-w-[500] 2xl:max-w-[600px]`}>
      <button onClick={() => props.setShowForm(!props.showForm)}>X</button>< br/>
      some form container
      {children}
    </div>
  )
}