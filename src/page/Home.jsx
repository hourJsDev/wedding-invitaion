import { useState, useEffect } from "react";
import Image from "../component/Image";
import Map from "./Map";
import Timeline from "./Timeline";
import OurStory from "./OurStory";
import Gallery from "./Gallery";
import MessageForm from "../component/MessageForm";
const Home = () => {
  return (
    <div className="flex fadeIn flex-col gap-[50px]">
      <div
        className="h-[100dvh] relative uppercase text-[white]"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(/images/pp/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-[20px]">
          <h1 className="text-center text-[white] text-[25px] ">
            THE WEDDING OF
          </h1>
          <div className="flex mt-[10px] px-[10px] justify-between">
            <div>
              <h2 className="text-[18px]">
                <span className="text-[15px]">Groom's name</span>
                <br />
                Nem Hing
              </h2>
            </div>
            <div className="text-right">
              <h2 className="text-[18px]">
                <span className="text-[15px]">Bride's name</span>
                <br />
                Huon Lady
              </h2>
            </div>
          </div>
        </div>
        <div className="pt-[20px]">
          <h1 className="text-center text-[white] text-[23px] ">OUR FAMILY</h1>
          <div className="flex px-[10px] justify-between">
            <div>
              <h2 className="text-[18px]">
                <span className="text-[15px]">Father's name</span>
                <br />
                UON HO
              </h2>
              <h2 className="text-[18px] mt-[10px]">
                <span className="text-[15px]">Mother's name</span>
                <br />
                CHAN LAI
              </h2>
            </div>
            <div className="text-right">
              <h2 className="text-[18px]">
                <span className="text-[15px]">Mother's name</span>
                <br />
                CHHUT SOKHOM
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-full absolute bottom-[200px] justify-center flex-col items-center gap-[10px]">
          <h2 className="text-[18px]">Save the date</h2>
          <h2 className="text-[20px]">15th  | 16th March 2025</h2>
          <Countdown />
        </div>
        <img
          onClick={() => window.scrollTo({ top: 9999999, behavior: "smooth" })}
          className="absolute  left-[50%] translate-x-[-50%] bottom-[10px]"
          src="/images/arrow.gif.gif"
          width={60}
          alt=""
        />
      </div>
      <Timeline />
      <OurStory />
      <Gallery />
      <MessageForm />
      <Map />
    </div>
  );
};
const Countdown = ({ targetDate = "2025-03-15" }) => {
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
    <ul className="flex mt-[20px]">
      {Object.keys(timeLeft).map((k, index) => (
        <li
          className={`flex flex-col w-[90px] items-center ${
            index < 3 &&
            "relative before:absolute before:w-[1px] before:bg-white before:h-[80%] before:top-0 before:right-0"
          }`}
          key={index}
        >
          <span>{timeLeft[k]}</span>
          <span className="text-[10px]">{k}s</span>
        </li>
      ))}
    </ul>
  );
};

export default Home;
