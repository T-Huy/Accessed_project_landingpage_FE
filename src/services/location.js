import { get, post } from "./baseService";

const endPointUser = "/api/location";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const getPopularLocation = async ({ cityCode }) => {
  try {
    const res = await get(cpathUser(`top-locations/${cityCode}`));
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};


