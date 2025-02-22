import React from "react";
import { LuMapPinned } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import { FaTimeline } from "react-icons/fa6";
import { IoQrCodeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
const Navbar = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);

  const menu = [
    {
      label: "Home",
      icon: <AiOutlineHome />,
    },
    {
      label: "Location",
      icon: <LuMapPinned />,
    },
    {
      label: "Our Story",
      icon: <FaRegHeart />,
    },
    {
      label: "Timeline",
      icon: <FaTimeline />,
    },
    {
      label: "Gallery",
      icon: <IoIosImages />,
    },
  ];
  return !["", "/", "/dashboard"].includes(pathname) ? (
    <ul className="flex justify-between bg-blue-950 text-[white] py-[13px] rounded-t-[30px] fixed w-[95%] left-[50%] -translate-x-[50%] bottom-0 rounded-b-[15px] px-[10px]">
      {menu.map((m, index) => (
        <Link to={`/${m.label.replaceAll(" ", "-").toLowerCase()}`}>
          <li
            className={`flex gap-[5px] flex-col items-center w-[70px] ${
              pathname
                .replaceAll("-", "")
                .toLowerCase()
                .includes(m.label.replaceAll(" ", "").toLowerCase()) &&
              "text-[#e61082]"
            }`}
            key={index}
          >
            <span className="text-[30px]">{m.icon}</span>
            <span className="text-[12px]">{m.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  ) : null;
};

export default Navbar;
