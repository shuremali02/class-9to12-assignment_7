import React from 'react';

const Button2 = ({button,href}:{button:string,href:string}) => {
  return (
    <button onClick={()=>{window.location.href=href}} className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
     {button}
    </button>
  );
}

export default Button2;
