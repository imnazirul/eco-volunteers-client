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
          <button className="btn btn-sm font-medium text-blue-500 ">
            Update
          </button>
        </Link>
        <button
          onClick={() => {
            handleDeletePost(post?._id);
          }}
          className="btn btn-sm font-medium text-red-500 "
        >
          Delete
        </button>
        {/* <Button
          onClick={() => {
            handleDeletePost(post?._id);
          }}
          variant="outlined red"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button> */}
      </td>
    </tr>
  );
};

export default MyNeedRow;
