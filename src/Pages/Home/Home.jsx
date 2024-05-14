/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";
import BannerSlider from "./BannerSlider";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import JoinTeam from "./JoinTeam";

import WhyUs from "./WhyUs";
import NewsAndUpdates from "./NewsAndUpdates";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: volunteerJobs = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["vCard"],
    queryFn: () => {
      return axiosSecure.get(`/volunteerposts?limit=${6}`).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <div>
      <Helmet>
        <title>Home | ECO Volunteers</title>
      </Helmet>
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
            </p>
          </Fade>
        </div>
        <div>
          {isError && (
            <div className="max-w-96 mx-auto text-center">
              {" "}
              <h1 className="text-2xl md:text-3xl text-center font-semibold mb-2">
                Data Not Found!
              </h1>
              <h3 className="text-sm md:text-lg text-center lg:text-xl">
                Refresh The Page or Try Again Later
              </h3>
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
          <button className="my-5 btn max-sm:btn-sm text-lg text-secondary-1 mx-auto flex justify-center">
            See All
          </button>
        </Link>

        <div className="mt-5 lg:mt-14 mb-5 lg:mb-10">
          <Fade fraction={0} direction="down" triggerOnce={true}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins">
              Discover Our Updates & News Content
            </h1>
          </Fade>
          <Fade fraction={0} direction="up" triggerOnce={true}>
            <p className="text-sm md:text-lg text-center max-w-3xl mx-auto mt-3 mb-4 font-poppins">
              Stay informed with our latest updates and news. Explore impactful
              stories, volunteer spotlights, and upcoming events.
            </p>
          </Fade>

          <NewsAndUpdates></NewsAndUpdates>
        </div>

        <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
          <Fade fraction={0} direction="down" triggerOnce={true}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins mb-4">
              Why Volunteer with Us?
            </h1>
          </Fade>

          <WhyUs></WhyUs>
        </div>

        <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
          <Fade fraction={0} direction="down" triggerOnce={true}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-poppins mb-5">
              Join Our Team
            </h1>
          </Fade>
          <JoinTeam></JoinTeam>
        </div>
      </div>
    </div>
  );
};

export default Home;
