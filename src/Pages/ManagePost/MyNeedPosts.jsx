/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyNeedPosts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [volunteerData, setVolunteerData] = useState([]);
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-left rtl:text-right  ">
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
              <tr
                key={post._id}
                className="text-center bg-base-100 border-b border-gray-300"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {post?.post_title}
                </td>
                <td className="px-6 py-4">{post?.deadline}</td>
                <td className="px-6 py-4">{post?.category}</td>
                <td className="px-6 py-4">{post?.volunteers_needed}</td>
                <td className="px-6 py-4 flex gap-3 justify-center">
                  <Link to={`/update_post/${post?._id}`}>
                    <button className="btn btn-sm font-medium text-blue-500 ">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDeletePost(post?._id);
                    }}
                    className="btn btn-sm font-medium text-red-500 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyNeedPosts;
