import React, { useState, useEffect } from "react";
import RootLayout from "../layout/RootLayout";
import HomeHero from "../components//HomeHero";
import GlobalNews from "../components/common/GlobalNews";
import Journals from "../components/common/Journals";
import WhyChooseUs from "../components/WhyChooseUs";
import TailorPR from "../components/TailorPR/TailorPR";
import FAQs from "../components/common/FAQs";
import BrandsAuthority from "../components/BrandsAuthority";
import SuccessStory from "../components/SuccessStory";
import PRStrategy from "../components/PRStrategy";
import GSAP1 from "../components/GSAP1";
import OurServices from "../components/OurServices";
import { MainHero } from "../components/MainHero";
import HomeLoading from "../components/common/loading/HomeLoading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of at least 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5460);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HomeLoading />;
  }

  return (
    <RootLayout isHome>
      <MainHero />
      <div className="translate-y-[-50px]">
        <GSAP1 />
        <WhyChooseUs />
        <OurServices />
        <BrandsAuthority />
        <SuccessStory />
        <PRStrategy />
        <FAQs />
      </div>
    </RootLayout>
  );
};

export default Home;
