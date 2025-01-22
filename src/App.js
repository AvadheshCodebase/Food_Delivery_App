import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import About from "./Components/About";
import resList from "./Components/resList";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";
//import Restocard from "./Components/Restocard";
import { LOGO_URL } from "./utils/constant";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* <Search/> */}
            <Outlet/>
           
            
            
        </div>
    );
};

const Approuter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout />,
    children:[
        {
        path:"/",
        element:<Body/>
        },
        {
            path:"/About",
            element:<About />
        },
        {
            path:"/Contact",
            element:<Contact />
        },
        {
            path:"/Resturants/:resId",
            element:<ResturantMenu />
        }
    ],
    errorElement:<Error/>
},

])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Approuter}/>);