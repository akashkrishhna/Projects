import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const Mapp = () => navigate("/map");
  return (
    <div>
      <header className="mt-6 fixed w-full z-50 ">
        <div className="flex z-10 rounded-md border-2 border-[#00df9a] justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white bg-[#000300]">
          <h1 className="w-full text-5xl font-bold text-center text-[#00df9a]">
            Campus Sage
          </h1>
        </div>
      </header>
      <body className="pt-28">
        <article className="grid grid-flow-row  max-w-[1080px] mx-auto mt-20 ">
          <article className=" flex-col justify-center relative h-auto  hover:scale-105 bg-opacity-20 bg-black mb-8  rounded-md">
            <h1 className="text-xl font-bold text-center text-white">
              Welcome to our College Inquiry Chatbot with Indoor Navigation
              System page! Here, we introduce an innovative solution designed to
              revolutionize your experience on campus. Our chatbot is your
              virtual assistant, ready to provide instant answers to all your
              college-related queries, from finding classrooms to accessing
              staff contacts and event details. <br /> <br />
              We've taken it a step further by integrating an indoor navigation
              system. Say goodbye to wandering around aimlessly trying to locate
              buildings or rooms. <br /> click on the chat icon ur chatbot and
              navigation system can simplify your college journey, making it
              more efficient and enjoyable. Say hello to hassle-free navigation
              and instant information access!
            </h1>
          </article>
          <article className=" flex-col justify-center relative h-60  hover:scale-105 bg-opacity-20 bg-white  rounded-md">
            <h1 className=" text-2xl font-bold text-center text-[#000300]">
              MAP
            </h1>
            <img
              src="/images/map.jpeg"
              onClick={Mapp}
              className="h-40 w-80 mx-auto mt-2 rounded-md  "
              alt="error"
            ></img>
          </article>
        </article>
      </body>
    </div>
  );
};

export default Home;
