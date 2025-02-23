import React from "react";
import Image from "../component/Image";
import { Link } from "react-router";

const Gallery = () => {
  return (
    <div className="p-[20px] bg-white h-full">
      <h1 className="text-[30px] fadeIn">Gallery</h1>
      <div className="flex flex-wrap mt-[30px] justify-between">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <Link to={"2"}>
            <div
              style={{ "--delay": `.${((index + 2) * 100) / 100}s` }}
              className="w-[170px] fadeIn shadow-md rounded-md mb-[10px] overflow-hidden bg-white"
            >
              <div className="w-full  h-[160px]  ">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/main-img.JPG"
                  alt=""
                />
              </div>
              <div className="py-[10px] px-[10px]">
                <h2 className="text-[14px]">Party Picture</h2>
                <p className="text-[11px] text-[gray]">phnom penh</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
