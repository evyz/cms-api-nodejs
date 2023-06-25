import { $host } from ".";

export const apiList = async ({ page, size }) => {
  const { data } = await $host.get(`/system/?page=${page}&size=${size}`);
  return data;
};

export const createApi = async ({ path, controller, callback, method }) => {
  const { data } = await $host.post(`/system/api`, {
    path,
    controller,
    callback,
    method,
  });
  return data;
};
