import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super()
        this.state={
            count:0,
            count2 :5,
        }
        console.log(this.state);
    }
    render(){
        const {name,place}=this.props;
        const{count,count2}=this.state;

        return(
          
       <div className="user-card">
             <h1>Name:Avadhesh : {name}</h1>
             <h1>count :{count}</h1>
             <h1>count :{count2}</h1>
             <h1>Place:Varanasi :{place} </h1>
             <h1>Locality:Rural</h1>
            </div>
            )
    }
}

export default UserClass;