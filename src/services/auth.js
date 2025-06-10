import { post } from "./baseService";

const endPointUser = "/api/auth";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const loginHandle = async (value) => {
  try {
    const res = await post(cpathUser("login"), value);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const refresh = async () => {
  try {
    const res = await post(cpathUser("refresh-token"));
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutHandle = async () => {
  try {
    const res = await post(cpathUser("logout"));
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
