import React, { useCallback, useEffect, useState } from 'react';
import img from "../../assets/map/image.svg";
import img1 from "../../assets/map/image1.svg";
import img2 from "../../assets/map/image2.svg";
import img3 from "../../assets/map/image3.svg";
import img4 from "../../assets/map/image4.svg";
import img5 from "../../assets/map/image5.svg";
import img6 from "../../assets/map/image6.svg";

const Hero = ({ label1, label2, label3, label4, label5, label6 }) => {
  const images = [img, img1, img2, img3, img4, img5, img6];
  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(false));

  const handleImage = useCallback((index) => {
    setVisibleImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);

  useEffect(() => {
    const timeouts = [];

    for (let i = 0; i < images.length; i++) {
      const timeout = setTimeout(() => handleImage(i), (i + 1) * 500);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [handleImage]);

  return (
    <div className="relative bg-map-bg h-[100vh] bg-cover bg-no-repeat flex justify-center items-center font-serif font-medium overflow-hidden">
      <div className="text-white text-center text-5xl sm:text-6xl md:text-7xl mt-20 animate-fade-in-up">
        {/* Images */}
        {visibleImages[0] && (
          <img
            src={img}
            alt="Bullet"
            className="absolute w-[60px] object-contain left-[40%] -top-[30%] lg:-top-[50%] xl:w-[100px] xl:-top-[80%] xl:left-[20%] animate-fade-in-visibility"
          />
        )}
        {visibleImages[1] && (
          <img
            src={img1}
            alt="Bullet"
            className="absolute w-[60px] object-contain right-[5%] top-[15%] lg:top-[-30%] xl:w-[100px] xl:-right-[40%] animate-fade-in-visibility"
          />
        )}
        {visibleImages[2] && (
          <img
            src={img2}
            alt="Bullet"
            className="absolute w-[60px] object-contain left-[1%] top-[10%] lg:left-0 lg:-top-[30%] xl:w-[100px] xl:-left-[30%] animate-fade-in-visibility"
          />
        )}
        {visibleImages[3] && (
          <img
            src={img3}
            alt="Bullet"
            className="absolute w-[60px] object-contain left-[5%] -bottom-[10%] md:bottom-[20%] lg:-bottom-[80%] xl:w-[100px] xl:-left-[40%] xl:-bottom-[80%] animate-fade-in-visibility"
          />
        )}
        {visibleImages[4] && (
          <img
            src={img4}
            alt="Bullet"
            className="absolute w-[60px] object-contain right-[15%] -bottom-[45%] lg:-bottom-[100%] xl:w-[100px] xl:-right-[30%] animate-fade-in-visibility"
          />
        )}
        {visibleImages[5] && (
          <img
            src={img5}
            alt="Bullet"
            className="absolute w-[60px] object-contain left-[30%] -bottom-[50%] xl:w-[100px] xl:-bottom-[100%] animate-fade-in-visibility"
          />
        )}
        {visibleImages[6] && (
          <img
            src={img6}
            alt="Bullet"
            className="absolute w-[60px] object-contain right-[5%] bottom-[25%] xl:w-[100px] md:bottom-[15%] lg:right-0 lg:bottom-0 xl:bottom-[20%] xl:-right-[20%] animate-fade-in-visibility"
          />
        )}

        {/* Text Labels */}
        {label1 && <p className="mb-1">{label1}</p>}
        {label4 && (
          <p className="mb-1">
            {label4.normal} <span className="italic">{label4.italic}</span>
          </p>
        )}
        {label2 && <p className="mb-8">{label2}</p>}
        {label3 && <p className="italic">{label3}</p>}
        {label5 && <p className="text-2xl sm:text-3xl w-[80%] mx-auto">{label5}</p>}
        {label6 && <p className="text-2xl sm:text-3xl w-full text-center">{label6}</p>}
      </div>
    </div>
  );
};

export default Hero;
