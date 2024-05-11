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
import Swal from "sweetalert2";
import { useState } from "react";
import MyNeedPosts from "./MyNeedPosts";
import MyRequestedPosts from "./MyRequestedPosts";
import { Helmet } from "react-helmet-async";

const ManagePost = () => {
  const [value, setValue] = React.useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

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

  return (
    <>
      <Helmet>
        <title>Manage My Post | ECO Volunteers</title>
      </Helmet>
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
          <MyNeedPosts></MyNeedPosts>
        </CustomTabPanel>

        {/* requested panel */}
        <CustomTabPanel value={value} index={1}>
          <MyRequestedPosts></MyRequestedPosts>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ManagePost;
