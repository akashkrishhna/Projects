import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Chat = () => {
  const navigate = useNavigate();
  const Backhome = () => navigate("/");

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <h1 className="text-7xl text-center text-white">Chat here</h1>
        <button
          onClick={Backhome}
          className=" flex  h-8 w-40 justify-center mx-auto bg-[#00df9a] hover:bg-[#1a9770] text-white font-extrabold border-l-4 border-b-4 border-[#1a9770] hover:border-[#00df9a] rounded"
        >
          Back home
        </button>
      </body>
    </div>
  );
};
export default Chat;
