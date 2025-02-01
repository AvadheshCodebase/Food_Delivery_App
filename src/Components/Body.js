import resList from "./resList";
import Restocard,{withpromotedLabel}from "./Restocard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body=()=>{
    
    let [ListOfResturants, setListOfResturants]=useState([]);
   const[filteredResturant, setfilteredResturant]=useState([]);
    const [searchText, setSearchText] = useState("");


    const ResturantWithLabel= withpromotedLabel(Restocard);
    // console.log(ListOfResturants[0]);

    useEffect(()=>{
         fetchData();
        
    },[])

    const fetchData=  async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9187318&lng=77.49744160000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating);
        setListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);  
      };

        
         const onlineStatus = useOnlineStatus();
         console.log(onlineStatus);

       if (onlineStatus==false)
        return  (
       <h1>opps!!! you went offline</h1>
      );
    
    
   
      
    return ListOfResturants.length == 0?(
         <Shimmer/>
        ):(

        <div className="Body">
            <div className="flex m-3 p-2">
               <div  className="m-3 p-2  bg-amber-300 rounded-3xl border-2 to-black">
                <button onClick={()=>{
                     console.log("button clicked");
                   
                     const resFilter=ListOfResturants.filter((res)=>res.info?.avgRating>4.5
                   
                     );
                //  console.log(resFilter)
                //  console.log(ListOfResturants[0]);
                setListOfResturants(resFilter);
                     }}
               
                    >
                 Top rated Resturant
                </button>

               </div>

               <div className=" flex ">

              <input type="text" className=" m-3 p-2 border-2 solid to-black h-12 rounded-3xl" 
              value ={searchText}
              onChange={(e)=>{ 
              // console.log(e.target.value)
              setSearchText(e.target.value);
              }}/>

              <button className="m-3 p-2 text-2xl bg-amber-300 rounded-3xl" onClick={()=>{
              console.log("Search triggered with:", searchText);
            //   console.log(ListOfResturants[0]);
              
              const filteredResturant1=ListOfResturants.filter((res)=>{
                console.log(res.info);
               return  res.info?.name.toLowerCase().includes(searchText.toLowerCase());
              }
                );
                //   console.log(filteredList1);
                //   console.log(filteredList1.length);
                   console.log(ListOfResturants);
              
                   setfilteredResturant(filteredResturant1);
                   console.log(ListOfResturants);
              
                 }}>Search</button>


               </div>

            </div>
                

            
           <div className="flex flex-wrap">
              {filteredResturant.map((res)=>(
               <Link 
                to={"/Resturants/" + res?.info?.id} 
                key={res?.info?.id}> 


              {res.info.isOpen? (<ResturantWithLabel resData ={res}/>):(
               <Restocard  resData ={res}/>)}
            
               </Link>
            ))}
           
           </div>
           
        </div>
            
        
    )
}

export default Body;