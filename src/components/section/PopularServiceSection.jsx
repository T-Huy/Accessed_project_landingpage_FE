import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPopularService } from "../../services/service";

const PopularServiceSection = () => {
  const [service, setService] = useState([]);
  const reduxCityCode = useSelector((state) => state.location.cityCode);

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

  useEffect(() => {
    const getServices = async (cityCode) => {
      try {
        const res = await getPopularService({ cityCode: cityCode });
        console.log(res);
        setService(
          res.data.map((item, index) => ({
            id: index,
            name: item.name,
            image: item.image,
          }))
        );
      } catch (error) {
        console.log(error);
        return;
      }
    };
    if (reduxCityCode) {
      getServices(reduxCityCode);
    }
  }, [reduxCityCode]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
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

  return (
    <Stack>
      <Typography variant="h3" fontWeight={"bold"}>
        Popular services in
      </Typography>
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
            //   "& .slick-slide": {
            //     width: "40% !important",
            //   },
          }}
        >
          <Slider {...settings}>
            {service.map((category, index) => {
              return (
                <div key={category.id}>
                  <Card
                    sx={{
                      height: 240,
                      width: "100%",
                      my: 1.4, // Margin between cards
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                      },
                      backgroundColor: "var(--color-blue-light)",
                      borderRadius: "16px",
                      padding: "24px",
                      position: "relative",
                    }}
                    onClick={() => {
                      // hanhle when choose service
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
                        right: "0",
                        bottom: "0",
                        width: "100%",
                        height:"60%",
                        objectFit:"contain"
                      }}
                    >
                      <img src={category.image}></img>
                    </div>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Stack>
  );
};

export default PopularServiceSection;
