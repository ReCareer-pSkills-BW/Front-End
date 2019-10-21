import axios from "axios";

// React 2 stuff, feel free to check it out

export const axiosWithLoginAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "",
    headers: {
      Authorization: token
    }
  });
};
