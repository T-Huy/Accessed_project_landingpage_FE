import { get, post } from "./baseService";

const endPointUser = "/api/service";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const getPopularService = async (value) => {
  try {
    const res = await get(cpathUser(`popular-service`), value);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
