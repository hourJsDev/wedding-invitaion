import React, { useRef } from "react";

const Image = (props) => {
  const skeletonRef = useRef();
  const onLoad = () => {
    skeletonRef.current.remove();
  };
  return (
    <div className="relative h-full">
      <div
        ref={skeletonRef}
        className="pulsate w-full h-full absolute z-100"
      ></div>
      <img onLoad={onLoad} {...props} />
    </div>
  );
};

export default Image;
