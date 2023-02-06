import axios from "axios";
import { useEffect } from "react";

import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const axiosPrivate = axios.create("http://localhost:3060/users/login");
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
