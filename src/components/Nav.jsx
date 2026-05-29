import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiHeartFill,RiUserLine,RiMenuLine,RiCloseLine } from "@remixicon/react";
export default function Navbar({ curr, setata }) {
 const [open, setOpen] = useState(false);
 function hello(){
console.log(curr);

 }
 //check if error
 useEffect(() => {
  if (curr && open) {
    
    setOpen(false);
  }
}, [curr, open]); // Runs whenever 'curr' or 'open' updates

 hello()
 const navStyle = ({ isActive }) =>
  `relative inline-block text-gray-200
   hover:text-gray-400
   hover:scale-[1.05]
   transition-all duration-300 ease-in-out
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:h-[2px] after:w-0 after:bg-cyan-400
   after:transition-all after:duration-300
   hover:after:lg:w-[80%]
   hover:after:sm:w-[50%] 
   ${isActive ? "text-cyan-300" : ""}`;
  return (
    <nav className="  navmain bg-transparent shadow-lg sticky top-0 z-50 ">
      <div className="  mainnavigation max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-4xl tracking-[0.5em] text-[#d5bb93] font-['Cinzel'] hover:scale-110 transition-all ease-in">
          Astra
        </h1>

        {/* Nav Links + controls */}
        <div className="nav-controls relative flex items-center gap-4 ">
          <div className={` navigation  flex items-center gap-8 text-amber-100 text-lg  font-extralight   font-stretch-expanded ${open ? 'open' : ''}`}>
            <NavLink to="/home" className={navStyle} onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/explore" className={navStyle} onClick={() => setOpen(false)}>
              Explore
            </NavLink>

            <NavLink to="/store" className={navStyle} onClick={() => setOpen(false)}>
              Store
            </NavLink>

            <NavLink to="/contact" className={navStyle} onClick={() => setOpen(false)}>
              Contact
            </NavLink>

            <NavLink to="/about" className={navStyle} onClick={() => setOpen(false)}>
              About
            </NavLink>
          </div>
          < RiUserLine  className="profilepic" />
          <button
            className="threedot"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <RiCloseLine /> : <RiMenuLine />}
          </button>

          {/* render mobile dropdown into a portal so it sits above videos/overlays */}
          {open  && typeof document !== "undefined" && createPortal(
            
            <div className="navigation  open mobile-portal" onClick={() => {}}>
              <NavLink to="/home" className={navStyle} onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/explore" className={navStyle} onClick={() => setOpen(false)}>Explore</NavLink>
              <NavLink to="/store" className={navStyle} onClick={() => setOpen(false)}>Store</NavLink>
              <NavLink to="/contact" className={navStyle} onClick={() => setOpen(false)}>Contact</NavLink>
              <NavLink to="/about" className={navStyle} onClick={() => setOpen(false)}>About</NavLink>
            </div>,
            document.body
          )}
        </div>
      </div>
    </nav>
  );
}