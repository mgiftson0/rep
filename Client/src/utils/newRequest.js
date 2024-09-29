import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-clone-1.onrender.com/api/",
  headers: {
    "access-control-allow-origin": "*"
  },
  withCredentials: true,
});

export default newRequest;