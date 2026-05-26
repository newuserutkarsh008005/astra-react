import { NavLink } from "react-router-dom";

export default function Navbar() {
 const navStyle = ({ isActive }) =>
  `relative text-gray-200 hover:text-slate-400 hover:scale-y-110 transition-all-colors duration-300 ease-in-out
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:w-0 after:h-[2px] after:bg-cyan-400
   after:transition-all after:duration-300
   
   hover:after:w-full ${
     isActive ? "text-cyan-400" : ""
   }`;

  return (
    <nav className="bg-transparent shadow-lg sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-4xl tracking-[0.5em] text-[#d5bb93] font-['Cinzel'] hover:scale-130 transition-all ease-in">
          Astra
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-amber-100 text-lg  font-extralight   font-stretch-expanded">
          <NavLink to="/home" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/explore" className={navStyle}>
            Explore
          </NavLink>

          <NavLink to="/store" className={navStyle}>
            Store
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}