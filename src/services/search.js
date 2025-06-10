import { get, post } from "./baseService";

const endPointUser = "/api/country";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const getSearch = async (value) => {
  try {
    const res = await get(cpathUser("search"), value);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
