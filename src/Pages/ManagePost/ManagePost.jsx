/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../CustomHooks/useAuth";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const ManagePost = () => {
  const [value, setValue] = React.useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: postsData = [], isPending } = useQuery({
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
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDeletePost = () => {
    console.log("delete clicked");
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="My Need Volunteer Post" {...a11yProps(0)} />
            <Tab label="My Volunteer Request Post" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full  text-left rtl:text-right  ">
              <thead className="  uppercase bg-base-300 ">
                <tr className="text-center text-[15px]">
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
                {postsData.map((post) => (
                  <tr
                    key={post._id}
                    className="text-center bg-base-100 border-b border-gray-300"
                  >
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
                        onClick={handleDeletePost}
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ManagePost;
