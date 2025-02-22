import React, { useState } from "react";
import data from "../data";
import { MdContentCopy } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
const Dashboard = () => {
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const handleSelect = (uuid) => {
    setSelected(uuid);
    setTimeout(() => {
      setSelected("");
    }, 1000);
    navigator.clipboard.writeText(window.location.origin + "/?uuid=" + uuid);
  };
  return (
    <div className="h-full bg-[white] overflow-auto">
      <div className="w-[95%] bg-white sticky top-[0px] mx-auto py-[10px]">
        <input
          value={search}
          placeholder="Enter guest name"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full valid:border-black focus:border-black rounded-md px-[10px] border h-[50px] outline-none"
          type="text"
          required
        />
      </div>
      <ul className="flex w-[95%] mx-auto flex-col gap-[10px]">
        {(search
          ? data.filter((d) =>
              d.name.toLowerCase().includes(search.toLowerCase())
            )
          : data
        ).map((d, index) => (
          <li
            key={d.name}
            className="flex shadow-sm py-[10px] px-[10px] justify-between"
          >
            <span>{d.name}</span>
            <span onClick={() => handleSelect(d.uuid)} className=" text-[18px]">
              {selected === d.uuid ? <FaRegCheckCircle /> : <MdContentCopy />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
