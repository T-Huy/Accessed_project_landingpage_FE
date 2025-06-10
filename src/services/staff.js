import { get, post } from "./baseService";

const endPointUser = "/api/staff";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const getPopularStaff = async ({ cityCode }) => {
  try {
    const res = await get(cpathUser(`top-staffs/${cityCode}`));
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
