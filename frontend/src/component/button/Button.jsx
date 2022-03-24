import React from "react";

const Button = ({label, handleClick, type})=>{
return(
    <>
    <button 
    onClick={handleClick}
    data-testid="button"
    className="bg-blue-700 hover:bg-blue-800 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
     type={type || "button"}>
        {label}
      </button>
  </>
)
}

export default Button