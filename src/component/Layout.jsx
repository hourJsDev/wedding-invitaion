import React, { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import ToTopButton from "./ToTopButton";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  const { id } = useParams();
  const date = new Date();
  useEffect(() => {
    if (location.pathname.includes("projects") && !id) {
      document.title = "My Project";
    } else if (location.pathname.includes("cv")) {
      document.title = "My CV";
    } else if (!id) {
      document.title = "Son Sreynich";
    }
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [location]);
  return (
    <div>
      <Outlet />
      <ToTopButton />
      {/* <Navbar /> */}
    </div>
  );
};

export default Layout;
