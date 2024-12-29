import React from 'react';

const Button = ({button,href}:{button:string,href:string}) => {
  return (
    <button onClick={()=>{window.location.href=href}} className="smky-btn3 relative text-xl font-semibold hover:text-black py-2 px-4 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">
     {button}
    </button>
  );
}

export default Button;
