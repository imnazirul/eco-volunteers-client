import { Fade } from "react-awesome-reveal";
import BannerSlider from "./BannerSlider";
import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [volunteerJob, setVolunteerJob] = useState([]);

  useEffect(() => {
    axios.get("/fakedata.json").then((res) => setVolunteerJob(res.data));
  }, []);

  if (volunteerJob.length > 6) {
    const slicedJobs = volunteerJob.slice(0, 6);
    setVolunteerJob(slicedJobs);
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 lg:gap-6">
          {volunteerJob.map((job, index) => (
            <VolunteerCard key={index} job={job}></VolunteerCard>
          ))}
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
