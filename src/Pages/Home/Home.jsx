import { Fade } from "react-awesome-reveal";
import BannerSlider from "./BannerSlider";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: volunteerJobs = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["vCard"],
    queryFn: () => {
      return axiosSecure
        .get(`/volunteerposts?limit=${6}`)
        .then((res) => res.data);
    },
  });

  return (
    <div>
      <BannerSlider></BannerSlider>

      <div>
        <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
          <Fade fraction={0} direction="down" triggerOnce={true}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
              Volunteer Needs Now
            </h1>
          </Fade>
          <Fade fraction={0} direction="up" triggerOnce={true}>
            <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
              Urgent volunteer needs in your community. From event support to
              mentoring, discover opportunities to make an immediate impact.
              Join us today and be part of the change.
            </p>
          </Fade>
        </div>
        <div>
          {isError && (
            <div className="max-w-96 mx-auto text-center">
              {" "}
              <h1 className="text-3xl">Data Not Found!</h1>
              <h3 className="text-xl">Refresh The Page or Try Again Later</h3>
            </div>
          )}
          {isPending ? (
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
              {volunteerJobs.map((job, index) => (
                <VolunteerCard key={index} job={job}></VolunteerCard>
              ))}
            </div>
          )}
        </div>
        <Link to="/need_volunteer">
          <button className="my-5 btn text-lg text-secondary-1 mx-auto flex justify-center">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
