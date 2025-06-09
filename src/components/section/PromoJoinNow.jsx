import { Box, Button, Stack, Typography } from "@mui/material";

const PromoJoinNow = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-evenly"}
      padding={"100px 56px"}
    >
      <div
        style={{
          width: "36%",
          height: "640px",
          backgroundColor: "red",
          borderRadius: "120px 16px 16px",
        }}
      ></div>
      <Stack sx={{ width: "40%" }} justifyContent={"center"} spacing={2}>
        <Typography variant="h6" fontWeight={"bold"} color="var(--color-green)">
          For individuals and business
        </Typography>
        <Typography variant="h2">
          Own a personal business or a side-hustle?
        </Typography>
        <Typography variant="p" color="#858585">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pharetra ex odio. Aliquam erat volutpat. Morbi tincidunt lacus et est
          porttitor, eu eleifend est viverra. Donec et nibh leo. In euismod odio
          luctus faucibus rutrum. Donec pretium aliquam sem sit amet cursus. Ut
          in urna sed nulla cursus pharetra sed nec justo
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--color-primary)",
            width: "fit-content",
            p: "16px 24px",
            borderRadius: "12px",
          }}
          style={{ fontSize: "0.7rem" }}
        >
          Join now
        </Button>
      </Stack>
    </Box>
  );
};

export default PromoJoinNow;
