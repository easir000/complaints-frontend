import axios from "axios";
export var axiosInstance = axios.create({
  baseURL: "./",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
