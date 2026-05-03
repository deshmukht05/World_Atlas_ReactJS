import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//  http Get Method
export const getCountryApi = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

//  http Get Method for individual country name
export const getCountryIndApi = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`,
  );
};
