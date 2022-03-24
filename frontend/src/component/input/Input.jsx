import React from "react";

const Input = ({placeholder, defaultValue, type, label, handleOnChange, name})=>{
    return(
        <>        
    <div className="mb-4">
     {label&&<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
        {label}
      </label>
      }
      <input 
      type={type} 
      defaultValue={defaultValue} 
      placeholder={placeholder} 
      onChange={handleOnChange}
      name={name}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"/>
    </div>
        </>
    )
}
export default Input