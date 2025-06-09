import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userSlice";
// import { loginHandle } from "../services/auth";

const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ email, password }) => {
    setLoading(true);
    setError("");
    try {
      // const result = await loginHandle({ email, password });
      let result;
      if (result.status === 200) {
        console.log("đăng nhập thành công");
        dispatch(
          loginSuccess({
            access_token: result.access_token,
            userInfo: result.user[0],
          })
        );
      }
      return true;
    } catch (error) {
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
};

export default useLogin;
