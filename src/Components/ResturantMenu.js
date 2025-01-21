import {useState,useEffect} from "react";

export const ResturantMenu = () => {


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data= await fetch("");
        const json= await data.json();
        console.log(json);
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
