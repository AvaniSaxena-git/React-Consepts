import Navbar from "./Navbar";
function Firstpage() {
  return (
    <div>
      <Navbar />

      <div className="w-full bg-cover bg-center bg-cyan-800 bg-no-repeat h-[90vh] flex">
        <img
          src="https://i.pinimg.com/736x/f5/8f/0b/f58f0b59ec8dadbd251883f175f2a188.jpg"
          alt=""
          className="w-[900px] h-[600px] mt-2 ml-0 mx-5"
        />

        <div className="  text-3xl h-[300px]   text-gray-300 mt-32 w-full ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <p className="text-6xl mb-3 font-bold mx-16 leading-3">At</p>
            <p className="text-6xl font-bold mx-16">HealthPredictAI,</p>
          </div>
          <p className="  text-2xl mt-6 mx-16">
            we leverage the power of advanced AI technology to bring predictive
            insights that enhance healthcare decision-making. Our innovative
            solutions empower healthcare providers to anticipate patient needs,
            identify risks early, and deliver more personalized, effective care.
          </p>
          
          
        </div>
      
      </div>
    </div>
  );
}
export default Firstpage;
