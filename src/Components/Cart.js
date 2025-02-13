const Cart=()=>{
    return (
    // <div className="p-2   h-300  bg-blue-100 flex">
    //   <div className="p-2 mt-7 mb-50 ml-40 w-3/4  border-1 border-black-300 bg-white">  
    //      <h1>Choose a delivery address</h1>
    //      <div className="p-2 m-5 h-210 border-1 border-black-300  bg-white">
    //            <div className="p-2    flex">
    //               <div className="p-2 m-2 w-1/2 h-70 border-b-2"><h2>Home</h2></div>
    //               <div className="p-2 m-2  w-1/2 border-1 border-black-100"><h2>Work</h2></div>
    //            </div>
    //           <div className="p-2    flex">
    //              <div className="p-2 m-2 w-1/2 h-70 border-1 border-black-300"><h2>Avadhesh Kumar</h2></div>
    //              <div className="p-2 m-2 w-1/2 border-1 border-black-300"><h2>Add new address</h2></div> 
    //            </div>
    //       </div>
    //     </div>
    //     <div className="p-2 mt-7 mb-50 ml-10 mr-40 w-1/4 border-1 border-black-300 bg-white">
    //         <h1 >Payment Gateway</h1>
    //     </div>
    // </div>
   
    <div class="flex flex-col lg:flex-row lg:space-x-6">
        <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-xl font-semibold mb-4">Choose a delivery address</h2>
            <p class="text-gray-600 mb-6">Multiple addresses in this location</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border p-4 rounded-lg  shadow-2xl curser cursor-pointer">
                    <h3 class="flex items-center text-lg font-semibold mb-2">
                        <i class="fas fa-home mr-2"></i> Home
                    </h3>
                    <p class="text-gray-600 mb-4">19,Sri Karthikeya pg -gents,7, 2nd Cross, Near Global Village Back Gate, Balaji LayoutMysandra, RV Vidyaniketan, Ma...</p>
                    <p class="text-gray-600 mb-4">38 MINS</p>
                    <button class="bg-green-500 text-white py-2 px-4 rounded">DELIVER HERE</button>
                </div>
                <div class="border p-4 rounded-lg">
                    <h3 class="flex items-center text-lg font-semibold mb-2">
                        <i class="fas fa-briefcase mr-2"></i> Work
                    </h3>
                    <p class="text-gray-600 mb-4">7 Hills PG For Gents @ Global Village, BEML Layout, Mailasandra, Bengaluru, Karnataka, India</p>
                    <p class="text-gray-600 mb-4">38 MINS</p>
                    <button class="bg-green-500 text-white py-2 px-4 rounded">DELIVER HERE</button>
                </div>
                <div class="border p-4 rounded-lg">
                    <h3 class="flex items-center text-lg font-semibold mb-2">
                        <i class="fas fa-user mr-2"></i> Avadhesh Kumar
                    </h3>
                    <p class="text-gray-600 mb-4">Sreshta PG, RV Vidyaniketan, Mailasandra, Bengaluru, Karnataka, India</p>
                    <p class="text-gray-600 mb-4">34 MINS</p>
                    <button class="bg-green-500 text-white py-2 px-4 rounded">DELIVER HERE</button>
                </div>
                <div class="border p-4 rounded-lg">
                    <h3 class="flex items-center text-lg font-semibold mb-2">
                        <i class="fas fa-plus-circle mr-2"></i> Add New Address
                    </h3>
                    <p class="text-gray-600 mb-4">RV Vidyaniketan, Mailasandra, Bengaluru, Karnataka, India</p>
                    <button class="bg-green-500 text-white py-2 px-4 rounded">ADD NEW</button>
                </div>
            </div>
        </div>
        <div>
            <h1>Payment Details</h1>
        </div>
    </div>






    );
};

export default Cart;