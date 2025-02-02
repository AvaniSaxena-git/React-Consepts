import { Link } from "react-router-dom"; // If you're using react-router-dom for routing

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-teal-900 p-5">
        <div className="max-w-8xl text-2xl ml-8 mx-auto flex justify-between  items-center">
          {/* Logo Image */}
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/736x/c5/de/31/c5de310fc68fb65b8305fbf3d72d9682.jpg"
              alt="Logo"
              className="h-12 rounded-full w-auto" // You can adjust the height and width as needed
            />
           <p className="text-slate-100 ml-1 font-bold text-3xl"> MediForetell</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8  text-white">
            <li>
              <Link to="/" className="hover:text-gray-300 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="rounded">Register</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className="rounded">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;