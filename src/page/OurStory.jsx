import React from "react";

const OurStory = () => {
  return (
    <div className="text-white overflow-x-hidden mt-[-4px] relative">
      <div
        style={{
          background: "url(/images/second-img.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full fadeIn  h-[50dvh]"
      >
        
        <img className="w-full object-cover h-full" src="/images/second-img.jpg" alt="" />
      </div>
      <div className="w-full  top-0 absolute h-[50dvh] left-0"></div>
      <div className=" px-[20px] flex flex-col gap-[10px] ">
        <h1 className="text-[25px]  font-bold">Our love story</h1>
        <p className="">
          Hing and Lady have known each other for many years as they grown up in
          the hometown, so on, they started to get close together as friends
          during their high school life at the city but then they were far away
          from one another as Lady had to study at university in Phnom Penh.
        </p>
        <p>
          Long story short, Hing and Lady reunited again when Hing also came to
          Phnom Penh to study his engineering degree. From that time, their
          hearts were across the friendship line and it’s been becoming the REAL
          LOVE for them both in 25th November 2019. After four years together,
          they finished their love as boy/girlfriend degree to welcome another
          step as “Fiancées” as the Engagement was held officially in front of
          the both families on 25th November 2025.{" "}
        </p>
        <p>
          Not yet finished, as the words in the bible said “Love has never
          failed”, Hing and Lady are deciding to commit together that they will
          live these lives to love each other until the end of the earth as
          husband and wife which their wedding will be held on 15th – 16th March
          2025.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
