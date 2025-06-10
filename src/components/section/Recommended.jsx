import { Box, Stack, Typography } from "@mui/material";
import RecommendedItem from "../RecommendedItem";

const Recommended = () => {
  return (
    <Stack spacing={8} sx={{ padding: "100px 56px" }}>
      <Typography variant="h2" fontWeight={"bold"} sx={{ width: "45%" }}>
        Trust professionals to take care of yourself
      </Typography>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </Box>
    </Stack>
  );
};

export default Recommended;
