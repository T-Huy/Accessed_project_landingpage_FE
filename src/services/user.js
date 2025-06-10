import { get, post } from "./baseService";

const endPointUser = "/api/user";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const getMe = async () => {
  try {
    const res = await get(cpathUser("user-info"));
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
