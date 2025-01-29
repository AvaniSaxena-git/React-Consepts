import React from "react";
function Firstpage(){
    
    return (<div>
        <Navbar/>
        <div className="flex px-3 py-3 items-center bg-center h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(https://i.pinimg.com/736x/dd/5e/55/dd5e552237e8fcbc6a012b37cd0f08d2.jpg)" }}>
        <div className="h-[400px] ml-[800px] mt-[200px] w-[600px] flex-col justify-center items-center text-3xl text-white text-center font-stretch-125% ">At HealthPredictAI , we leverage the power of advanced AI technology to bring predictive insights that enhance healthcare decision-making. Our innovative solutions empower healthcare providers to anticipate patient needs, identify risks early, and deliver more personalized, effective care. 
        <div className="flex items-center justify-center mt-10">
            <a href="">
              <button className="  bg-white-500 text-white underline rounded-lg hover:bg-blue-600 transition text-center text-xl font-medium focus:outline-none ">
                Register
              </button>
            </a>
            <p>/</p>
            <a href="">
              <button className=" bg-white-200 underline text-white rounded-lg hover:bg-blue-600 transition text-center text-xl font-medium focus:outline-none  ">
                Login
              </button>
            </a>
    
            </div>
 </div>
 
    
        </div>
        </div>
    )
}
export default Firstpage