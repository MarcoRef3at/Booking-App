import axios from "axios";
import token from "./token";
export default axios.create({
  baseURL: "https://graph.microsoft.com/v1.0/me/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
