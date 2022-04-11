import axios from "axios";

export const api = axios.create({
  baseURL: "https://money-control-backend.herokuapp.com/",
});
