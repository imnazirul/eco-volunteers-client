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
import toast from "react-hot-toast";

const UpdateVolunteerPost = () => {
  const [categoryErr, setCategoryErr] = useState("");
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState();
  const [btnText, setBtnText] = useState("Update Post");

  const {
    data: postData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["singleVPostData"],
    queryFn: () => {
      // const user = ;
      return axiosSecure
        .get(`/singlevpost/${id}?email=${user?.email}`)
        .then((res) => {
          setStartDate(new Date(res.data?.deadline));
          return res.data;
        });
    },
  });
  if (isPending) {
    return (
      <div className="flex flex-col gap-3 md:gap-8 border p-5 rounded-xl">
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-8 w-40 mx-auto"></div>
      </div>
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
    const deadline = startDate.getTime();
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
        setBtnText(
          <span className="loading loading-spinner loading-md"></span>
        );
        axiosSecure
          .put(`/volunteerposts?update=${id}&email=${user?.email}`, updatedPost)
          .then((res) => {
            setBtnText("Update Post");
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Your Changes has been saved",
                showConfirmButton: true,
                confirmButtonColor: "#7091e6",
              });
            } else {
              toast.error("Change Something To Update The Post");
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Failed",
              showConfirmButton: true,
              confirmButtonText: "Ok",
              confirmButtonColor: "#7091e6",
              text: "Failed To Update Volunteer Post",
              icon: "error",
            });
            setBtnText("Update Post");
          });
      }
    });
  };

  return (
    <div
      className={
        "p-6 container font-poppins bg-[url('https://i.ibb.co/1dLS72V/joel-filipe-Wc8k-Kry-EPM-unsplash.jpg')] bg-blend-overlay bg-[#083968] mx-auto rounded-lg bg-cover bg-center"
      }
    >
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

        <button className="btn w-64 max-w-64 rounded-3xl border-none mx-auto bg-primary-1 hover:bg-secondary-1 text-white font-poppins text-lg md:col-span-2">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UpdateVolunteerPost;
