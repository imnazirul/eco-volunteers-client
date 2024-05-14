import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NeedVolunteersRow = ({ post }) => {
  const deadline = new Date(post.deadline).toDateString();

  return (
    <tr className="text-center">
      <td className="px-6 py-4">
        {" "}
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={post?.thumbnail} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4">{post?.post_title}</td>
      <td className="px-6 py-4">{post?.category}</td>
      <td className="px-6 py-4">{post?.volunteers_needed}</td>
      <td className="px-6 py-4">{deadline}</td>
      <td className="px-6 py-4">
        {" "}
        <Link to={`/volunteer_need_details/${post?._id}`}>
          {" "}
          <button className="btn max-sm:btn-sm bg-secondary-1 text-white hover:bg-secondary-1 self-center">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default NeedVolunteersRow;
