import { Stack, Typography } from "@mui/material";
import PopularRender from "../PopularRender";
import { getPopularLocation } from "../../services/location";
import React from "react";
import { useSelector } from "react-redux";
import { getPopularStaff } from "../../services/staff";

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
  const [locations, setLocations] = React.useState([]);
  const [staffs, setStaffs] = React.useState([]);
  const reduxCityCode = useSelector((state) => state.location.cityCode);
  React.useEffect(() => {
    const getLocations = async (cityCode) => {
      try {
        const res = await getPopularLocation({ cityCode: cityCode });
        console.log(res);
        setLocations(
          res.map((item) => ({
            id: item._id,
            rate: item.averageRating,
            isFavorite: item.isFavorite,
            name: item.name,
            address: `${item.address.specifict}`,
            image: item.image,
          }))
        );
      } catch (error) {
        console.log(error);
        return;
      }
    };
    const getStaffs = async (cityCode) => {
      try {
        const res = await getPopularStaff({ cityCode: cityCode });
        console.log(res);
        setStaffs(
          res.map((item) => ({
            id: item._id,
            rate: item.averageRating,
            isFavorite: item.isFavorite,
            name: item.name,
            address: `${item.address.specifict}`,
            image: item.image,
          }))
        );
      } catch (error) {
        console.log(error);
        return;
      }
    };
    if (reduxCityCode) {
      getLocations(reduxCityCode);
      getStaffs(reduxCityCode);
    }
  }, [reduxCityCode]);

  return (
    <Stack spacing={8} sx={{ py: 10 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", px: "68px", marginTop: "100px" }}
      >
        City_Name recommends
      </Typography>
      <PopularRender
        items={locations}
        type={"location"}
        title="Popular Location"
      ></PopularRender>
      <PopularRender
        items={staffs}
        type={"staff"}
        title="Popular individuals"
      ></PopularRender>
    </Stack>
  );
};

export default PopularSection;
