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
    console.log(selectedGuest);
    setGuest(selectedGuest);
  }, []);
  return (
    <div
      style={{
        background: "url(/images/pp-p1/pp-p1-18.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex relative  h-full bg-[#fff0e3] flex-col gap-[40px] items-center"
    >
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7533206831119544)  7%, rgba(0,0,0,0.10246679316888041) 100%)",
        }}
        className="w-full h-full absolute top-0 left-0"
      ></div>
      {/* <div className="w-full h-[30%]">
        <Image
          className="w-full h-full object-cover"
          src="/images/pp-p1/pp-p1-1.jpg"
        />
      </div> */}
      <div className=" px-[20px] text-[white] absolute top-[50%]">
        {/* <h2 className="text-[25px]">Welcome to Our Wedding!</h2> */}
        <h2 className="text-[28px]">
          Welcome, <br /> {guest}!{" "}
        </h2>
        <p className=" mt-[10px]">
          We are so happy to have you be a part of our special day! Your
          presence means the world to us, and we can’t wait to celebrate this
          beautiful moment together. Join us as we begin this new chapter,
          surrounded by love, laughter, and the people we cherish most. See you
          soon! With love.
        </p>
        <div className="flex justify-end mt-[30px]">
          <Link to={"/home"}>
            <button className="border text-[16px] border-white py-[5px] px-[30px]">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guest;
