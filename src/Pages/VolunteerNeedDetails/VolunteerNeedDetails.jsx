import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const VolunteerNeedDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

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

  return (
    <>
      <section className="bg-base-300">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-base-100"
          >
            <img
              src={thumbnail}
              // thumbnail
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-3 lg:col-span-5">
              <h3 className="text-xl font-semibold sm:text-2xl  ">
                {post_title}
              </h3>
              <span className="text-lg">
                <span>DeadLine: </span> {deadline}
              </span>
              <br />
              <div className="my-5">
                <p className="bg-[#7091e64d] self-start font-medium inline px-3 py-1 rounded-3xl text-[#3d52a0] ">
                  {category}
                </p>
              </div>

              <div className="flex overflow-hidden rounded-lg bg-base-200">
                <div className="flex items-center justify-center px-4 bg-primary-1 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-6"
                  >
                    <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                    <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                  </svg>
                </div>
                <div className="flex items-center  gap-3 p-3">
                  <p className="text-2xl font-semibold">{volunteers_needed}</p>
                  <p className="text-lg font-medium">Volunteers Needed</p>
                </div>
              </div>

              <p>{description}</p>
              <Link to={`/be_a_volunteer/${_id}`}>
                {" "}
                <button className=" btn px-10 hover:bg-primary-1 text-lg font-medium rounded-3xl bg-secondary-1 text-white">
                  Be a Volunteer
                </button>
              </Link>
            </div>
          </a>
        </div>
      </section>

      <div className="bg-base-200">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <div className="flex items-center gap-1 mb-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-16 h-16  dark:text-primary-1"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                <p className=" font-medium text-lg">
                  <span className="text-primary-1">Organizer Name: </span>
                  {organizer_name}
                </p>
                <p className=" font-medium text-lg">
                  <span className="text-primary-1">Organizer Email: </span>
                  {organizer_email}
                </p>
              </div>
            </div>
            <h2 className="text-3xl font-semibold leading-none">
              location: {location}
            </h2>
            <p className="mt-4 mb-8 text-sm">{long_description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerNeedDetails;
