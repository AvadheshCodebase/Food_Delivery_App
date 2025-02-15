import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearCart } from "../utils/CartSlice";


const Cart=()=>{

    const dispatch=useDispatch();
     
    const clearItems=()=>{
        dispatch(clearCart());
    };


    const cardItems=useSelector((store)=>store.cart.items); // subscribing the redux store
    // console.log(cardItems);

    
    return (
    <div className="text-center w-6/12 m-auto ">
     <h1 className=" font-bold" >Cart</h1>
     <div>
     
        <ListItems props={cardItems}/>

        <button className="m-3 p-2 text-1xlh-8 w-25 bg-orange-500 text-white  rounded-xl shadow-md hover:bg-orange-600" 
        onClick={clearItems}>
            Clear Cart</button>
        {cardItems.length==0 && <h1 className="font-bold">Kindly add some items...</h1>}

       
     </div>
    </div>
   
   





    );
};

export default Cart;