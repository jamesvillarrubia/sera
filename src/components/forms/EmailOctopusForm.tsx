import { useEffect, useRef } from 'react';

export const EmailOctopusForm = () => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/0f4dcb86-eade-11ef-98ed-0d5253b99da6.js';
    script.async = true;
    script.setAttribute('data-form', "0f4dcb86-eade-11ef-98ed-0d5253b99da6");

    if(myRef.current){
      const myRefNode = myRef.current
      myRefNode.appendChild(script);
  
      return () => {
        myRefNode.removeChild(script); //Except this doesn't work, see below how to fix it
      };  
    }

  }, []);

  return (
    <>
      <div ref={myRef}></div>
    </>
  );
};