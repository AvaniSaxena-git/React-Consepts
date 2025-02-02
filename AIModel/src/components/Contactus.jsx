// import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
const ContactUs = () => {
  return (
    <div>
      <div className=" bg-cyan-950 h-screen">
        <div className="text-white text-6xl font-bold pt-14 text-center">
          Get IN TOUCH
        </div>
        {/* Address */}
        <div className="m-16">
          <div className="h-20 w-20 bg-sky-400 rounded-full flex items-center justify-center">
            <MdOutlineLocationOn color="white" size={53} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
