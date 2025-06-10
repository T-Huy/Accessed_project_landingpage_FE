import { useEffect, useState } from "react";
import { cityCode } from "../services/country";

const useCurrentCity = () => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Trình duyệt không hỗ trợ định vị.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);

        try {
          const res = await cityCode({ lat: latitude, lon: longitude });
          console.log(res);
          setCity(res.cityCode);
          return;
        } catch (err) {
          setError("Không thể lấy tên thành phố.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Không thể truy cập vị trí: " + err.message);
        setLoading(false);
      }
    );
  }, []);

  return { city, loading, error };
};

export default useCurrentCity;
