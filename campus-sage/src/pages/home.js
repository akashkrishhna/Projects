import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const Chatbot = () => navigate("/chat");
  const Qr = () => navigate("/scan");
  const Mapp = () => navigate("/map");
  return (
    <div>
      <header className="mt-6 fixed w-full z-50 ">
        <div className="flex z-10 rounded-md border-2 border-[#00df9a] justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white bg-[#000300]">
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            Campus Sage
          </h1>
          <div className="flex font-bold hover:from-neutral-500">
            <button className="p-8 hover:text-[#00df9a] text-xl  ">
              Setting
            </button>
          </div>
        </div>
      </header>
      <body className="pt-28">
        <article className=" z-10  grid grid-flow-row hover:scale-105 content-center h-96 m-2 max-w-[1080px] mx-auto bg-white border-b-4 bg-opacity-40 border-black rounded-md">
          <h1 className="text-4xl text-center m-2 font-bold">QR SCANNER</h1>
          <button
            onClick={Qr}
            className=" h-56 w-56 mx-auto bg-[#00df9a] hover:bg-[#1a9770] text-white font-extrabold  border-b-8 border-[#1a9770] hover:border-[#00df9a] rounded"
          >
            Scan QR code
          </button>
          <h1 className=" text-center text-base font-bold pt-4">
            click on the button to scan the qrcode of your curent location.
            <br />
            this will allow us to show where you are standing right now in the
            map
          </h1>
        </article>
        <article className="grid grid-flow-col  max-w-[1080px] mx-auto ">
          <article className=" relative h-60  mr-2 hover:scale-105 bg-opacity-40  bg-white border-r-4 border-black rounded-md">
            <h1 className="text-2xl text-center text-[#000300] font-bold">
              ASK OUR SAGE
            </h1>
            <div className="relative h-40  w-3/4 mx-auto rounded mt-3 bg-slate-300">
              <img
                src="/images/msg.jpeg"
                className="h-40 w-full rounded-md  "
                alt="lena p"
              ></img>
              <button
                onClick={Chatbot}
                className=" absolute right-0 h-8 w-20 mx-auto bg-[#00df9a] hover:bg-[#1a9770] text-white font-extrabold border-l-4 border-b-4 border-[#1a9770] hover:border-[#00df9a] rounded"
              >
                Chat
              </button>
            </div>
          </article>
          <article className=" flex-col justify-center relative h-60  hover:scale-105 bg-opacity-40 bg-white  rounded-md">
            <h1 className=" text-2xl font-bold text-center text-[#000300]">
              MAP
            </h1>
            <img
              src="/images/map.jpeg"
              onClick={Mapp}
              className="h-40 w-80 mx-auto mt-2 rounded-md  "
              alt="lena p"
            ></img>
          </article>
        </article>
      </body>
    </div>
  );
};

export default Home;
