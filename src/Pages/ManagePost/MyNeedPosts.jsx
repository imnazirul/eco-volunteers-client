/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { ImMenu } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import MyNeedRow from "./MyNeedRow";
import MyNeedPostCard from "./MyNeedPostCard";

const MyNeedPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [volunteerData, setVolunteerData] = useState([]);
  const [layout, setLayout] = useState(true);

  const {
    data: postsData = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["vPostsData"],
    queryFn: () => {
      return axiosSecure
        .get(`/volunteerposts?email=${user?.email}`)
        .then((res) => {
          setVolunteerData(res.data);
          return res.data;
        });
    },
  });

  if (isPending) {
    return (
      <>
        <div className="flex flex-col gap-5">
          {" "}
          <div className="flex gap-4 w-full">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
        </div>
      </>
    );
  } else if (postsData.length === 0) {
    return (
      <h1 className="text-5xl  mx-auto text-center h-[50vh] flex flex-col justify-center bg-base-300">
        You Didn't Added Any Volunteer Post
      </h1>
    );
  }

  if (isError) {
    <div className="max-w-96 mx-auto text-center min-h-[70vh] flex flex-col justify-center">
      {" "}
      <h1 className="text-3xl">Data Not Found!</h1>
      <h3 className="text-xl">Refresh The Page or Try Again Later</h3>
    </div>;
  }

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7091e6",
      cancelButtonColor: "#3d52a0",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/volunteerposts?deleteid=${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = volunteerData.filter((data) => data._id !== id);
            setVolunteerData(remaining);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="relative overflow-x-auto  ">
        <div className="flex justify-end mb-5 items-center gap-4 bg-base-100 border rounded-xl">
          <h1 className="text-2xl">Change Layout</h1>
          <div className="flex gap-3  px-3 py-2">
            <ImMenu
              onClick={() => setLayout(true)}
              className={`text-4xl cursor-pointer ${
                layout ? "text-blue-500" : ""
              }`}
            ></ImMenu>
            <CgMenuGridR
              onClick={() => setLayout(false)}
              className={`text-4xl cursor-pointer ${
                !layout ? "text-blue-500" : ""
              }`}
            ></CgMenuGridR>
          </div>
        </div>
        {layout ? (
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full text-left rtl:text-right  ">
              <thead className="  uppercase bg-base-300 ">
                <tr className="text-center text-[15px]">
                  <th scope="col" className="px-6 py-3">
                    Index
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Post Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Volunteer Needed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {volunteerData.map((post, index) => (
                  <MyNeedRow
                    key={post._id}
                    handleDeletePost={handleDeletePost}
                    index={index}
                    post={post}
                  ></MyNeedRow>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6 mt-4">
            {volunteerData.map((post) => (
              <MyNeedPostCard
                key={post._id}
                post={post}
                handleDeletePost={handleDeletePost}
              ></MyNeedPostCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNeedPosts;
