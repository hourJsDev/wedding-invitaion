import { useState, useEffect } from "react";
import Image from "../component/Image";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="fadeIn">
        <h1 className="text-[40px] mt-[20px]  text-[#08113f] font-bold">
          Hing & Lady
        </h1>
        <p className="text-center text-[#08113f] text-[20px]">
          are getting married in
        </p>
      </div>
      <div
        style={{ "--delay": ".3s" }}
        className="w-[350px] fadeIn h-[350px] rounded-full overflow-hidden border-4 border-[gold]"
      >
        <Image
          className="w-full h-full object-cover"
          src={"/images/main-img.JPG"}
          alt=""
        />
      </div>
      <div
        style={{ "--delay": ".5s" }}
        className="flex fadeIn flex-col items-center gap-[40px]"
      >
        <Countdown />
        <p className="text-[18px] text-[#ff2989] font-bold">
          on 30th July 2025 at 12:30
        </p>
      </div>
    </div>
  );
};

const Countdown = ({ targetDate = "2025-03-01" }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { day: 0, hour: 0, minute: 0, second: 0 };
    }
    return {
      day: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minute: Math.floor((difference / (1000 * 60)) % 60),
      second: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <ul className="flex">
      {Object.keys(timeLeft).map((k, index) => (
        <li
          className={`flex flex-col w-[80px] items-center ${
            index < 3 &&
            "relative before:absolute before:w-[1px] before:bg-black before:h-[80%] before:top-0 before:right-0"
          }`}
        >
          <span>{timeLeft[k]}</span>
          <span>{k}s</span>
        </li>
      ))}
    </ul>
  );
};

export default Home;
