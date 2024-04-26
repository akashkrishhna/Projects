import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const Chatbot = () => navigate("/chat");
  const Mapp = () => navigate("/map");
  const Backhome = () => navigate("/");

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mt-6 flex z-10 justify-between items-center h-20 max-w-[1240px] mx-auto px-4 rounded-md border-2 border-[#00df9a] text-white bg-[#000300]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Campus Sage</h1>
      <div className="hidden md:flex font-bold hover:from-neutral-500">
        <button
          onClick={Backhome}
          className="p-8 hover:text-[#00df9a] text-xl ease-out "
        >
          Home
        </button>
        <button onClick={Mapp} className="p-8 hover:text-[#00df9a] text-xl  ">
          Map
        </button>
        <button
          onClick={Chatbot}
          className="p-8 hover:text-[#00df9a] text-xl  "
        >
          Chat
        </button>
        <button className="p-8 hover:text-[#00df9a] text-xl  ">Setting</button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-0 top-0 w-[30%]  h-auto border-r border-r-gray-900  bg-[#000300] mt-20 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-4 uppercase text-center">
          <li
            onClick={Backhome}
            className="p-4  border-b border-gray-600 hover:text-[#00df9a] "
          >
            Home
          </li>
          <li
            onClick={Mapp}
            className="p-4  border-b border-gray-600 hover:text-[#00df9a] "
          >
            Map
          </li>
          <li
            onClick={Chatbot}
            className="p-4  border-b border-gray-600 hover:text-[#00df9a] "
          >
            Chat
          </li>
          <li className="p-4  border-b border-gray-600 hover:text-[#00df9a] ">
            Setting
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
