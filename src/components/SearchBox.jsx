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

const SearchBox = () => {
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
            options={[]}
            renderInput={(params) => (
              <TextField
                className="input-none-outlined"
                {...params}
                placeholder="Search for a business, individual or service"
                style={{ border: "none" }}
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
          <SelectCustom
            option={[
              {
                label: "Ho Chi Minh",
                value: "HoChiMinh",
              },
              {
                label: "Ha Noi",
                value: "HaNoi",
              },
            ]}
          />
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
