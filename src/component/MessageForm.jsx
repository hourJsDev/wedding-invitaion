import React, { useState } from "react";
import data from "../data";
function TelegramForm() {
  const [message, setMessage] = useState("");
  const botToken = "7216267918:AAGgMpWiMUutfknlDAHMPzcWI035WRFd2C4";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const chatId = "1374380927";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const selectedGuest = data.find(
        (d) => d.uuid === localStorage.getItem("uuid")
      )?.name;
      const date = new Date();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `From ${selectedGuest}  \nMessage: ${message} \nSend Date: ${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`,
        }),
      });
      setMessage("");
      alert("Thank you for your wishes!");
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
          className="text-black p-[10px] text-[18px] outline-none h-[300px]"
        ></textarea>
        <button className="border border-white p-[20px]" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="flex justify-center flex-col items-center gap-[20px]">
        <h2>ABA QRCODE</h2>
        <img width={200} src="/images/qr.png" alt="qr" />
      </div>
    </div>
  );
}

export default TelegramForm;
