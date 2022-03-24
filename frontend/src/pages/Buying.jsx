import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/button/Button";
import Input from "../component/input/Input";
import { BASE_URL } from "../utils";
const Buying = ()=>{
 
  const [buyingData, setbuyingData] = useState({
    amount: 0,
    meter_number: ""
  })
  const [ error, setErorr ] = useState("")
  const [ isSuccess, setIsSucess ] = useState(false)
  const [ token, setToken ] = useState()

  const handleChange = (e)=>{
    var name = e.target.name;
    var value = e.target.value;
    setbuyingData({ ...buyingData, [name]: value });
  }
  const handleBuy = async (e)=>{
    e.preventDefault();
  
    try {
      let {data}  = await axios.post(`${BASE_URL}/tokens/buy`, buyingData)
      
      setErorr("")
      setIsSucess(true)
      setToken(data.body.token)
  } catch (error) {
    setIsSucess(false)
    setErorr(error.response.data.message)
  }

  }

return(
  <>

<div className="flex flex-col h-full mt-10 items-center justify-center">

<div className="w-full max-w-sm">

  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleBuy}>

  <h1 className="text-3xl font-medium">Buy Electricty</h1>
{error !== "" && <div className="text-red-500 w-[400px]">{error}</div>}
{isSuccess &&
    <div className="text-lg text-green-500 w-[400px]">
      <p>Sucessfully Token bought</p>
     <p>Your token: {token}</p>
    </div>}

    <div className="mb-4 mt-4">
      <Input 
      label={"Amount of money"}
      placeholder="Amount Of Money"
      name = "amount"
      type="number"
      handleOnChange={handleChange}/>
    </div>

    <div className="mb-6">
    <div className="mb-4">
      <Input 
       handleOnChange={handleChange}
       name ="meter_number"
      label={"Meter Number"} placeholder="Meter Number"/>
    </div>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>

    <div className="flex items-center justify-between">
      <Button  type="submit" label={"Buy Token"}/>
      <Link to="/checktoken" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
        Check Token intead?
      </Link>
    </div>

  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2022 Felix Dusengimana. All rights reserved.
  </p>
</div>
</div>
</>
 )
}

export default Buying