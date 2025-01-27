import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/constant";


const useResturantMenu=(resId)=>{
    const [ resInfo , setresInfo]= useState(null)

    useEffect(()=>{

        fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch(MENU_URL + resId);
        const json=await data.json();
      setresInfo(json?.data);
    }

    return resInfo;
}
export default useResturantMenu;