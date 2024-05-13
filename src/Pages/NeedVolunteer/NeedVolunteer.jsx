/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import axios from "axios";
// import { useEffect, useState } from "react";
import VolunteerCard from "../Home/VolunteerCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const NeedVolunteer = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [searchError, setSearchError] = useState("");

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
        <h1 className="text-3xl">Data Not Found!</h1>
        <h3 className="text-xl">Refresh The Page or Try Again Later</h3>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSearch} className="max-w-md mx-auto my-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 lg:gap-6">
        {volunteerPosts.map((job, index) => (
          <VolunteerCard key={index} job={job}></VolunteerCard>
        ))}
      </div>

      {searchError && (
        <div className="flex h-[50vh] items-center justify-center">
          <h1 className="text-4xl text-center text-primary-1">{searchError}</h1>
        </div>
      )}
    </>
  );
};

export default NeedVolunteer;
