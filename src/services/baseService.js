import { ensureString } from "../utils/string.utils";
import axiosClient from "./axiosService";

const buildQueryParams = (url, params) => {
  console.log(params);
  if (!params || typeof params !== "object") return url;

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, ensureString(value));
    }
  });

  const query = searchParams.toString();
  return query ? `${url}${url.includes("?") ? "&" : "?"}${query}` : url;
};

export const get = async (url, params) => {
  try {
    const fullUrl = buildQueryParams(url, params);
    console.log(fullUrl);
    const { data } = await axiosClient.get(fullUrl);
    return data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url, params) => {
  try {
    const { data } = await axiosClient.post(url, params);
    return data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url, params) => {
  try {
    const { data } = await axiosClient.put(url, params);
    return data;
  } catch (error) {
    throw error;
  }
};

export const del = async (url, params) => {
  try {
    const config = params ? { data: params } : undefined;
    const { data } = await axiosClient.delete(url, config);
    return data;
  } catch (error) {
    throw error;
  }
};
