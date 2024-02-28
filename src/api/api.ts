// import axios from "axios";
// import { FormData } from "../types";

// const BASE_URL = "https://rickandmortyapi.com/api/";

// export const getData = async (url: string) => {
//     console.log(url);
//   const res = await axios.get(`${BASE_URL}${url}`).catch((e) => {
//     throw new Error(e);
//   });
//   return res;
// };

// export const getAllCharacters = async (page: number) => {
//   const res = await getData(`character/?page=${page}`);
//   console.log(res.data.results);
//   return res.data.results;
// };

// export const buildURL = (formData: FormData) => {
//   const queryParams = [];
//   for (const key in formData) {
//     if (
//       Object.prototype.hasOwnProperty.call(formData, key) &&
//       formData[key as keyof FormData]
//     ) {
//       queryParams.push(
//         `${key}=${encodeURIComponent(
//           formData[key as keyof FormData].toLowerCase()
//         )}`
//       );
//     }
//   }
//   return "https://rickandmortyapi.com/api/character/?" + queryParams.join("&");
// };

// export const getFilteredCharacters = async (url: string) => {
//     console.log(url)
//   const res = await axios.get(url);
//   if (res.data && res.data.results) {
//     return res.data.results;
//   } else {
//     throw new Error("Invalid response format: missing results");
//   }
// };

// export const getAllFilteredCharacters = async (page: number) => {
//   const res = await getFilteredCharacters(`character/?page=${page}`);
//   if (res.data && res.data.results) {
//     return res.data.results;
//   } else {
//     throw new Error("No characters found for the specified page");
//   }
// };
