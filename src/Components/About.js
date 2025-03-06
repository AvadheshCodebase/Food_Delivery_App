import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";
import {lazy} from "react"



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

        return (
        <div className=" place-content-center">
            <h1 className="font-bold text-3xl p-2 m-3">About Us :</h1>
            <div className="w-1/2 mx-50 my-1">
            <p className=" p-2 ">Welcome to Food Delivery App, your go-to food delivery platform that brings your favorite meals right to your doorstep! We connect you with the best local restaurants, ensuring fresh, delicious, and hassle-free dining experiences—anytime, anywhere.</p>
        
           </div>
           <h2 className="font-bold text-2xl p-2 m-2">Who We Are :</h2>
           <div className="w-1/2 mx-50 my-3">
            <p className=" p-2 ">We are a team of food lovers and tech enthusiasts dedicated to making food delivery faster, easier, and more reliable. Whether you're craving comfort food, healthy eats, or something exotic, we’ve got you covered.</p>
        
           </div>
           <h2 className="font-bold text-2xl p-2 m-4">What We Offer :</h2>
           <div className="w-1/2 mx-50 my-3">
           <ul>
             <li>🍕<strong> Wide Variety:</strong> From street food to fine dining, explore a diverse range of cuisines.</li>
             <li>🚀<strong> Fast Delivery: </strong> Get your food delivered hot and fresh in record time.</li>
             <li>💳<strong> Easy Payments: </strong> Multiple payment options for a seamless checkout experience.</li>
             <li>⭐<strong> Exclusive Deals: </strong> Enjoy discounts, offers, and loyalty rewards.</li>
           </ul>
           </div>
           <h2 className="font-bold text-2xl p-2 m-4">What We Offer :</h2>
           <div className="w-1/2 mx-50 my-3">
           <ul>
             <li><strong>Convenience:</strong>Order food with just a few taps.</li>
             <li><strong>Quality Assurance: </strong> Partnering with trusted restaurants to ensure top-notch meals.</li>
             <li><strong>24/7 Support: </strong>Our team is always ready to assist you.</li>

             

             
           </ul>
           </div>
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