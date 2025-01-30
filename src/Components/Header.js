import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header=()=>{

    const[buttonName, setbuttonName]=useState("login");
    console.log("login button clicked");

    useEffect(()=>{
        console.log("useEffectCalled");
    },[(buttonName)])

      const onlineStatus = useOnlineStatus();

    // if (onlineStatus==false) 
    //     return
    //     <h1>opps you went offline</h1>;
    
    return (
        
    <div className="flex m-2 p-3 bg-amber-200 sm:bg-blue-200 border-3 border-black-400 justify-between">
        <div className="logo-container">
            <img className="size-50" src={LOGO_URL} />
        </div>
        <div className=" flex  ">
                <ul className="flex m-2 p-1">
                    <li className="flex m-2 p-1">
                        Online Status: {onlineStatus? "🟢":"🔴"}
                    </li>
                    <li className="flex m-2 p-1">
                        <Link to="/">Home</Link></li>
                    <li className="flex m-2 p-1">
                        <Link to="/About">About Us 
                        </Link>
                        </li>
                             
                    <li className="flex m-2 p-1">
                        <Link to="/Contact">Contact Us</Link>
                        </li>
                    <li className="flex m-2 p-1">Cart</li>
                    <button className="flex m-2 px-2 bg-blue-500 h-9 w-15 rounded-2xl border-2" onClick={()=>{
                     buttonName =="login"?setbuttonName("logout"): setbuttonName("login");

                    }}>
                        {buttonName}
                        </button>
                </ul>
            </div>
        </div>

    );
};

export default Header;