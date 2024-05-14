/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import axios from "axios";
// import { useEffect, useState } from "react";
import VolunteerCard from "../Home/VolunteerCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ImMenu } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import NeedVolunteersRow from "./NeedVolunteersRow";

const NeedVolunteer = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [searchError, setSearchError] = useState("");
  const [layout, setLayout] = useState(true);

  const {
    data = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axiosSecure.get(`/volunteerposts`).then((res) => {
        setVolunteerPosts(res.data);
        return res.data;
      });
    },
    refetchOnWindowFocus: false,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchBoxValue = e.target.searchText.value;

    axiosSecure
      .get(`/volunteerpostssearch?search=${searchBoxValue}`)
      .then((res) => {
        setVolunteerPosts(res.data);
        if (res.data.length === 0) {
          setSearchError("No Search Match Data Found!");
        } else {
          setSearchError("");
        }
      });
  };

  if (isPending) {
    return (
      <>
        <Helmet>
          <title>Need Volunteer Posts | ECO Volunteers</title>
        </Helmet>
        <form className="max-w-md mx-auto my-5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium  sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-base-100  focus:border-blue-500 placeholder-gray-400 focus:ring-blue-500  outline-none"
              placeholder="Search Post, Volunteers..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 lg:gap-10">
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <hr className="" />
            <div className="skeleton h-8 w-20"></div>
          </div>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <div className="max-w-96 mx-auto text-center h-[70vh] flex justify-center flex-col">
        {" "}
        <h1 className="text-2xl md:text-3xl text-center font-semibold  mb-2">
          Data Not Found!
        </h1>
        <h3 className="text-sm md:text-lg text-center lg:text-xl">
          Refresh The Page or Try Again Later
        </h3>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <form onSubmit={handleSearch} className=" max-w-md mx-auto my-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            name="searchText"
            type="search"
            className="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-xl bg-base-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search Post, Volunteers..."
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary-1 hover:bg-primary-1 focus:ring-4 focus:outline-none  font-medium rounded-xl text-sm px-4 py-2 focus:ring-secondary-1"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-end mb-5 items-center gap-4 bg-base-100 border rounded-xl">
        <h1 className="text-xl md:text-2xl">Change Layout</h1>
        <div className="flex gap-3  px-3 py-2">
          <CgMenuGridR
            onClick={() => setLayout(true)}
            className={`text-3xl md:text-4xl cursor-pointer ${
              layout ? "text-blue-500" : ""
            }`}
          ></CgMenuGridR>
          <ImMenu
            onClick={() => setLayout(false)}
            className={`text-3xl md:text-4xl cursor-pointer ${
              !layout ? "text-blue-500" : ""
            }`}
          ></ImMenu>
        </div>
      </div>
      {layout ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 lg:gap-6">
          {volunteerPosts.map((job, index) => (
            <VolunteerCard key={index} job={job}></VolunteerCard>
          ))}
        </div>
      ) : (
        <div className=" rounded-xl">
          <table className="w-full text-left rtl:text-right  ">
            <thead className=" uppercase bg-base-300 ">
              <tr className="text-center text-[15px]">
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Post Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Volunteers Needed</th>
                <th className="px-6 py-4">Deadline</th>
                <th className="px-6 py-4">Details</th>
              </tr>
            </thead>
            <tbody>
              {volunteerPosts.map((post) => (
                <NeedVolunteersRow
                  key={post._id}
                  post={post}
                ></NeedVolunteersRow>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {searchError && (
        <div className="flex h-[50vh] items-center justify-center">
          <h1 className="text-4xl text-center text-primary-1">{searchError}</h1>
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
