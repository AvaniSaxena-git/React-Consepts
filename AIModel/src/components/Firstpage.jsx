import React from "react";
import Navbar from "./Navbar";
function Firstpage(){
    
    return (<div>
        <Navbar/>
        <div className="flex px-3 py-3 items-center bg-center h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(https://i.pinimg.com/736x/88/98/8c/88988cd24f3ea6644320b91056e3feef.jpg)" }}>
        <div className="mt-[400px] ml-[1000px] ">  
        <div className="flex items-center justify-center mt-10  ">
          <a href="">
            <button className=" py-2 px-10 bg-blue-562 text-white rounded-lg hover:bg-zinc-900 transition mx-10 text-center text-xl font-medium focus:outline-none border-white border">
              Register
            </button>
          </a>
          <a href="">
            <button className=" py-2 px-10 bg-blue-562 text-white rounded-lg hover:bg-zinc-900 transition text-center text-xl font-medium focus:outline-none border-white border">
              Login
            </button>
          </a>
        </div>
 </div>
 
    
        </div></div>
      
    )
}
export default Firstpage