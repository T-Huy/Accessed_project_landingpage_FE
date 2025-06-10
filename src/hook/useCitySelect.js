import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityCode } from "../redux/locationSlice";
import { getAllCites } from "../services/country";
import useCurrentCity from "./useCurrentCity"; // import hook định vị

export const useCitySelect = (defaultValue = "") => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.userInfo);
  const reduxCityCode = useSelector((state) => state.location.cityCode);

  // ✅ GỌI Ở ĐÂY - luôn gọi hook ở đầu
  const { city: currentCityCode } = useCurrentCity();

  const userCityCode =
    userInfo?.address?.cityCode || currentCityCode || defaultValue;
  const [value, setValue] = useState(reduxCityCode || userCityCode);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await getAllCites();
        const mapped = res.map((city) => ({
          label: city.cityName,
          value: city.cityCode,
        }));
        setOptions(mapped);
      } catch (error) {
        console.error("Failed to fetch cities", error);
      }
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const finalCity = reduxCityCode || userCityCode;
    if (finalCity) {
      setValue(finalCity);
      dispatch(setCityCode(finalCity));
    }
  }, [reduxCityCode, userCityCode, currentCityCode, dispatch]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    dispatch(setCityCode(newValue));
  };

  return {
    options,
    value,
    handleChange,
  };
};
