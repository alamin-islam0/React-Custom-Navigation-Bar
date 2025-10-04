import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const ResponsiveNav = () => {

    const [open, setOpen] = useState(false)

    const links = navLinks.map((route) => (
          <li className="mr-10 max-md:pt-4">
            <a className="text-white" href={route.path}>
              {route.name}
            </a>
          </li>
        ))

  return (
    <nav className="flex justify-between px-16 py-6 bg-green-600 items-center max-md:px-2.5 max-md:py-4">
      <span onClick={()=> setOpen(!open)} className="flex gap-2 items-center flex-row-reverse justify-between">
        {
            open ? 
            <X className="size-12 md:hidden"></X> 
            : <Menu color="white" className="md:hidden size-12 "></Menu>
        }

        <ul className={`md:hidden absolute bg-green-500 duration-500 ${open ? 'top-24' : 'top-[-700px]'} w-[100%] px-10 py-8`}>
            {links}
        </ul>
        
        <h3 className="text-2xl font-semibold text-white max-md:w-[50%]">
          React-Custom-Navigation-Bar
        </h3>
      </span>

      <ul className="md:flex hidden">
        {
            links
        }
      </ul>
      <button 
        className=" max-md:hidden text-green-600 text-[18px] font-semibold bg-white px-8 py-3 rounded-md"
        type="button"
      >
        Contact
      </button>
    </nav>
  );
};

export default ResponsiveNav;
