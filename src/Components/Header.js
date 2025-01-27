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
        
    <div className="header">
        <div className="logo-container">
            <img className='logo' src={LOGO_URL} />
        </div>
        <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus? "🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/About">About Us 
                        </Link>
                        </li>
                             
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                        </li>
                    <li>Cart</li>
                    <button className="search-btn" onClick={()=>{
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