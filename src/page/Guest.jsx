import React, { useEffect, useState } from "react";
import data from "../data";
import Image from "../component/Image";
import { Link, useSearchParams } from "react-router";
const Guest = () => {
  const [searchParams] = useSearchParams();
  const uuid = searchParams.get("uuid");
  const [guest, setGuest] = useState("");
  useEffect(() => {
    let id = uuid;
    if (uuid) {
      localStorage.setItem("uuid", uuid);
    } else {
      id = localStorage.getItem("uuid");
    }
    const selectedGuest = data.find((d) => d.uuid === id)?.name;
    setGuest(selectedGuest);
  }, []);
  return (
    <div
      style={{
        background: "url(/images/sr/1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex relative fadeIn  h-[100dvh] bg-[#fff0e3] flex-col gap-[40px] items-center"
    >
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7533206831119544)  50%, rgba(0,0,0,0.10246679316888041) 100%)",
        }}
        className="w-full h-full absolute top-0 left-0"
      ></div>

      <div className=" px-[20px] text-[white] absolute top-[50%]">
        <div className="relative">
          <h2 className="text-[28px]">
            Welcom <br /> {guest}!{" "}
            <img
              className="absolute top-[-30px] left-[80px]"
              src="/images/love-animation.gif"
              alt="sfsdf"
            />
          </h2>
          <p className=" mt-[10px]">
            We are excited to share with you the most special day of our lives.
            With love and happiness, we would like to invite you to join our
            wedding which will be held on 15th to 16th March 2025. Your presence
            will make our day even more special and memorable.
          </p>

          <div className="flex flex-col items-end">
            <img width={50} className="mr-[20px]" src="/images/arrow.gif.gif" />
            <Link to={"/home"}>
              <button className="border text-[16px] border-white py-[5px] px-[30px]">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
