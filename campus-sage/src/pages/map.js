import React from "react";
import Navbar from "../components/Navbar";
export default function Map() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <div className="h-1/2 max-w-[1080px] mx-auto mt-10">
          <iframe
            href="https://www.mappedin.com/"
            title="Mappedin Map"
            name="Mappedin Map"
            scrolling="no"
            width="100%"
            height="650"
            frameborder="0"
            src="https://app.mappedin.com/map/65fbc2aa7c0c4fe5b4cc4683?embedded=true"
          ></iframe>
        </div>
        ;
      </body>
    </>
  );
}
