/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VolunteerCard = ({ job }) => {
  const deadline = new Date(job.deadline).toDateString();

  const {
    _id,
    thumbnail,
    post_title,
    description,
    long_description,
    category,
    location,
    volunteers_needed,
    // deadline,
    organizer_name,
    organizer_email,
  } = job;

  return (
    <div>
      <div className="rounded-xl  bg-base-100 border">
        <figure className="p-4">
          <img src={thumbnail} alt="Shoes" className="rounded-xl" />
        </figure>

        <div className=" flex flex-col justify-between w-full px-4 pb-4 space-y-3">
          <span className="bg-[#7091e64d] self-start font-medium inline px-3 py-1 rounded-3xl text-[#3d52a0]">
            {category}
          </span>
          <h2 className="card-title">{post_title}</h2>
          <p className="text-lg font-medium">Deadline: {deadline}</p>
          {/* <p>{description}</p> */}
          <hr className="bg-primary-1" />
          <div className="card-actions">
            <Link to={`/volunteer_need_details/${_id}`}>
              {" "}
              <button className="btn bg-secondary-1 text-white hover:bg-secondary-1 self-center">
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
