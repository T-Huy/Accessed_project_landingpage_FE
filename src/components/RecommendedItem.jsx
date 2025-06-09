import { StarOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const RecommendedItem = () => {
  return (
    <Stack
      sx={{
        width: "30%",
        maxWidth: "300px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 8px 29px 0px",
        padding: "24px",
        borderRadius: "12px",
      }}
    >
      <Box display={"flex"}>
        <StarOutlined sx={{ color: "#FBAD18" }} />
        <StarOutlined sx={{ color: "#FBAD18" }} />
        <StarOutlined sx={{ color: "#FBAD18" }} />
        <StarOutlined sx={{ color: "#FBAD18" }} />
        <StarOutlined sx={{ color: "#FBAD18" }} />
      </Box>
      <Typography variant="h6" fontWeight={"bold"}>
        Title
      </Typography>
      <Typography variant="p">
        Descriptio-adfafafaafafafa a fdfadfa fa f à à à á fas f ádf à f f ádf ád
        fa sf ádf à à à à à à ádfafferqwrqwre fadf à
      </Typography>
      <Box display={"flex"}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "100%",
          }}
        ></div>
        <Stack>
          <Typography variant="p">name</Typography>
          <Typography variant="p">24 march</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RecommendedItem;
