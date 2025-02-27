import React, { useEffect, useMemo, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Image from "../component/Image";
import { Link, useParams } from "react-router";
import gallery from "../db/gallery";
const GalleryDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const images = useMemo(() => {
    return gallery.find((g) => g.key === id);
  }, [id]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="pb-[20px]">
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
        {[...Array(images.length).keys()].map((_, index) => (
          <div key={index} className="">
            <p className="text-white text-center mb-[10px]">
              Photo No.{index + 1}
            </p>
            <Image
              className="w-full object-contain h-full"
              alt={`${images.key}/${index + 1}`}
              src={`/images/${images.key}/${index + 1}.jpg`}
            />
          </div>
        ))}
      </div>
      {!!loading && (
        <div className="w-full  h-full fixed bg-[#001207] flex justify-center items-center top-0">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
