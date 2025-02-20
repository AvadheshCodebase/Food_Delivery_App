import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";




export const ResturantMenu = () => {

    // const [ resInfo , setresInfo]= useState(null);
    const[showIndex,setshowIndex]= useState(null);

    const {resId} =useParams();

    const resInfo=useResturantMenu(resId); // custom hook created
 console.log(resInfo);


    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData = async ()=>{
    //     const data= await fetch(MENU_URL + resId);
    //     const json= await data.json();
    //      console.log(json?.data);
    //     console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[3]?.dish?.info?.name);
    
    //     setresInfo(json?.data);
       
    // }
    if( resInfo==null)
    return <Shimmer/>

     // desturing the data
     const details= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
   //   console.log(details);

     const itemCategory= details.filter(item=>item.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
     console.log(itemCategory);
     
    return(
    <div className="text-center">
       <div className="my-10 w-6/12 items-center m-auto  bg-gray-100 ">
           <h1 className="font-medium my-4">{resInfo?.cards[0]?.card?.card?.text}</h1>
           <h2 className="font-medium my-1">Rs-{resInfo?.cards[2]?.card?.card?.info?.costForTwo/100} avg rating is - {resInfo?.cards[2]?.card?.card?.info?.avgRating}</h2>
        </div>
        <div>
           {itemCategory.map((c,Index)=>
             <ResturantCategory key={c?.card?.card.title}
             data={c?.card?.card}
             showItem={Index== showIndex }
             
              // setshowIndex={()=>setshowIndex(Index)}  // lifting the state up
              setshowIndex={() => setshowIndex((prevIndex) => (prevIndex === Index ? null : Index))}
             />)
            }

            
          
       
        </div>
    

    </div>
  )
}

export default ResturantMenu;
