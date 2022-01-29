import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
const httpServices = {
  get: axios.get,
  post: axios.post,
};

export default httpServices;
