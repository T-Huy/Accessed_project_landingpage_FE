import { StarOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const RecommendedItem = () => {
  return (
    <Stack
      sx={{
        width: "40%",
        maxWidth: "420px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 8px 29px 0px",
        padding: "24px",
        borderRadius: "12px",
      }}
      spacing={2}
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
      <Typography variant="p" color="#3339">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque
        mi, imperdiet quis nisi eu, mattis volutpat dui. In hac habitasse platea
        dictumst. Morbi mattis lacinia orci ut consequat.
      </Typography>
      <Box display={"flex"} alignItems={"center"}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "100%",
            marginRight: "16px",
          }}
        />
        <Stack>
          <Typography variant="p" fontWeight={"bold"}>
            name
          </Typography>
          <Typography variant="p" sx={{ color: "#3338" }}>
            24 march
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RecommendedItem;
