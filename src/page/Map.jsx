import React from "react";

const Map = () => {
  return (
    <div className="h-[90%] bg-black">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.4884008730896!2d104.92760177555381!3d11.588487288613978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953fd9f9a51e9%3A0xc26eafcd2ed5ca29!2z4Z6f4Z624Z6A4Z6b4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6ZIOGek-GfkOGemuGej-Geu-Gekw!5e0!3m2!1skm!2skh!4v1740238615790!5m2!1skm!2skh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
