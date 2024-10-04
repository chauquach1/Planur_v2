import { useRef, useEffect } from 'react';

export default function FormWrapper({ children, resetFormState, exceptionRef, onClick, isVisible }) {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickListener);
    
    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, []);

  const handleClickListener = (event) => {
    let clickedInside;
    if(exceptionRef) {
      clickedInside =
        (wrapperRef && wrapperRef.current.contains(event.target)) ||
        exceptionRef.current === event.target ||
        exceptionRef.current.contains(event.target);
    }
    else {
      clickedInside = (wrapperRef && wrapperRef.current.contains(event.target));
    }

    if (clickedInside) return;
    else onClick();
  }
  
  return (
    <div
      className={`${isVisible} absolute z-10 left-0 top-0 h-full w-screen bg-transparent/40`}
    >
      <div
        ref={wrapperRef}
        className={`${isVisible} right-0
        flex-col justify-center h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] p-2 rounded-tl-xl ms-2 shadow-2xl`}
      >
        {children}
      </div>
    </div>
  );
};