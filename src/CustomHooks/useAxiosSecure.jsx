import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   axiosSecure.interceptors.response.use(
  //     (res) => {
  //       return res;
  //     },
  //     (err) => {
  //       if (err.response.status === 401 || err.response.status === 403) {
  //         console.log("logout");
  //         logOut()
  //           .then(() => {
  //             navigate("/login");
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //     }
  //   );
  // }, [logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
