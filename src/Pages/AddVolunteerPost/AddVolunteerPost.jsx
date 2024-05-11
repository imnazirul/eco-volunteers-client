import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const AddVolunteerPost = () => {
  const [categoryErr, setCategoryErr] = useState("");
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const handleErr = () => {
    const category = document.getElementById("dropdown").value;
    if (category === "Select Category Name") {
      setCategoryErr("Select Category Name !");
      return;
    } else {
      setCategoryErr("");
    }
  };

  const handleAddPost = (e) => {
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

    const newPost = {
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

    axiosSecure
      .post("/volunteerposts", newPost)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added",
            text: "Your Volunteer Post Has Been Added",
            icon: "success",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-6 container font-poppins bg-[#3c63c5] mx-auto rounded-lg">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-5 font-poppins text-white">
        Add Volunteer Post
      </h1>
      <form
        onSubmit={handleAddPost}
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
            className="h-[48px] input pl-3 outline-none rounded-lg"
          >
            <option
              required
              defaultChecked
              className="py-2"
              value="Select Category Name"
            >
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
            {user?.displayName}
          </p>
        </div>

        <div>
          <label className="text-white" htmlFor="organizer_email">
            Organizer Email
          </label>
          <p className="p-3 bg-transparent rounded-md font-medium border text-lg text-white">
            {user?.email}
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
            placeholder="Long Description (Optional)"
            className="textarea w-full textarea-bordered resize-none"
          ></textarea>
        </div>

        <button className="btn w-64 max-w-64 rounded-3xl border-none mx-auto  bg-primary-1 hover:bg-secondary-1 text-white font-poppins text-lg md:col-span-2">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerPost;
