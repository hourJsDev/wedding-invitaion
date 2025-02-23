import React from "react";

const Map = () => {
  return (
    <div style={{ "--delay": ".5s" }} className="h-[90%] fadeIn bg-black">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.926701519675!2d103.30096147455923!3d13.783292096564692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311a8ef85e9b7495%3A0x11d4a4f3aa3ca4d9!2zTmltb2wgcmVzdHVhcmFudCDhnpfhn4ThnofhnpPhnrjhnpnhnorhn5LhnovhnrbhnpPigIvhnpPhnrjhnpjhn4nhnpvhn4s!5e0!3m2!1skm!2skh!4v1740300397265!5m2!1skm!2skh"
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
