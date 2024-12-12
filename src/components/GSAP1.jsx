import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const GSAP1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useGSAP(() => {
    const animation = gsap.from(containerRef.current, {
      width: "60%",
      fontSize: 0,
      borderRadius: "60px",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        ease: "power3.inOut",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-screen flex justify-center">
      <div
        ref={containerRef}
        className="h-screen bg-map-bg rounded-none w-full bg-no-repeat overflow-hidden bg-cover text-white font-bold flex justify-center items-center"
      >
        <div className="w-fit h-[50%] text-center flex flex-col items-center justify-center gap-12">
          <p className="text-[52px] leading-[71.29px]">
            We are dolor sit amet, cons <br /> ectetur adipiscing elit. Maecenas{" "}
            <br /> sed dolor sapien.
          </p>
          <p className="text-[24px] w-[80ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vel arcu volutpat odio pellentesque egestas. Vivamus dictum, sem
            rutrum sodales egestas, eros metus porta tellus, sed ullamcorper leo
            nisi a mauris. Vestibulum aliquam rhoncus eleifend. Donec tincidunt
            lorem eget purus posuere, ut tincidunt dolor bibendum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSAP1;
