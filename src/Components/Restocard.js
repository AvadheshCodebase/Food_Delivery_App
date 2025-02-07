import resList from "./resList";
import { CDN_URL } from "../utils/constant";



const Restocard=(props)=> {

    
    const {resData } = props;  // destusturing the data
    // we have done here optinal chaining
    const {name,avgRatingString,slaString,costForTwo}  =   resData?.info;

    return(
        <div className="rest-card m-2 p-1 w-50 h-83 border-2 justify-between hover:bg-sky-400">
                                        
                <img  className="img h-55 rounded-2xl"src={CDN_URL + resData.info.cloudinaryImageId}/>
                <h3>{name}</h3>
                <h3>{avgRatingString}</h3>
                <h3>{slaString}</h3>
                <h3>{costForTwo}</h3>
                
            </div>
            
    )
}


export const withpromotedLabel=(Restocard)=>{
    return(props)=>{
        return (
            <div>
            <label className="absolute bg-black text-white ">Open</label>
            <Restocard  {...props}/>
            </div>

        )
    }
}

export default Restocard;
