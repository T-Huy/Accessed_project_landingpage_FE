import React from "react";
import HeroSection from "../components/section/HeroSection";
import ServiceCategories from "../components/section/ServiceCategories";
import { Box } from "@mui/material";
import PopularSection from "../components/section/PopularSection";
import HowItWorksSection from "../components/section/HowItWorkSection";
import PopularServiceSection from "../components/section/PopularServiceSection";
import PromoJoinNow from "../components/section/PromoJoinNow";
import Recommended from "../components/section/Recommended";

const HomePage = () => {
  // Sample data
  return (
    <Box className={"section"}>
      <HeroSection />
      <ServiceCategories />
      <PopularSection />
      <HowItWorksSection />
      <PopularServiceSection />
      <PromoJoinNow />
      <Recommended />
    </Box>
  );
};

export default HomePage;
