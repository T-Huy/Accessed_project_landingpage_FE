// src/providers/AuthProvider.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken, loginSuccess } from "../redux/userSlice";
import { refresh } from "../services/auth";
import { getMe } from "../services/user";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const res = await refresh(); // gọi lấy accessToken từ cookie
        const accessToken = res.newAccessToken;

        dispatch(setAccessToken(accessToken));

        const meRes = await getMe(); // gọi lấy userInfo nếu token hợp lệ
        dispatch(
          loginSuccess({
            accessToken: accessToken,
            userInfo: meRes.user,
          })
        );
      } catch (err) {
        console.warn("⚠️ Không thể khôi phục phiên đăng nhập");
      }
    };

    restoreSession();
  }, []);

  return children;
};

export default AuthProvider;
