// import resList from "./resList";
//  import { useState, useEffect } from "react";
 
 
// const Search=()=>{



//   console.log(ListOfResturants[0]);

  
//     return(
//         <div className="Search-Bar">

//             <input type="text" className="Search-Box" 
//             value ={searchText}
//             onChange={(e)=>{ 
//               // console.log(e.target.value)
//               setsearchText(e.target.value);
//             }}/>

//             <button className="Search-btn" onClick={()=>{
//               console.log("Search triggered with:", searchText);
//               console.log(ListOfResturants[0]);
              
//               let filteredList1=ListOfResturants.filter((res)=>{
//                 console.log(res.info?.name);
//                return  res.info?.name.toLowerCase().includes(searchText.toLowerCase());
//               }
// );
// console.log(filteredList1);
// console.log(filteredList1.length);
// console.log(ListOfResturants);
              
//               setfilteredList1(filteredList1);
//               console.log(ListOfResturants);
              
//             }}>Search</button>


//             </div>
//     )
// }


// const Search = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");
 
//   useEffect(() => {
//     fetchData();
//   }, []);
 
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9187318&lng=77.49744160000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//     setListOfRestaurants(restaurants);
//     setFilteredRestaurants(restaurants); // Set filteredRestaurants initially to show all
//   };
 
//   const handleSearch = () => {
//     const filteredList = listOfRestaurants.filter((res) =>
//       res.info?.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredRestaurants(filteredList);
//   };
 
//   return (
// <div className="Search-Bar">
// <input
//         type="text"
//         className="Search-Box"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
// <button className="Search-btn" onClick={handleSearch}>
//         Search
// </button>
 
      
// </div>
//   );
// };

//  export default Search;