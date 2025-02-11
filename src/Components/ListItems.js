import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addItems} from "../utils/CartSlice";






const ListItems=({props})=>{

   const dispatch=useDispatch();

   const handleAddItems=(items)=>{

      dispatch(addItems(items));
   };
    // console.log(props?.itemCards[0]?.card?.info.name);
    
    return (<div>

      
         
           {/* <h1>{props?.itemCards[0]?.card?.info.name}</h1> */}
            {props.map((items)=>(
                
             <div className="flex p-2 m-2 items-center justify-between border-gray-200 border-b-2 text-left" key={items.card?.info.price}>
               
                  <div className="w-3/4 p-2 m-2">
                        <div>
                             <span className="font-bold "> {items.card?.info.name }</span>
                        </div>
                        <div >
                             <span> Rs-{items.card?.info.price/100 || items.card?.info.defaultPrice/100} </span>
                        </div>
                        <div >
                          <p className="font-10 gilroy-bold">{items.card?.info.description}</p>
                        </div>
                        
                   
                     </div>
                     <div className="w-1/4 p-2 m-2 text-center ">
                           <div >
                              <img  className="w-35 h-35 _3Xs7H rounded-xl"src={CDN_URL+ items.card?.info.imageId }/>
                           </div>
                           <div className="relative">
                              <div className="   " > 
                                 <button onClick={()=>{
                                    handleAddItems(items);
                                 }}className="w-20 absolute bottom-6 right-12 bg-orange-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-orange-600">ADD+</button>
                              </div>
                              <div className="mt-2 text-gray-600">Customisable</div>
                           </div>
                      </div>     
                         
              </div>
           )
           ) }
          
        </div>
    )
}
 export default ListItems;