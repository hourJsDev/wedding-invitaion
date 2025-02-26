import React, { useMemo } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Image from "../component/Image";
import { Link, useParams } from "react-router";
import gallery from "../db/gallery";
const GalleryDetail = () => {
  const { id } = useParams();
  const images = useMemo(() => {
    return gallery.find((g) => g.key === id);
  }, [id]);
  return (
    <div className=" bg-[#222] ">
      <div className="text-white flex justify-between items-center px-[10px]">
        <h1 className="text-[18px] py-[20px]">
          {images.name} / {images.location}
        </h1>
        <Link to={"/home"}>
          <button className="text-[18px] border border-white px-[25px] py-[5px]">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[10px]">
        {[...Array(images.length - 1).keys()].map((_, index) => (
          <div className="">
            <p className="text-white text-center mb-[5px]">{++index}</p>
            <Image
              className="w-full object-contain h-full"
              src={`/images/${images.key}/${++index}.jpg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDetail;
