/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const MyRequestedPostCard = ({ post, handleCancelRequest }) => {
  return (
    <div className="w-full border px-4 py-3 font-poppins rounded-lg  bg-base-100">
      <div className="flex items-center justify-between mb-2">
        <span className="flex gap-1 items-center">
          <IoLocationSharp></IoLocationSharp> {post?.location}
        </span>
        <span className="bg-[#7091e64d] self-start font-medium inline px-3 py-1 rounded-3xl text-[#3d52a0]">
          {post?.category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-xl font-semibold ">{post?.post_title}</h1>
        <h3 className="my-3 ">
          <span className="font-medium">Organizer</span>:{" "}
          {post?.organizer_email}
        </h3>
        <div className="flex my-3 overflow-hidden rounded-lg bg-base-200">
          <div className="flex items-center  justify-center px-2 bg-primary-1 text-white"></div>
          <div className="flex items-center gap-2 p-2">
            <p className=" font-medium">{post?.volunteers_needed}</p>
            <p className="">Volunteers Needed</p>
          </div>
        </div>
      </div>
      <hr className="my-3" />

      <div className="flex justify-center">
        <button
          onClick={() => {
            handleCancelRequest(post?._id);
          }}
          className="btn btn-sm bg-base-100 border-red-500 border  hover:bg-transparent items-center text-[17px] font-semibold rounded-md  text-red-500"
        >
          <MdCancel></MdCancel>
          Cancel Request
        </button>
      </div>
    </div>
  );
};

export default MyRequestedPostCard;
