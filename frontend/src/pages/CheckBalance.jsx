import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/button/Button";
import Input from "../component/input/Input";
import { BASE_URL } from "../utils";

const CheckBalance = ()=>{

  const [ meter, setMeter ] = useState(0)
    
    const [ error, setErorr ] = useState("")
    const [ isSuccess, setIsSucess ] = useState(false)
    
    const [ response, setResponse ] = useState(
        {}
    )
    
    const handleChange = (e)=>{
      setMeter(e.target.value);
    }

    const loadElectricty = async (e) => {
      e.preventDefault()

        try {
            let { data } = await axios.get(`${BASE_URL}/meters/by-number/${meter}`)
            
            setErorr("")
            setIsSucess(true)
            setResponse(data)
            
        } catch (e) {
            setIsSucess(false)
            setErorr(e.response.data.message)
        }
    }

 return(
<div className="flex flex-col h-96 items-center justify-center">
          
<div className="w-full max-w-xs mt-3">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loadElectricty}>

  {error !== "" && <div className="text-red-500 w-[400px]">{error}</div>}
{isSuccess && <div className="text-lg text-green-500 w-[400px]">
           {response?.meter?.days} Days remaining :{response?.days}</div>}

    <div className="mb-6">
    <div className="mb-4">
      <Input label={"Meter Number"} placeholder="Meter Number" handleOnChange={handleChange}/>
    </div>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>

    <div className="flex items-center justify-between">
      <Button type={"submit"} label={"Check Balance"}/>
      <Link to="/buy" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
        Buy Other Token?
      </Link>
    </div>

  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Felix Dusengimana. All rights reserved.
  </p>
</div>
</div>
 )
}

export default CheckBalance