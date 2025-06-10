import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Card, Typography, Box, IconButton } from "@mui/material";
import { serviceCategory } from "../../services/serviceCategory";
import React from "react";
import { useSelector } from "react-redux";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: -25,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      backgroundColor: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    <ArrowBackIosNewOutlined />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: -25,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      backgroundColor: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    <ArrowForwardIosOutlined />
  </IconButton>
);

const colorPool = [
  "#C1E8FF",
  "#D7FFD4",
  "#F0D2F2",
  "#FFDBD5",
  "#D2D5F8",
  "#EAE7DC",
  "#FDEDD7",
];

const ServiceCategories = () => {
  const [categories, setCategories] = React.useState([]);
  const reduxCityCode = useSelector((state) => state.location.cityCode);
  React.useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await serviceCategory();
        console.log(res);
        setCategories(
          res.data.serviceCategories.map((item) => ({
            id: item._id,
            name: item.name,
            image: item.image,
          }))
        );
      } catch (error) {
        console.log(error);
        return;
      }
    };
    if (reduxCityCode) getCategories();
  }, [reduxCityCode]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1400,
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

  function getColorForServiceByIndex(index) {
    return colorPool[index % colorPool.length];
  }

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 7 },
        py: 10,
      }}
    >
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
          {categories.map((category, index) => {
            const bgColor = getColorForServiceByIndex(index);
            return (
              <div key={category.id}>
                <Card
                  sx={{
                    height: 140,
                    width: "100%",
                    my: 1.4, // Margin between cards
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    },
                    backgroundColor: bgColor,
                    borderRadius: "16px",
                    padding: "24px",
                    position: "relative",
                  }}
                  onClick={() => {
                    // console.log("hhahahaha"); // hanhle when choose service
                  }}
                >
                  <Typography
                    variant="body"
                    sx={{
                      fontWeight: 500,
                      color: "#555",
                      fontSize: { xs: "0.75rem", sm: "1rem" },
                    }}
                  >
                    {category.name}
                  </Typography>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      width: "30%",
                      height: "100%",
                      objectFit: "revert",
                    }}
                  >
                    <img src={category.image} />
                  </div>
                </Card>
              </div>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default ServiceCategories;
