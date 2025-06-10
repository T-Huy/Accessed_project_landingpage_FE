import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Card, Typography, Box, IconButton, Stack } from "@mui/material";
import PopuparItem from "./PopularItem";
import { IMNAGE_LOCATION_DEFAULT } from "../constants";

const SLIDES_TO_SHOW = 4;

const PopularRender = ({ items, type, title }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const imageDefault = type === "location" ? IMNAGE_LOCATION_DEFAULT : "";
  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: -16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        display: currentSlide === 0 ? "none" : "",
      }}
    >
      <ArrowBackIosNewOutlined />
    </IconButton>
  );

  const CustomNextArrow = ({ onClick: handle }) => (
    <IconButton
      onClick={handle}
      sx={{
        position: "absolute",
        right: -16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        display: currentSlide >= items.length - SLIDES_TO_SHOW ? "none" : "",
      }}
    >
      <ArrowForwardIosOutlined />
    </IconButton>
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Stack
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 7 },
      }}
      spacing={4}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", paddingLeft: "16px" }}>
        {title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          "& .slick-slide": {
            px: 2, // Add padding between slides
          },
          "& .slick-track": {
            display: "flex",
            alignItems: "center",
          },
          "& .slick-list": {
            overflow: "hidden",
          },
        }}
      >
        <Slider {...settings}>
          {items.map((category, index) => {
            return (
              <div key={category.id}>
                <PopuparItem
                  {...category}
                  type={type}
                  imageDefault={imageDefault}
                ></PopuparItem>
              </div>
            );
          })}
        </Slider>
      </Box>
    </Stack>
  );
};

export default PopularRender;
