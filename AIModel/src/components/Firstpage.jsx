import Navbar from "./Navbar";
import About from "./About";
import ContactUs from "./Contactus";

function Firstpage() {
  return (
    <div>
      <Navbar />
     

      <div className="w-full bg-teal-600 bg-cover bg-center text-black bg-no-repeat h-[90vh] flex ">
        <img
          src="/src/assets/First_page.jpeg"
          alt=""
          className="w-[750px] h-[500px] flex justify-center items-center mt-14"
        />

        <div className="  text-3xl h-[300px]   text-gray-300 mt-32 w-full font-medium ">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-teal-300">
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
      
      </div><About/>
      <ContactUs/>
      
    </div>
   
  );
}
export default Firstpage;
