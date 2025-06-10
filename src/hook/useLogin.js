import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userSlice";
import { loginHandle } from "../services/auth";
import { getMe } from "../services/user";

const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async ({ username, password }) => {
    setLoading(true);
    setError("");
    try {
      const result = await loginHandle({
        username: username,
        password: password,
      });
      console.log("đăng nhập thành công", result);
      dispatch(
        loginSuccess({
          accessToken: result.accessToken,
        })
      );
      const userInfo = await getMe();
      dispatch(
        loginSuccess({
          accessToken: result.accessToken,
          userInfo: userInfo.user,
        })
      );
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
