import React, { useEffect, useState } from "react";
import data from "../data";
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
    <div className="flex justify-center flex-col gap-[40px] items-center h-[100dvh]">
      <h2 className="text-[25px]">Welcome</h2>
      <h1 className="text-[25px] font-bold">{guest}</h1>
      <Link to={"/home"}>
        <button className="border text-[25px] border-[black] rounded-md py-[5px] px-[30px]">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Guest;
