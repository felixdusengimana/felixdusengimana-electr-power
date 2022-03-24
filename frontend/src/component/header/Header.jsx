import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
        <div className="bg-white shadow-sm flex flex-row items-center justify-between px-4 py-5">
            <div className="">
             <p className="font-bold" data-testid="companyname">PowerBank</p>
            </div>
            <div className="text-sm">
                <Link to="/">Home</Link>
                <Link to="/buy" className="bg-blue-700 text-white px-5 py-2 rounded ml-3">Buy Power</Link>
                <Link to={'/load-token'} className="bg-blue-700 text-white px-5 py-2 rounded ml-3">Load Token</Link>
                <Link to="/checkbalance" className="bg-blue-700 text-white px-5 py-2 rounded ml-3">Check Balance</Link>
            </div>
        </div>
        </>
    )
}

export default Header