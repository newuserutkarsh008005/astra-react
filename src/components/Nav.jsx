import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RiHeartFill,RiUserLine,RiMenuLine,RiCloseLine } from "@remixicon/react";
export default function Navbar() {
 const [open, setOpen] = useState(false);
 const navStyle = ({ isActive }) =>
  `relative text-gray-200 hover:text-slate-400 hover:scale-y-110 transition-all-colors duration-300 ease-in-out
   after:content-[''] after:absolute after:left-0 after:-bottom-1
   after:w-0 after:h-[2px] after:bg-cyan-400
   after:transition-all after:duration-300
   
   hover:after:w-full ${
     isActive ? "text-cyan-400" : ""
   }`;

  return (
    <nav className="  navmain bg-transparent shadow-lg sticky top-0 z-50 ">
      <div className="  mainnavigation max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-4xl tracking-[0.5em] text-[#d5bb93] font-['Cinzel'] hover:scale-130 transition-all ease-in">
          Astra
        </h1>

        {/* Nav Links + controls */}
        <div className="nav-controls relative flex items-center gap-4">
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
          {open && typeof document !== "undefined" && createPortal(
            <div className="navigation open mobile-portal" onClick={() => {}}>
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