import { loginSuccess } from "../redux/userSlice";
import { post } from "./baseService";

const endPointUser = "/auth";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const login = async (value) => {
  try {
    const res = await post(cpathUser("login"), value);
    if (res.status === 200) {
      dispatch(
        loginSuccess({
          access_token: res.access_token,
          userInfo: res.user[0],
        })
      );
      console.log("đăng nhập thành công", res.message);

      return true;
    } else {
      console.log(res.message || "Lỗi đăng nhập");

      return false;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
