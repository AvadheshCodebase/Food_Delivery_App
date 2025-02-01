import ListItems from "./ListItems";

const ResturantCategory=({data})=>{
    return(
        <div>
          <div className="my-1 w-6/12 m-auto bg-gray-100   shadow-2xl">
                   <div className="flex justify-between font-bold">
                     {data.title}({data.itemCards.length})
                       <span className="p-4">🔽</span>
                    </div>
                    <div className=" border-black">
                     <ListItems props={data?.itemCards}/>
                    </div>
           </div>


            

        </div>
    );
        
    
}
export default ResturantCategory;