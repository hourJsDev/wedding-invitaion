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
      className="fixed cursor-pointer right-[30px] bottom-[60px] text-[30px]"
    >
      <TfiArrowCircleUp />
    </div>
  ) : null;
};

export default ToTopButton;
