import React from "react";
import Image from "../component/Image";
import { Link } from "react-router";
import gallery from "../db/gallery";
const Gallery = () => {
  return (
    <div id="galley" className="p-[20px] h-full text-white">
      <h1 className="text-[30px]">Gallery</h1>
      <div className="flex flex-col flex-wrap mt-[30px] gap-[30px] justify-between">
        {gallery.map((g, index) => (
          <Link to={"/gallery/" + g.key}>
            <div
              // style={{ "--delay": `.${((index + 2) * 100) / 100}s` }}
              className="w-[300px] relative mx-auto h-[300px] fadeIn shadow-md ]  bg-white"
            >
              <div className="w-full h-full  ">
                <Image
                  className="w-full h-full object-cover"
                  src={g.image}
                  alt=""
                />
              </div>
              <div className="py-[10px] left-[-30px] absolute bottom-[20px] px-[10px]">
                <h2 className="text-[34px] ">{g.name}</h2>
                <p className="text-[18px] ">{g.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
