import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
const httpServices = {
  get: axios.get,
};

export default httpServices;
