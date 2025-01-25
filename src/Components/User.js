import { useState } from "react";

const User=(props)=>{
  
    const[count]=useState(0);
    const[count2]=useState(5);
   

    const {name}=props;   // destructuring
    return(
        
    <div className="user-card">
     <h1>Name:Avadhesh :{name}</h1>
     <h1>count :{count}</h1>
     <h1>count2 :{count2}</h1>
     <h1>Place:Varanasi</h1>
     <h1>Locality:Rural</h1>
    </div>
    )
}
export default User;