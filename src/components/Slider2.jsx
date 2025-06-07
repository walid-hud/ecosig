import React from "react";
import Marquee from "react-fast-marquee";

const Slider2 = () => {
    const images = [
        "./1.jpg",
        "./2.jpg",
        "./3.jpg",
        "./4.jpg",
        "./5.jpg",
        "./6.jpg",
        "./7.jpg",
        "./8.jpg",
        "./9.jpg",
        "./10.jpg",
        "./11.jpg"
    ];
    const imageStyle = {
        width:  "320px",
        height: "220px",
        objectFit: "fill",
        // borderRadius: "12px",
        // margin: "0 16px"
        
        // boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
    };

    return (
        <div
            className="md:top-auto"
        >
            <Marquee
                pauseOnHover={true}
                speed={100}
                direction="right"
                className="rounded-xl border-[2px] group border-neutral-600 overflow-clip"
            >
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        className="hover:scale-110 transition-all ease-in-out duration-400 group-hover:brightness-[60%] hover:brightness-100"
                        loading="lazy"
                        src={src}
                        alt=""
                        style={imageStyle}
                        onError={e => { e.target.style.display = "none"; }}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Slider2;
