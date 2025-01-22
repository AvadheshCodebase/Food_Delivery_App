import {useState,useEffect} from "react";

export const ResturantMenu = () => {


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        console.log(json.data);
    }

  return (
    <div>
        <h1>Resturant Name</h1>
        <h2>Items List</h2>
        <ul>
            <li>Dal</li>
            <li>Rice</li>
            <li>Chatni</li>
            <li>Chokha</li>
        </ul>

    </div>
  )
}

export default ResturantMenu;
