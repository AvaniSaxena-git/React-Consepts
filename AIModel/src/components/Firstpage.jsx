import Navbar from "./Navbar";
function Firstpage() {
  return (
    <div>
      <Navbar />

      <div className="w-full bg-cover bg-center bg-[#053067] bg-no-repeat h-[90vh] flex">
        <img
          src="https://i.pinimg.com/1200x/9d/24/df/9d24dfa532a036b2ac686de343b0b607.jpg"
          alt=""
          className="w-[700px] h-[500px] mt-10 mx-5"
        />
        <div className="  text-3xl h-[300px]   text-gray-300 mt-32 w-full ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <p className="text-6xl mb-3 font-bold mx-16 leading-3">At</p>
            <p className="text-6xl font-bold mx-16">HealthPredictAI,</p>
          </div>
          <p className=" text-2xl mt-6 mx-16">
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
