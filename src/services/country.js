import { get, post } from "./baseService";

const endPointUser = "/api/country";

const cpathUser = (action) => `${endPointUser}/${action}`;

export const getAllCites = async () => {
  try {
    const res = await get(cpathUser("all-cities"));
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const cityCode = async (value) => {
  try {
    console.log("value", value);

    const res = await get(cpathUser("reverse"), value);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const cityInfo = async ({ cityCode }) => {
  try {
    const res = await get(cpathUser(`${cityCode}`));
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
