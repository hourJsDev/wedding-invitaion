import React from "react";

const OurStory = () => {
  return (
    <div className="bg-[white] h-full">
      <div
        style={{
          background: "url(/images/second-img.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full  h-[50dvh]"
      >
        {/* <img className="w-full object-cover h-full" src="/images/second-img.jpg" alt="" /> */}
      </div>
      <div
        className="w-full top-0 absolute h-[50dvh] left-0"
        style={{
          background: "url(/images/torn.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "lighten",
        }}
      ></div>
      <div className="bg-white px-[20px] -translate-y-[50px]">
        <h1 className="text-[25px] font-bold">Our First Meet</h1>
        <p className="text-[#ff1399]">30th July 2021</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          mollitia, voluptatem, repellat placeat id consectetur exercitationem
          ipsum, atque sunt eius omnis repellendus officiis suscipit ut tempora
          in temporibus dolorum eaque voluptas corporis accusamus deserunt
          dicta. Soluta, ea maiores. Obcaecati dolorum quia delectus libero, et
          in sequi harum quod laborum soluta!
        </p>
      </div>
    </div>
  );
};

export default OurStory;
