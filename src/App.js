import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import resList from "./Components/resList";
//import Restocard from "./Components/Restocard";
import { LOGO_URL } from "./utils/constant";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* <Search/> */}
            <Body/>
           
            
            
        </div>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />);