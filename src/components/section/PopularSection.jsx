import { Stack, Typography } from "@mui/material";
import PopularRender from "../PopularRender";

const PopularSection = () => {
  const popularBusiness = [
    { id: 1, name: "Plumbing" },
    { id: 2, name: "Electrical" },
    { id: 3, name: "Cleaning" },
    { id: 4, name: "Gardening" },
    { id: 5, name: "Painting" },
    { id: 6, name: "Carpentry" },
    { id: 7, name: "Moving" },
    { id: 8, name: "Repair" },
    { id: 9, name: "Installation" },
    { id: 10, name: "Maintenance" },
  ];
  return (
    <Stack spacing={8} sx={{ py: 10 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", px: "68px", marginTop: "100px" }}
      >
        City_Name recommends
      </Typography>
      <PopularRender
        items={popularBusiness}
        type={"location"}
        title="Popular Location"
      ></PopularRender>
      <PopularRender
        items={popularBusiness}
        type={"location"}
        title="Popular individuals"
      ></PopularRender>
    </Stack>
  );
};

export default PopularSection;
