/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const NewsCard = ({ data }) => {
  const { category, comments_number, title, description, image, date } = data;
  return (
    <div className="bg-base-100 border border-gray-200 rounded-lg shadow ">
      <div className="relative">
        <img className="rounded-t-lg" src={image} alt="" />
        <span className="bg-[#d9e2f89d] absolute top-2 left-2 self-start font-medium inline px-3 py-1 rounded-3xl max-sm:text-sm text-[#274bcc]">
          {category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex justify-between mb-3">
          <p className="text-secondary-1 px-2 py-1 rounded-md font-medium  bg-[#2948f81e]">
            {date}
          </p>
          <p className="text-secondary-1 px-2 py-1 rounded-md font-medium  bg-[#2948f81e]">
            {" "}
            {comments_number} Comments
          </p>
        </div>
        <h5 className="mb-2 text-lg md:text-2xl font-bold ">{title}</h5>

        <p className="mb-3 text-sm">{description}</p>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary-1 rounded-lg hover:bg-secondary-1 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
