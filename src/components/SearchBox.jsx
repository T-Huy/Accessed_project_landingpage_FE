import React, { useEffect } from "react";
import { Search, PinDropOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import SelectCustom from "./SelectCustom";
import { useSelector } from "react-redux";
import useDebounced from "../hook/useDebounce";
import { cityCode } from "../services/country";
import { getSearch } from "../services/search";

const SearchBox = () => {
  const [options, setOptions] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const debounce = useDebounced(searchValue);
  const reduxCityCode = useSelector((state) => state.location.cityCode);
  const transformData = (data) => {
    const locationList = data.locations.map((loc) => ({
      type: "location",
      name: loc.name,
    }));

    const staffList = data.staffs.map((staff) => ({
      type: "staff",
      name: `${staff.firstName} ${staff.lastName}`,
    }));

    const serviceList = data.services.map((service) => ({
      type: "service",
      name: service.name,
    }));

    return [...locationList, ...staffList, ...serviceList];
  };
  useEffect(() => {
    const getSearchData = async (cityCode, value) => {
      const res = await getSearch({ cityCode: cityCode, p: value });
      console.log(res);
      console.log(transformData(res));

      setOptions(transformData(res));
    };
    getSearchData(reduxCityCode, debounce);
  }, [debounce]);

  return (
    <Box
      className="w-full max-w-6xl bg-white rounded-xl p-2"
      display={"flex"}
      sx={{ alignItems: "center" }}
    >
      <Stack direction={"row"} sx={{ alignItems: "center" }} className="w-full">
        <Stack
          direction={"row"}
          sx={{ alignItems: "center" }}
          className="px-8 w-full max-w-xl"
        >
          <Search style={{ color: "#3336" }} />
          <Autocomplete
            className="w-full"
            // sx={{ width: "420px" }}
            freeSolo
            disableClearable
            options={options}
            groupBy={options?.length ? (option) => option.type : undefined}
            getOptionLabel={
              options?.length ? (option) => option.name : undefined
            }
            renderInput={(params) => (
              <TextField
                className="input-none-outlined"
                {...params}
                placeholder="Search for a business, individual or service"
                style={{ border: "none" }}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
          />
        </Stack>
        <Divider orientation="vertical" style={{ height: "32px" }} />
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            width: "50%",
            padding: "0 32px",
            maxWidth: {
              //   lg: "120px",
            },
          }}
        >
          <PinDropOutlined style={{ color: "#3336" }} />
          <SelectCustom />
        </Stack>
      </Stack>
      <Button
        className="h-20 w-56"
        variant="contained"
        style={{
          backgroundColor: "var(--color-primary)",
          boxShadow: "none",
          borderRadius: "12px",
          fontFamily: "DM Serif Text",
          textTransform: "none",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
