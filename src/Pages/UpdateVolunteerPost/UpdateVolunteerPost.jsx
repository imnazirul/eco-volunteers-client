/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateVolunteerPost = () => {
  const [categoryErr, setCategoryErr] = useState("");
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState();

  const {
    data: postData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["updatePost"],
    queryFn: () => {
      // const user = ;
      return axiosSecure.get(`singlevpost/${id}`).then((res) => {
        setStartDate(new Date(res.data?.deadline));
        return res.data;
      });
    },
  });
  if (isPending) {
    return <h1 className="text-4xl text-center">Loading...</h1>;
  }

  const {
    thumbnail,
    post_title,
    description,
    long_description,
    category,
    location,
    volunteers_needed,
    deadline,
    organizer_name,
    organizer_email,
  } = postData;

  const handleErr = () => {
    const category = document.getElementById("dropdown").value;
    if (category === "Select Category Name") {
      setCategoryErr("Select Category Name !");
      return;
    } else {
      setCategoryErr("");
    }
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const post_title = form.post_title.value;
    const category = document.getElementById("dropdown").value;
    const location = form.location.value;
    const thumbnail = form.thumbnail.value;
    const volunteers_needed = parseInt(form.volunteers_needed.value);
    const deadline = startDate.toDateString();
    const organizer_name = user?.displayName;
    const organizer_email = user?.email;
    const description = form.description.value;
    const long_description = form.long_description.value;

    if (category === "Select Category Name") {
      setCategoryErr("Select Category Name !");
      return;
    }
    const updatedPost = {
      post_title,
      category,
      location,
      thumbnail,
      volunteers_needed,
      deadline,
      organizer_email,
      organizer_name,
      description,
      long_description,
    };
    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonColor: "#7091e6",
      confirmButtonColor: "#3d52a0",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure
          .put(`/volunteerposts?update=${id}`, updatedPost)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Your Changes has been saved",
                showConfirmButton: true,
                confirmButtonColor: "#3d52a0",
              });
            }
          });
      }
    });
  };

  return (
    <div className="p-6 container font-poppins bg-[#0b2d81] mx-auto rounded-lg">
      <Helmet>
        <title>Update Volunteer Post | ECO Volunteers</title>
      </Helmet>
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-5 font-poppins text-white">
        Update Volunteer Post
      </h1>
      <form
        onSubmit={handleUpdatePost}
        className=" grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 md:gap-8"
      >
        <div>
          <label className="text-white" htmlFor="post_title">
            Post Title
          </label>
          <input
            name="post_title"
            type="text"
            required
            defaultValue={post_title}
            placeholder="Post Title"
            className="w-full rounded-md input"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-white flex gap-3 items-center"
            htmlFor="country_name"
          >
            Select Category
            {categoryErr && (
              <p className="font-poppins text-red-600 mb-1  px-1 bg-white rounded-2xl  text-center">
                {categoryErr}
              </p>
            )}
          </label>

          <select
            onChange={handleErr}
            id="dropdown"
            defaultValue={category}
            className="h-[48px] input pl-3 outline-none rounded-lg"
          >
            <option required className="py-2" value="Select Category Name">
              Select Category Name
            </option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Social Services">Social Services</option>
            <option value="Environment">Environment</option>
            <option value="Animal Welfare">Animal Welfare</option>
            <option value="Youth Development">Youth Development</option>
            <option value="Elderly Care">Elderly Care</option>
            <option value="Hunger and Homelessness">
              Hunger and Homelessness
            </option>
          </select>
        </div>

        <div>
          <label className="text-white" htmlFor="location">
            Location
          </label>
          <input
            name="location"
            type="text"
            required
            defaultValue={location}
            placeholder="Location"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="thumbnail">
            Thumbnail URL
          </label>
          <input
            name="thumbnail"
            type="url"
            required
            defaultValue={thumbnail}
            placeholder="Thumbnail URL"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="volunteers_needed">
            Number Of Volunteers Needed
          </label>
          <input
            name="volunteers_needed"
            type="number"
            required
            defaultValue={volunteers_needed}
            placeholder="Number Of Volunteers Needed"
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="volunteers_needed">
            DeadLine
          </label>
          <br />
          <div className="input">
            {" "}
            <DatePicker
              className="input w-full block text-lg"
              toggleCalendarOnIconClick
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div>
          <label className="text-white" htmlFor="">
            Organizer Name
          </label>
          <p className="p-3 bg-transparent rounded-md font-medium border text-lg text-white">
            {organizer_name}
          </p>
        </div>

        <div>
          <label className="text-white" htmlFor="organizer_email">
            Organizer Email
          </label>
          <p className="p-3 bg-transparent rounded-md font-medium border text-lg text-white">
            {organizer_email}
          </p>
        </div>
        <div>
          <label className="text-white" htmlFor="description">
            Description
          </label>
          <br />
          <textarea
            name="description"
            required
            defaultValue={description}
            placeholder="Description"
            className="textarea w-full textarea-bordered resize-none"
          ></textarea>
        </div>
        <div className="">
          <label className="text-white" htmlFor="long_description">
            Long Description (Optional)
          </label>
          <br />
          <textarea
            name="long_description"
            defaultValue={long_description ? long_description : "Not Available"}
            placeholder="Long Description (Optional)"
            className="textarea w-full textarea-bordered resize-none"
          ></textarea>
        </div>

        <button className="btn w-64 max-w-64 rounded-3xl border-none mx-auto bg-secondary-1 hover:bg-secondary-1 text-white font-poppins text-lg md:col-span-2">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdateVolunteerPost;
