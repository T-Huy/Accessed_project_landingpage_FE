import { Box, Stack, Typography } from "@mui/material";

const StepItem = ({ item, style }) => {
  const { step, title, description, image } = item;
  return (
    <div style={{ width: "240px", ...style }}>
      <Box
        sx={{
          width: "100%",
          height: "240px",
          padding: "24px",
          borderRadius: "20px",
          position: "relative",
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          "&::before": {
            position: "absolute",
            content: `"${step}"`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60px",
            height: "60px",
            backgroundColor: "var(--color-green)",
            borderRadius: "80px",
            fontSize: "1.6rem",
            color: "white",
            bottom: "0",
            left: "0",
            transform: "translate(-50%, 50%)",
          },
        }}
      >
        <div
          className="w-full h-full bg-white"
          style={{ borderRadius: "12px" }}
        >
          <img
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            src={image}
          />
        </div>
      </Box>
      <Stack sx={{ paddingTop: "40px" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography variant="subTitle" fontWeight={"bold"}>
          {description}
        </Typography>
      </Stack>
    </div>
  );
};

export default StepItem;
