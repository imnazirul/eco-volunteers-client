import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NeedVolunteer from "../Pages/NeedVolunteer/NeedVolunteer";
import AddVolunteerPost from "../Pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerNeedDetails from "../Pages/VolunteerNeedDetails/VolunteerNeedDetails";
import ManagePost from "../Pages/ManagePost/ManagePost";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateVolunteerPost from "../Pages/UpdateVolunteerPost/UpdateVolunteerPost";
import BeAVolunteer from "../Pages/BeAVolunteer.jsx/BeAVolunteer";
import Donation from "../Pages/Donation/Donation";
import DonationHistory from "../Pages/DonationHistory/DonationHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/need_volunteer",
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: "/volunteer_need_details/:id",
        element: (
          <PrivateRoute>
            <VolunteerNeedDetails></VolunteerNeedDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/add_volunteer_post",
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage_post",
        element: (
          <PrivateRoute>
            <ManagePost></ManagePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/update_post/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteerPost></UpdateVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "be_a_volunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer></BeAVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/donate",
        element: (
          <PrivateRoute>
            <Donation></Donation>
          </PrivateRoute>
        ),
      },
      {
        path: "/donationHistory",
        element: (
          <PrivateRoute>
            <DonationHistory></DonationHistory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
