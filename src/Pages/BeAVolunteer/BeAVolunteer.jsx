/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import useAuth from "../../CustomHooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const BeAVolunteer = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();

  const {
    data: singleData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["singleJob"],
    queryFn: () => {
      return axiosSecure.get(`/singlevpost/${id}`).then((res) => res.data);
    },
  });

  if (isPending) {
    return (
      <div className="flex flex-col gap-3 md:gap-6 border p-5 rounded-xl">
        <div className="skeleton h-60 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <hr className="" />
        <div className="skeleton h-8 w-20"></div>
      </div>
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
  const {
    _id,
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
  } = singleData;

  const handleRequest = (e, id) => {
    e.preventDefault();
    let suggestion = document.getElementById("suggestion").value;
    const volunteer = {
      volunteer_email: user?.email,
      volunteer_name: user?.displayName,
      suggestion: suggestion,
    };
    axiosSecure
      .post(`/updatevolunteerneeded?id=${id}`, volunteer)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Requested Successfully",
            showConfirmButton: true,
            confirmButtonText: "Ok",
            confirmButtonColor: "#3d52a0",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-secondary-1 p-5 rounded-xl">
      <h1 className="text-3xl text-center text-white underline font-semibold flex-1">
        Be A Volunteer
      </h1>
      <form className=" grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 md:gap-8">
        <div>
          <label className="text-white" htmlFor="thumbnail">
            Thumbnail URL
          </label>
          <input
            readOnly
            defaultValue={thumbnail}
            className="w-full cursor-pointer rounded-md input"
          />
        </div>
        <div>
          <label className="text-white" htmlFor="post_title">
            Post Title
          </label>
          <input
            readOnly
            defaultValue={post_title}
            className="w-full rounded-md input"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white" htmlFor="country_name">
            Category
          </label>
          <input
            readOnly
            defaultValue={category}
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="location">
            Location
          </label>
          <input
            readOnly
            defaultValue={location}
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="volunteers_needed">
            Number Of Volunteers Needed
          </label>
          <input
            readOnly
            defaultValue={volunteers_needed}
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="volunteers_needed">
            DeadLine
          </label>
          <br />
          <input
            readOnly
            defaultValue={deadline}
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="">
            Organizer Name
          </label>
          <input
            readOnly
            defaultValue={organizer_name}
            className="w-full rounded-md input"
          />
        </div>

        <div>
          <label className="text-white" htmlFor="organizer_email">
            Organizer Email
          </label>
          <input
            readOnly
            defaultValue={organizer_email}
            className="w-full rounded-md input"
          />
        </div>
        <div className="col-span-2">
          <label className="text-white" htmlFor="description">
            Description
          </label>
          <br />
          <textarea
            defaultValue={description}
            className="textarea w-full textarea-bordered resize-none"
          ></textarea>
        </div>
      </form>
      <form>
        <h1 className="text-3xl text-center text-white underline font-semibold my-3">
          Your Info
        </h1>
        <div>
          <label className="text-white" htmlFor="">
            Volunteer Name
          </label>
          <input
            readOnly
            defaultValue={user?.displayName}
            className="w-full rounded-md input"
          />
        </div>
        <div>
          <label className="text-white" htmlFor="">
            Volunteer Email
          </label>
          <input
            readOnly
            defaultValue={user?.email}
            className="w-full rounded-md input"
          />
        </div>
        <div>
          <label className="text-white" htmlFor="">
            Suggestion
          </label>
          <input
            id="suggestion"
            placeholder="suggestion"
            className="w-full rounded-md input"
          />
        </div>
        <div>
          <label className="text-white" htmlFor="">
            Status
          </label>
          <br />
          <select className="w-full rounded-md input">
            <option value="Requested">Requested</option>
          </select>
        </div>
        <div className="my-3 flex justify-center">
          <button
            onClick={(e) => {
              handleRequest(e, _id);
            }}
            className="btn bg-primary-1 hover:bg-primary-1 text-lg text-white border-none px-10 rounded-3xl mx-auto"
          >
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeAVolunteer;
