import resList from "./resList";



const Restocard=(props)=> {
    const {resData } = props;
    const {name,avgRatingString,slaString,costForTwo}  =   resData?.info;

    return(
        <div className="rest-card">
                                        
                <img  className="img"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
                <h3>{name}</h3>
                <h3>{avgRatingString}</h3>
                <h3>{slaString}</h3>
                <h3>{costForTwo}</h3>
                
            </div>
    )
}

export default Restocard;