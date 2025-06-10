import { get } from "./baseService";

const endPointUser = "/api/serviceCategory";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const serviceCategory = async () => {
  try {
    const res = await get(cpathUser(""));
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
