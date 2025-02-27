import React from "react";
import Image from "../component/Image";
import { Link } from "react-router";
import gallery from "../db/gallery";
const Gallery = () => {
  return (
    <div className="px-[20px]  h-full text-white">
      <h1 className="text-[30px] text-center">Gallery</h1>
      <div className="flex flex-col flex-wrap mt-[30px] gap-[30px] justify-between">
        {gallery.map((g, index) => (
          <Link key={index} to={"/gallery/" + g.key}>
            <div className="w-[300px] relative mx-auto h-[300px] fadeIn shadow-md ]  bg-white">
              <div className="w-full h-full  ">
                <Image
                  style={{ objectPosition: "0 0" }}
                  className="w-full  h-full object-cover"
                  src={g.image}
                  alt=""
                />
              </div>
              <div className="py-[10px] left-[-30px] absolute bottom-[20px] px-[10px]">
                <h2 className="text-[34px] ">{g.name}</h2>
                <p className="text-[18px] ">{g.location}</p>
              </div>
              <img width={100} src="/images/click-guide.gif" className="absolute pointer-events-none top-[-30px] right-[-30px]" alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
