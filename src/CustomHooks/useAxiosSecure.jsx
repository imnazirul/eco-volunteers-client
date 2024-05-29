/* eslint-disable no-unused-vars */
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut, loading } = useAuth();
  console.log(logOut, loading);

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          // console.log("logout the user");

          if (!loading) {
            logOut()
              .then(() => <Navigate to="/login"></Navigate>)
              .catch((err) => console.log(err));
          }
        }

        return Promise.reject(error);
      }
    );
  }, [loading, logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
