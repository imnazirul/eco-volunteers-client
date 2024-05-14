/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VolunteerCard = ({ job }) => {
  const deadline = new Date(job.deadline).toDateString();

  const { _id, thumbnail, post_title, category } = job;

  return (
    <div>
      <div className="rounded-xl  bg-base-100 border">
        <figure className="p-4">
          <img src={thumbnail} alt="Shoes" className="rounded-xl" />
        </figure>

        <div className=" flex flex-col justify-between w-full px-4 pb-4 space-y-2 md:space-y-3">
          <span className="bg-[#7091e64d] self-start font-medium inline px-3 py-1 rounded-3xl max-sm:text-sm text-[#556fcc]">
            {category}
          </span>
          <h2 className="text-lg md:text-xl font-semibold">{post_title}</h2>
          <p className="md:text-lg font-medium">Deadline: {deadline}</p>
          {/* <p>{description}</p> */}
          <hr className="bg-primary-1" />
          <div className="card-actions">
            <Link to={`/volunteer_need_details/${_id}`}>
              {" "}
              <button className="btn max-sm:btn-sm bg-secondary-1 text-white hover:bg-secondary-1 self-center">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
