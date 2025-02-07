import { CDN_URL } from "../utils/constant";

const ListItems=({props})=>{
    // console.log(props?.itemCards[0]?.card?.info.name);


    return (<div>
         
           {/* <h1>{props?.itemCards[0]?.card?.info.name}</h1> */}
            {props.map((p)=>(
                
             <div className="p-2 m-2 border-gray-200 border-b-2 text-left" key={p.card?.info.price}>
                <div className="p-2 m-2">
                   <span className="font-bold "> {p.card?.info.name }</span>
                  <div>
                  <span> Rs-{p.card?.info.price/100 || p.card?.info.defaultPrice/100} </span>
                  <img className="w-20 h-20"src={CDN_URL+ p.card?.info.imageId }/>
                   </div>
                </div>

                 <p>{p.card?.info.description}</p>
              </div>
           )
           ) }
          
        </div>
    )
}
 export default ListItems;