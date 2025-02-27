import React, { useEffect, useMemo, useState } from "react";
import { FaAngleLeft, FaHeart } from "react-icons/fa";
import Image from "../component/Image";
import { Link, useParams } from "react-router";
import gallery from "../db/gallery";
import data from "../data";
import { FaRegHeart } from "react-icons/fa6";
import { PiDownloadSimple } from "react-icons/pi";
const GalleryDetail = () => {
  const { id } = useParams();
  const [lovedImage, setLovedImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(0);
  const images = useMemo(() => {
    return gallery.find((g) => g.key === id);
  }, [id]);
  const selectedGuest = useMemo(
    () => data.find((d) => d.uuid === localStorage.getItem("uuid"))?.name,
    []
  );
  useEffect(() => {
    if (localStorage.getItem("loved_image")) {
      setLovedImage(localStorage.getItem("loved_image").split(",") || []);
    }
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const downloadImage = (imageUrl, name, no) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = name + ".jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    sendMessageToTelegram(
      `${selectedGuest} have downloaded your photo. \n\n${images.location} photo #${no} `,
      1
    );
  };
  const handleLike = async (key, no) => {
    setLovedImage((p) => [...p, key]);
    localStorage.setItem(
      "loved_image",
      [...lovedImage, key].join(",").toString()
    );
    sendMessageToTelegram(
      `${selectedGuest} have liked your photo. \n\n${images.location} photo #${no} `,
      2
    );
  };
  const sendMessageToTelegram = async (message, type) => {
    if (loadingMessage) return;
    setLoadingMessage(type);
    const receivers = [
      {
        name: "Nem Hing",
        id: "416003323",
      },
      {
        name: "Huon Lady",
        id: "530458108",
      },
      {
        name: "Pich Lyhour",
        id: "1374380927",
      },
    ];

    const token = "8001885225:AAHwELnaNPPIiZL6vhwiRLs_EbnUxb7Kznw";
    for (const r of receivers) {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: r.id,
          text: message,
        }),
      });
    }
    setTimeout(() => {
      setLoadingMessage(0);
    }, 2000);
  };
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
      <div className="flex flex-col gap-[50px]">
        {[...Array(images.length).keys()].map((_, index) => (
          <div key={index} className="">
            <Image
              className="w-full object-contain h-full"
              alt={`${images.key}/${index + 1}`}
              src={`/images/${images.key}/${index + 1}.jpg`}
            />
            <div className="text-white flex justify-between mt-[10px] items-center mx-[10px] text-[20px]">
              <p className="text-white text-center text-[15px] ">
                No.{index + 1}
              </p>
              <div className="flex gap-[10px] ">
                <span
                  onClick={() =>
                    !lovedImage.includes(`${images.key}/${index + 1}`) &&
                    handleLike(`${images.key}/${index + 1}`, index + 1)
                  }
                >
                  {lovedImage.includes(`${images.key}/${index + 1}`) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
                <span
                  onClick={() =>
                    downloadImage(
                      `/images/${images.key}/${index + 1}.jpg`,
                      `Hing-lady-wedding-${images.location}-photo No.${
                        index + 1
                      },`,
                      index + 1
                    )
                  }
                >
                  <PiDownloadSimple />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!!loading && (
        <div className="w-full  h-full fixed bg-[#001207] flex justify-center items-center top-0">
          <span className="loader"></span>
        </div>
      )}
      {!!loadingMessage && (
        <div className="w-full  h-full fixed bg-[#0a0a0abc] flex justify-center items-center top-0">
          {loadingMessage === 1 ? (
            <img src="/images/download.gif" alt="" />
          ) : (
            <img src="/images/love.gif" alt="" />
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryDetail;
