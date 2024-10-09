import React from "react";
import ReactDom from "react-dom/client";

const Header=()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className='logo' src="https://img.freepik.com/premium-photo/yellow-scooter-with-basket-fruit-front_1142157-52211.jpg?w=740" />
        </div>
        <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    );
};
const Search=()=>{
    return(
        <div className="Search-Bar">
                <div className="Search-Box">.</div>
                <h2>Search Here</h2>

            </div>
    )
}

const Restocard=()=>{
    return(
        <div className="rest-card">
                <img  className="img"src="https://b.zmtcdn.com/data/pictures/7/20712987/fd360263b066891f0c0ab59b7a9e6488.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"/>
                <h3>BHOLE KE CHHOLE</h3>
                <h3> rating 4.7  - 45 min</h3>
                
            </div>
    )
}

const Body=()=>{
    return(
        <div className="Body">
            
           <div className="Rest-Container">
            <Restocard/>
            
           </div>
           
        </div>
            
        
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Search/>
            <div className="abc">
            <Body/>
            <Body/>
            <Body/>
            <Body/>
            </div>
           
            
            
        </div>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />);