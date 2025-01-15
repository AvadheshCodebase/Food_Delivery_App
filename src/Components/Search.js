import resList from "./resList";
// import { useState } from "react";




const Search=()=>{
    return(
        <div className="Search-Bar">
            <input type="text" className="Search-Box"/>
            <button className="Search-btn" onClick={()=>{
              console.log("search button clicked");
            }}>Search</button>

            </div>
    )
}

export default Search;