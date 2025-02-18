

const Contact = () => {
  return (
    <div className=" flex justify-center items-center">
      <form className="flex flex-col p-2 m-2 h-80 border-3 border-black">
        <h1 className="p-2 m-2 text-2xl text-blue-700  text-center font-bold">Kindly submit the request!</h1>
        <input className="p-2 m-2 border border-black " type="text" placeholder="Username"></input>
        <input className=" p-2 m-2 border border-black " type="text" placeholder="Email"></input>
        <input className=" p-2 m-2 border border-black " type="text" placeholder="Message"></input>
        <button className="flex my-4 mx-30 p-2 h-10 w-17 bg-orange-500 text-white  rounded-xl shadow-md hover:bg-orange-600">Submit</button>
        </form>
    </div>
  )
}

export default Contact;