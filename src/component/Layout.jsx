import { Outlet, useLocation } from "react-router";
import ToTopButton from "./ToTopButton";
import { useEffect } from "react";
const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [location]);
  return (
    <div>
      <Outlet />
      <ToTopButton />
      {location.pathname !== "/" && (
        <div className="text-white p-[20px]">
          &copy; Hing and Lady. All Rights Reserved.
        </div>
      )}
    </div>
  );
};

export default Layout;
