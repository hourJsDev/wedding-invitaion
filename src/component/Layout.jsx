import { Outlet } from "react-router";
import ToTopButton from "./ToTopButton";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <ToTopButton />
      <div className="text-white p-[20px]">
        &copy; Hing and Lady. All Rights Reserved.
      </div>
    </div>
  );
};

export default Layout;
