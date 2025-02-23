import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Image from "../component/Image";
import { Link } from "react-router";
const GalleryDetail = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-[10px]">
        <h1 className="text-[20px]">Phnom Penh</h1>
        <Link to={"/gallery"}>
          <button className="bg-white p-[5px] text-[23px] rounded-full">
            <FaAngleLeft />
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[10px]">
        {[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3].map((_, index) => (
          <div
            style={{ "--delay": `.${(index * 100) / 100}s` }}
            className="w-full fadeIn bg-white h-[300px]"
          >
            <Image
              className="w-full object-contain h-full"
              src="/images/main-img.JPG"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDetail;
