import React, { useState } from "react";
import data from "../data";
function TelegramForm() {
  const [message, setMessage] = useState("");
  const [isThank, setIsThank] = useState(false);
  const botToken = "7216267918:AAGgMpWiMUutfknlDAHMPzcWI035WRFd2C4";
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message) return;

    try {
      setIsThank(true);
      const selectedGuest = data.find(
        (d) => d.uuid === localStorage.getItem("uuid")
      )?.name;
      const receivers = [
        {
          name: "Nem Hing",
          id: "416003323",
        },
        {
          name: "Huon Lady",
          id: "530458108",
        },
        {
          name: "Pich Lyhour",
          id: "1374380927",
        },
      ];
      for (const r of receivers) {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: r.id,
            text: `Dear ${r.name},  \n\nYou've got a wish from ${selectedGuest}:  \n\n\n ${message}\n\n`,
          }),
        });
      }
      setTimeout(() => {
        setMessage("");
        setIsThank(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-white flex gap-[20px] flex-col">
      <h1 className="text-[25px] text-center">Your Wishes</h1>
      <form
        className="flex px-[10px] flex-col gap-[20px]"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="your wishes here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#5c5c5c] text-white border border-white p-[10px] text-[18px] outline-none h-[300px]"
        ></textarea>
        <button className="border border-white p-[20px]" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="flex justify-center flex-col items-center gap-[20px]">
        <h2>ABA QRCODE</h2>
        <img width={200} src="/images/qr.png" alt="qr" />
      </div>
      {!!isThank && (
        <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-[#000000d6] ">
          <img src="/images/thank.gif" width={"70%"} alt="" />
        </div>
      )}
    </div>
  );
}

export default TelegramForm;
