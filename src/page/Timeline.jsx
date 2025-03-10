import React from "react";
import agenda from "../db/agenda";
const Timeline = () => {
  return (
    <div className="text-white flex flex-col gap-[20px] px-[10px]">
      <h1 className="text-center fadeIn text-[25px]  ">
        AGENDA
      </h1>
      {agenda.map((ag) => (
        <div key={ag.text}>
          <h2 className="text-[20px] fadeIn">{ag.text}</h2>
          <ul className="w-full p-[20px] m-0 flex flex-col gap-[15p]">
            {ag.agenda.map((a, index) => (
              <li
                style={{ "--delay": `.${((index + 2) * 100) / 100}s` }}
                key={a.text}
                className="flex fadeIn justify-between"
              >
                <div
                  className={`flex relative  items-center gap-[10px]`}
                >
                  <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                  <span className="text-[15px]">{a.text}</span>
                </div>
                <span className="text-[14px]">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
