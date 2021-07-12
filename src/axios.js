import axios from "axios";

const instance = axios.create({
  baseURL: "https://apartmenthunt-team37.herokuapp.com",
});

export default instance;
