import axios from "axios";
import token from "./token";

export default axios.create({
  baseURL: "https://graph.microsoft.com/beta",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
