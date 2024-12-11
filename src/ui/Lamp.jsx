"use client"; // Enables React Server Components for client-side rendering.
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations.
import { cn } from "./libs"; // Utility function for conditional classNames.

export function LampDemo() {
  return (
    <LampContainer>
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }} // Initial state: partially visible and offset downwards.
        whileInView={{ opacity: 1, y: 70 }} // Target state: fully visible and in its final position.
        transition={{
          delay: 0.3, // Delay before the animation starts.
          duration: 0.8, // Total animation duration.
          ease: "easeInOut", // Easing function for smooth animation.
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Comprehensive Resources for <br/> Your Immigration Journey
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "pt-[100px] relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className // Allow additional styles to be passed as props.
      )}
    >
      {/* Visual container for gradient effects and animations */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Right-side gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }} // Start with low opacity and smaller width.
          whileInView={{ opacity: 1, width: "40rem" }} // Expand width and make fully visible.
          transition={{
            delay: 0.3, // Delayed animation.
            duration: 0.8, // Smooth transition time.
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`, // Dynamic conic gradient.
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[40rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Masks to shape the gradient */}
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Left-side gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }} // Similar animation to the right gradient.
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[40rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          {/* Masks to shape the gradient */}
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Background blur for depth */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>

        {/* Transparent backdrop for visual effect */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Central glowing circle */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* Smaller glowing circle */}
        <motion.div
          initial={{ width: "8rem" }} // Start small.
          whileInView={{ width: "16rem" }} // Expand when in view.
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        {/* Thin glowing horizontal line */}
        <motion.div
          initial={{ width: "15rem" }} // Start narrow.
          whileInView={{ width: "40rem" }} // Expand when in view.
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[40rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        {/* Foreground masking layer */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      {/* Child content slot */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center  px-5">
        {children} {/* Children passed into the container */}
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> dev
