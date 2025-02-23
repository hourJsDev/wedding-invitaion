import React from "react";
import agenda from "../db/agenda";
const Timeline = () => {
  return (
    <div className="bg-white flex flex-col gap-[40px] px-[10px]  h-full">
      <h1 className="text-center fadeIn text-[25px] font-bold mt-[40px]">
        តារាងកម្មវិធី
      </h1>
      {agenda.map((ag) => (
        <div key={ag.text}>
          <h2 className="text-[20px] fadeIn">{ag.text}</h2>
          <ul className="w-full p-[20px] m-0 flex flex-col gap-[15px] bg-white">
            {ag.agenda.map((a, index) => (
              <li
                style={{ "--delay": `.${((index + 2) * 100) / 100}s` }}
                key={a.text}
                className="flex fadeIn justify-between"
              >
                <div
                  className={`flex relative  items-center gap-[30px] ${
                    index + 1 !== ag.agenda.length &&
                    "before:w-[1px] before:bg-sky-700 before:h-[140%] before:absolute before:left-[4.5px] before:top-[13px]"
                  }`}
                >
                  <div className="w-[10px] h-[10px] rounded-full bg-sky-400"></div>
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
