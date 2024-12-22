import axios from "axios";
import { baseUrl } from "./SERVICE-CONSTANTS";

const axiosConfig = axios.create({
  baseURL: baseUrl,
});

export default axiosConfig;
