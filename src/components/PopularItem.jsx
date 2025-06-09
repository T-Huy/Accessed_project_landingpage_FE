import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  StarOutlined,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const PopuparItem = (
  {
    rate = 4.8,
    isFavorite = true,
    name = "",
    address = "",
    image = "",
    imageDefault = "",
  },
  ...props
) => {
  //   console.log(imageDefault);

  const headerItem = (
    <Box
      className={"p-0"}
      display={"flex"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          alignItems: "center",
          padding: "3px 12px",
        }}
        spacing={1}
      >
        <StarOutlined sx={{ color: "#FBAD18" }}></StarOutlined>
        <div>{rate}</div>
      </Stack>
      <IconButton
        sx={{
          "&:focus": {
            outline: "none !important",
          },
        }}
      >
        {isFavorite ? (
          <FavoriteOutlined sx={{ color: "#FF413E", fontSize: "2rem" }} />
        ) : (
          <>
            <FavoriteBorderOutlined
              sx={{
                color: "white",
                fontSize: "2rem",
                color: "#E94141",
              }}
            />
          </>
        )}
      </IconButton>
    </Box>
  );

  return (
    <Stack>
      <Card
        sx={{
          height: 220,
          width: "100%",
          my: 1.4, // Margin between cards
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          },
          borderRadius: "16px",
          padding: "12px",
          backgroundImage: `url(${image?.trim() ? image : imageDefault})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => {
          // console.log("hhahahaha"); // hanhle when choose service
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ height: "100%", justifyContent: "space-between" }}
        >
          {headerItem}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "3px 12px",
              width: "fit-content",
              color: "var(--color-green)",
              fontSize: "0.87rem",
            }}
          >
            Recommended
          </div>
        </Box>
      </Card>
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Name_Item
      </Typography>
      <Typography
        sx={{ color: "#3336" }}
        variant="subTitle"
      >{`business • addressss • favorite`}</Typography>
    </Stack>
  );
};

export default PopuparItem;
