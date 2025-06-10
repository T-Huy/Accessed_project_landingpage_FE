import { get, post } from "./baseService";

const endPointUser = "/api/favorite";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const setFavorite = async (value) => {
  try {
    const res = await post(cpathUser(``), value);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
