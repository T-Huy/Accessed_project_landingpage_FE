import { FormControl, MenuItem, Select } from "@mui/material";
import { useCitySelect } from "../hook/useCitySelect";

const SelectCustom = () => {
  const { options, value, handleChange } = useCitySelect("");
  return (
    <FormControl className="w-full">
      <Select
        className="input-none-outlined"
        inputProps={{ "aria-label": "Without label" }}
        value={value}
        onChange={handleChange}
      >
        <MenuItem value=" ">
          <div>Location</div>
        </MenuItem>
        {options.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCustom;
