import resList from "./resList";
import Restocard from "./Restocard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body=()=>{
    
    let [ListOfResturants, setListOfResturants]=useState([]);
   const[filteredResturant, setfilteredResturant]=useState([]);
    const [searchText, setSearchText] = useState("");

    // console.log(ListOfResturants[0]);

    useEffect(()=>{
         fetchData();
        
    },[])

    const fetchData=  async ()=>{
    //    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9187318&lng=77.49744160000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json = await data.json();
        console.log(json);
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating);
       //  setListOfResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setfilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };
    
   
    return ListOfResturants.length == 0?(
         <Shimmer/>
        ):(

        <div className="Body">
            <div className="filter">
               <div  className="btn">
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

               <div className="Search-Bar">

              <input type="text" className="Search-Box" 
              value ={searchText}
              onChange={(e)=>{ 
              // console.log(e.target.value)
              setSearchText(e.target.value);
              }}/>

              <button className="Search-btn" onClick={()=>{
              console.log("Search triggered with:", searchText);
            //   console.log(ListOfResturants[0]);
              
              const filteredResturant1=ListOfResturants.filter((res)=>{
                console.log(res.info?.name);
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
                

            
           <div className="Rest-Container">
            {/* <Restocard resData = {resList[0]}/>
            <Restocard resData ={resList[1]}/>
            <Restocard resData={resList[2]}/> 
            <Restocard resData={resList[3]}/>  */}
            
            {filteredResturant.map((res)=>(
               <Link key={res?.info?.id}> <Restocard  resData ={res}/></Link>
            ))}
            
           </div>
           
        </div>
            
        
    )
}

export default Body;