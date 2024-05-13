/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { ImMenu } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import MyRequestedPostCard from "./MyRequestedPostCard";
import { MdCancel } from "react-icons/md";

const MyRequestedPosts = () => {
  const [requestedPosts, setRequestedPosts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [layout, setLayout] = useState(true);

  const {
    data: requestedPost = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["requestedPost"],
    queryFn: () => {
      return axiosSecure
        .get(`/requestedpost?email=${user?.email}`)
        .then((res) => {
          setRequestedPosts(res.data);
          return res.data;
        });
    },
  });

  if (isPending) {
    return (
      <>
        <div className="w-1/3 flex gap-2 my-5">
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
        </div>
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
  } else if (requestedPost.length === 0) {
    return (
      <h1 className="text-5xl  mx-auto text-center h-[50vh] flex flex-col justify-center bg-base-300">
        You Didn't Requested To Any Volunteer Post
      </h1>
    );
  }

  if (isError) {
    <div className="max-w-96 mx-auto text-center h-[70vh] flex flex-col justify-center">
      {" "}
      <h1 className="text-3xl">Data Not Found!</h1>
      <h3 className="text-xl">Refresh The Page or Try Again Later</h3>
    </div>;
  }

  const handleCancelRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7091e6",
      cancelButtonColor: "#3d52a0",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/requestedpost?cancelid=${id}&email=${user?.email}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = requestedPosts.filter(
                (data) => data._id !== id
              );
              setRequestedPosts(remaining);
              Swal.fire({
                title: "Cancelled Successfully!",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className="flex justify-end mb-5 items-center gap-4 bg-base-100 border rounded-xl">
          <h1 className="text-xl md:text-2xl">Change Layout</h1>
          <div className="flex gap-3  px-3 py-2">
            <ImMenu
              onClick={() => setLayout(true)}
              className={`text-3xl md:text-4xl cursor-pointer ${
                layout ? "text-blue-500" : ""
              }`}
            ></ImMenu>
            <CgMenuGridR
              onClick={() => setLayout(false)}
              className={`text-3xl md:text-4xl cursor-pointer ${
                !layout ? "text-blue-500" : ""
              }`}
            ></CgMenuGridR>
          </div>
        </div>
        {layout ? (
          <div className="border rounded-xl ">
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
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Organizer Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {requestedPosts.map((post, index) => (
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
                    <td className="px-6 py-4">{post?.location}</td>
                    <td className="px-6 py-4">{post?.category}</td>
                    <td className="px-6 py-4">{post?.organizer_email}</td>
                    <td className="px-6 py-4 flex gap-3 justify-center">
                      <button
                        onClick={() => {
                          handleCancelRequest(post?._id);
                        }}
                        className="btn btn-sm bg-base-100 border-red-500 border  hover:bg-transparent items-center  font-semibold rounded-md  text-red-500"
                      >
                        <MdCancel></MdCancel>
                        Cancel Request
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6 mt-4">
            {requestedPosts.map((post) => (
              <MyRequestedPostCard
                key={post._id}
                post={post}
                handleCancelRequest={handleCancelRequest}
              ></MyRequestedPostCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequestedPosts;
