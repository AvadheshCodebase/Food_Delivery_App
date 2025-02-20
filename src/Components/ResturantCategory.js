import ListItems from "./ListItems";
import { useState } from "react";

const ResturantCategory=({data,showItem,setshowIndex})=>{

  // console.log(data);
    

    const handleclick=()=>{
    //  setshowItems(!showItems); 
    
    setshowIndex();
    }
    return(
        <div>
          <div className="my-1 w-6/12 m-auto bg-gray-100   shadow-2xl curser cursor-pointer " >
                   <div className="flex justify-between font-bold" onClick={handleclick}>
                     {data.title}({data.itemCards.length})
                       
                       <span>{showItem ? "🔼" : "🔽"}</span>
                    </div>
                    <div className=" border-black">
                     {showItem && <ListItems props={data?.itemCards}/>}
                    </div>
           </div>


            

        </div>
    );
        
    
}
export default ResturantCategory;