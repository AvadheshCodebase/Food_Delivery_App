import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super()
        this.state={
            userInfo:{
            name:"nnjdhsf",
            place:"vns"
            }
            
        }
        // console.log("Child constructor called");
    }

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/AvadheshVns");
        const json= await data.json();
        console.log(json);

        this.setState({
            userInfo:json,

        })
        // console.log("Child Did Mount called");
    }

    render(){
        const {name,company}=this.state.userInfo;
        // const{count,count2}=this.state;
        // console.log("Child render called");

        return(
          
       <div className="user-card">
             <img src="https://avatars.githubusercontent.com/u/159410471?v=4"/>
             <h1>Name: {name}</h1>
             <h1>Company:{company} </h1>
             {/* <h1>count :{count}</h1> */}

             {/* <h1>count :{count2}</h1> */}
             {/* <button onClick={()=>{
               this.setState({
                count:this.state.count+1,
               })
     }}>click me</button> */}

             
             <h1>Locality:Rural</h1>
            </div>
            )
    }
}

export default UserClass;