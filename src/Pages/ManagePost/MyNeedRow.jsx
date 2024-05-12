import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyNeedRow = ({ post, index, handleDeletePost }) => {
  const deadline = new Date(post.deadline).toDateString();
  return (
    <tr
      key={post._id}
      className="text-center bg-base-100 border-b border-gray-300"
    >
      <td className="px-6 py-4">{index + 1}</td>
      <td scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
        {post?.post_title}
      </td>
      <td className="px-6 py-4">{deadline}</td>
      <td className="px-6 py-4">{post?.category}</td>
      <td className="px-6 py-4">{post?.volunteers_needed}</td>
      <td className="px-6 py-4 flex gap-3 justify-center">
        <Link to={`/update_post/${post?._id}`}>
          <button className="btn btn-sm bg-base-100 border-blue-500 border  hover:bg-transparent flex  items-center font-semibold  rounded-md  text-blue-500 ">
            <GrUpdate className="hidden md:flex"></GrUpdate>
            Update
          </button>
        </Link>
        <button
          onClick={() => {
            handleDeletePost(post?._id);
          }}
          className="btn btn-sm bg-base-100 flex border-red-500 border  hover:bg-transparent items-center  font-semibold rounded-md  text-red-500 "
        >
          <MdDelete></MdDelete>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyNeedRow;
