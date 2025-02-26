import { useRef, useState } from "react";

const ImageTrack = ({length = 0}) => {
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const nextPercentageUnconstrained =
      prevPercentage + (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    setPercentage(nextPercentage);

    const track = trackRef.current;
    if (track) {
      // Animate the track container
      track.animate(
        { transform: `translate(${prevPercentage}%, -50%)` },

        {
          duration: 1200,
          fill: "forwards",
        }
      );

      // Animate each image
      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${100 + prevPercentage}% center` },

          {
            duration: 1200,
            fill: "forwards",
          }
        );
      }
    }
  };

  return (
    <div
      ref={trackRef}
      id="image-track"
      className="image-track"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length }).map((_, index) => (
        <img
          key={index}
          className="image"
          src={`/images/pp-p2/pp-p2-${index + 1}.jpg`}
          alt={`Image ${index + 1}`}
          draggable="false"
        />
      ))}
    </div>
  );
};


export default ImageTrack;
