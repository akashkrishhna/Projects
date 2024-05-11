import React from "react";
import Navbar from "../components/Navbar";
const Setting = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <div className=" container m-auto mt-20 max-w-[720px]">
          <article className="border-b-4 h-20 bg-white bg-opacity-40  font-bold text-center text-3xl uppercase hover:scale-110 border-black pt-5 ">
            profile
          </article>
          <article className="border-b-4 h-20 bg-white bg-opacity-40 font-bold text-center text-3xl uppercase hover:scale-110 border-black pt-5">
            Login/Sign up
          </article>
          <article className="border-b-4 h-20 bg-white bg-opacity-40 font-bold text-center text-3xl uppercase hover:scale-110 border-black pt-5">
            Log Out
          </article>
        </div>
      </body>
    </div>
  );
};
export default Setting;
