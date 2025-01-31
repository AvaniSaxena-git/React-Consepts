
import Navbar from "./Navbar";
function Firstpage(){
    
    return (<div>
        <Navbar/>
        

        <div className=" items-center bg-cover bg-center h-screen bg-no-repeat"
        style={{ backgroundImage: "url(https://i.pinimg.com/736x/7a/ba/15/7aba15c48e0f5c43801b415a4100cf71.jpg)" }}>
           <div className=" flex h-screen items-center w-[900px] bg-center bg-no-repeat "
        style={{ backgroundImage: "url(https://i.pinimg.com/1200x/9d/24/df/9d24dfa532a036b2ac686de343b0b607.jpg)"}}>
  
        <div className=" justify-center  items-center text-3xl h-[300px] w-[500px]  ml-[950px] mb-[200px] text-gray-300 text-center"><p className="mr-[100px] text-5xl mb-3 font-bold text-left">At HealthPredictAI ,</p><p className="text-left text-3xl mt-3"> we leverage the power of advanced AI technology to bring predictive insights that enhance healthcare decision-making. Our innovative solutions empower healthcare providers to anticipate patient needs, identify risks early, and deliver more personalized, effective care. 
    </p>

        
        <div className="mt-[400px] ml-[1000px] ">  
        <div className="flex items-center justify-center mt-10  ">
          <a href="">
            <button className=" py-2 px-8 bg-blue-562 text-white rounded-lg hover:bg-zinc-900 transition mx-10 text-center text-xl font-medium focus:outline-none border-white border">
              Register
            </button>
          </a>
          <a href="">
            <button className=" py-2 px-8 bg-blue-562 text-white rounded-lg hover:bg-zinc-900 transition text-center text-xl font-medium focus:outline-none border-white border">
              Login
            </button>
          </a>
        </div>
 </div> 
  </div>
 </div>
 
    
        </div></div>
      
    )
}
export default Firstpage