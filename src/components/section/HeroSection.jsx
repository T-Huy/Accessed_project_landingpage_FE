import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Header from "../Header";
import SearchBox from "../SearchBox";
import { useSelector } from "react-redux";
import { cityInfo } from "../../services/country";

const HeroSection = () => {
  const [infoSys, setInfoSys] = React.useState({});
  const reduxCityCode = useSelector((state) => state.location.cityCode);
  React.useEffect(() => {
    const getCityInfo = async () => {
      try {
        const res = await cityInfo({ cityCode: reduxCityCode });
        console.log(res);
        setInfoSys(res);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    if (reduxCityCode) getCityInfo();
  }, [reduxCityCode]);
  return (
    <Stack
      className="w-full px-4 md:px-20 py-8 bg-(--color-blue-light)"
      spacing={7}
      sx={{
        minHeight: {
          md: "640px",
          lg: "720px",
        },
      }}
    >
      <Header />
      <Stack spacing={5}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              md: "4rem",
              xl: "5rem",
            },
            letterSpacing: "2px",
            fontFamily: "DM Serif Text",
          }}
          // md={{
          //   fontSize: "4rem",
          //   letterSpacing: "2px",
          //   fontFamily: "DM Serif Text",
          // }}
          style={{ width: "45%", maxWidth: "600px" }}
        >
          Find the best beauty services in your city
        </Typography>
        <Typography>
          ~ More than{" "}
          <Box component={"span"} sx={{ color: "var(--color-green-light)" }}>
            {(infoSys?.locationCount ?? 0).toLocaleString("vi-VN")}
          </Box>{" "}
          business and{" "}
          <Box component={"span"} sx={{ color: "var(--color-green-light)" }}>
            {(infoSys?.staffCount ?? 0).toLocaleString("en-US")}
          </Box>{" "}
          individual
        </Typography>
        <SearchBox />
      </Stack>
    </Stack>
  );
};

export default HeroSection;
