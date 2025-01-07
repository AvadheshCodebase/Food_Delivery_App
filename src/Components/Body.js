import resList from "./resList";
import Restocard from "./Restocard";
import { useState, useEffect} from "react";



const Body=()=>{
    let [ListOfResturants, setListOfResturants]=useState(resList);

    useEffect(()=>{
         fetchData();
        
    },[])

    const fetchData=  async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9187318&lng=77.49744160000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    }
    
   
     return(

        <div className="Body">
            <div  className="btn">
            <button onClick={()=>{
                   console.log("button clicked");
                   const resFilter=resList.filter((res)=>res.info.avgRating>4
                   
                 );
                 console.log(resFilter)
                 setListOfResturants(resFilter);
                }}
               
               >
                 Top rated Resturant
                </button>

              </div>

              
                

            
           <div className="Rest-Container">
            {/* <Restocard resData = {resList[0]}/>
            <Restocard resData ={resList[1]}/>
            <Restocard resData={resList[2]}/> 
            <Restocard resData={resList[3]}/>  */}
            
            { ListOfResturants.map((res,key={resData})=>(
                <Restocard resData ={res}/>
            ))}
            
           </div>
           
        </div>
            
        
    )
}

export default Body;