import { useEffect, useState } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
const ToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return isVisible ? (
    <div
      onClick={handleClick}
      className="fixed cursor-pointer right-[5px] bottom-[100px] text-[30px]"
    >
      <img className="rotate-180" width={80} src="/images/arrow.gif.gif" alt="" />
    </div>
  ) : null;
};

export default ToTopButton;
