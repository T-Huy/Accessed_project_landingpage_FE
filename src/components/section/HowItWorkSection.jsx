import { Box, Stack, Typography } from "@mui/material";
import StepItem from "../StepItem";

const INFO_STEP = [
  {
    step: 1,
    title: "Find",
    description: "Choose a staff or business nearby for reviews and rating",
    image: "",
  },
  {
    step: 2,
    title: "Booking",
    description: "At a convenient time and in just a few clicks",
    image: "",
  },
  {
    step: 3,
    title: "Enjoy",
    description: "Get the best services from professionals",
    image: "",
  },
];

const HowItWorksSection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      style={{ width: "100%", padding: "100px 56px" }}
    >
      <Typography
        variant="h6"
        sx={{ color: "var(--color-green)", fontWeight: "bold" }}
      >
        How it work?
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", width: "45%", textAlign: "center" }}
      >
        A simple way to beauty and health
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        sx={{ paddingTop: "100px", width: "100%" }}
      >
        {INFO_STEP.map((step, index) => (
          <StepItem
            key={index}
            item={step}
            style={{ paddingTop: `${index * 50}px` }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
