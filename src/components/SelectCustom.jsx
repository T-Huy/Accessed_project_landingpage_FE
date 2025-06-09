import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectCustom = ({ option = [] }) => {
  const [location, setLocation] = useState(" ");
  const handleChangeLocation = (event) => {
    console.log(event.target.value);

    setLocation(event.target.value);
  };
  return (
    <FormControl className="w-full">
      <Select
        className="input-none-outlined"
        inputProps={{ "aria-label": "Without label" }}
        value={location}
        onChange={handleChangeLocation}
      >
        <MenuItem value=" ">
          <div>Location</div>
        </MenuItem>
        {option.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
