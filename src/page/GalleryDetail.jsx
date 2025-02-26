import React, { useMemo } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Image from "../component/Image";
import { Link, useParams } from "react-router";
import gallery from "../db/gallery";
import ImageTrack from "../component/ImageTrack";
const GalleryDetail = () => {
  const { id } = useParams();
  const images = useMemo(() => {
    return gallery.find((g) => g.key === id);
  }, [id]);
  console.log(images);
  return (
    <div className="h-[100dvh] overflow-y-hidden">
      {/* <div className="flex justify-between items-center p-[10px]">
        <h1 className="text-[20px]">Phnom Penh</h1>
        <Link to={"/home#gallery"}>
          <button className="bg-white p-[5px] text-[23px] rounded-full">
            <FaAngleLeft />
          </button>
        </Link>
      </div> */}
      {/* <div className="flex flex-col gap-[10px]">
        {[...Array(images.length).keys()].map((_, index) => (
          <div
            style={{ "--delay": `.${(index * 100) / 100}s` }}
            className="w-full fadeIn bg-white h-[300px]"
          >
            <Image
              className="w-full object-contain h-full"
              src={`/images/${images.key}/${images.key}-${++index}.jpg`}
            />
          </div>
        ))}
      </div> */}
      <ImageTrack length={images.length} />
    </div>
  );
};

export default GalleryDetail;
