import { useQuery } from "@tanstack/react-query";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const ManagePost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data = [], isPending } = useQuery({
    queryKey: ["vPostsData"],
    queryFn: () => {
      return axiosSecure
        .get(`/volunteerposts?email=${user?.email}`)
        .then((res) => res.data);
    },
  });

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return <div>{data.length}</div>;
};

export default ManagePost;
