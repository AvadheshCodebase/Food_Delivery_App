import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";


class About extends Component{
    constructor(props){
        super(props);
        //  console.log("parent constructor called");
        
        
    }
    componentDidMount(){
        // console.log("parent DidMount called");
    }

    render(){

        // console.log("parent render called");

        return (<div>
            <p>Article about the page</p>
            <h2>Details about website</h2>
    
           {/* <User  name="Avadesh Kumar(functional)"/> */}
           <UserClass name="Avadesh Kumar(Class))" place="Kashi"/>
           
            </div>
            
        )
    }
}
// const About=()=>{
//     return (<div>
//         <p>Article about the page</p>
//         <h2>Details about website</h2>

//        <User  name="Avadesh Kumar(functional)"/>
//        <UserClass name="Avadesh Kumar(Class))" place="Kashi"/>
//         </div>
        
//     )
// }

export default About;