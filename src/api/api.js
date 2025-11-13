export const ADMIN_URL = "https://admin.v-tochky.ru";
const API_URL = ADMIN_URL + "/api";

export const fetcher = (url) => {
  return fetch(`${API_URL}/${url}`).then((res) => {
    if (!res.ok) throw new Error("Ошибка загрузки данных");
    return res.json();
  });
};
