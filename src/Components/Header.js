import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header=()=>{

    const[buttonName, setbuttonName]=useState("login");

    
    return (
        
    <div className="header">
        <div className="logo-container">
            <img className='logo' src={LOGO_URL} />
        </div>
        <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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