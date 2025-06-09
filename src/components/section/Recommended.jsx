import { Box, Stack, Typography } from "@mui/material";
import RecommendedItem from "../RecommendedItem";

const Recommended = () => {
  return (
    <Stack>
      <Typography>Trust professionals to take care of yourself</Typography>
      <Box display={"flex"}>
        <RecommendedItem />
      </Box>
    </Stack>
  );
};

export default Recommended;
