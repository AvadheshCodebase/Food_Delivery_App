import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
 console.log(MENU_URL);



export const ResturantMenu = () => {

    const [ resInfo , setresInfo]= useState(null);

    const {resId} =useParams();
 


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data= await fetch(MENU_URL + resId);
        const json= await data.json();
         console.log(json?.data);
        console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[3]?.dish?.info?.name);
        // const path=json?.data;
        setresInfo(json?.data);
       
    }
    if( resInfo==null)
    return <Shimmer/>

     // desturing the data
     const {carousel}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
     console.log(carousel);

    
    return(
    <div>
        
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
         <h2>{resInfo?.cards[2]?.card?.card?.info?.avgRating}</h2> 
         {/* <p>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p> */}
        <ul>
        {carousel.map(Items=>
        <li id={Items.dish.info.id}>
            {Items.dish.info.name}- Rs {(Items.dish.info.price)/100}
            </li>)}
               
        </ul>

    </div>
  )
}

export default ResturantMenu;
