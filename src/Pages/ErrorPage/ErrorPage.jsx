import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const ErrorEl = () => {
  return (
    <div className="bg-base-100 ">
      <Helmet>
        <title>Error | ECO Volunteers</title>
      </Helmet>
      <div className="container min-h-screen px-6 py-12 mx-auto flex items-center justify-center gap-12">
        <div className="w-full flex flex-col text-center justify-center">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-32 h-32 md:w-40 md:h-40 text-[#3d52a079]"
            >
              <path
                fill="currentColor"
                d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
              ></path>
              <rect
                width="176"
                height="32"
                x="168"
                y="320"
                fill="currentColor"
              ></rect>
              <polygon
                fill="currentColor"
                points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
              ></polygon>
              <polygon
                fill="currentColor"
                points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
              ></polygon>
            </svg>
          </div>

          <div className=" my-5 ">
            <h1 className="font-poppins  mb-3 text-3xl text-primary-1 font-semibold   md:text-3xl">
              Page not found!
            </h1>
            <img
              className="w-full max-w-lg lg:mx-auto"
              src="https://merakiui.com/images/components/illustration.svg"
              alt=""
            />
          </div>
          <p className="mt-4 text-2xl max-w-2xl mx-auto">
            Sorry, the page you're looking for is unavailable. You might find
            what you're looking for by using our Navigation Menu.
          </p>

          <Link to="/">
            {" "}
            <button className="btn mt-5 px-5 text-white transition-colors duration-200 rounded-3xl hover:bg-secondary-1  bg-secondary-1">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </div>
    // <div classNameName="text-black h-screen items-center flex justify-center gap-5 flex-col bg-gray-50 ">
    //   <Helmet>
    //     <title>Error | ECO Volunteers</title>
    //   </Helmet>
    //   <section classNameName="flex flex-col w-full justify-center items-center text-gray-800">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 512 512"
    //       classNameName="w-32 h-32 md:w-40 md:h-40 text-gray-400"
    //     >
    //       <path
    //         fill="currentColor"
    //         d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
    //       ></path>
    //       <rect
    //         width="176"
    //         height="32"
    //         x="168"
    //         y="320"
    //         fill="currentColor"
    //       ></rect>
    //       <polygon
    //         fill="currentColor"
    //         points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
    //       ></polygon>
    //       <polygon
    //         fill="currentColor"
    //         points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
    //       ></polygon>
    //     </svg>
    //     <div classNameName="container flex flex-col items-center justify-center px-5 mx-auto my-8">
    //       <div classNameName="max-w-md text-center">
    //         {/* <h2 classNameName="mb-8 font-extrabold text-9xl dark:text-gray-400">
    //           404
    //         </h2> */}
    //         <img
    //           src="https://merakiui.com/images/components/illustration.svg"
    //           alt=""
    //         />
    //         <p classNameName="text-2xl text-btn-1 font-semibold md:text-3xl text-primary-1">
    //           Page Not Found!
    //         </p>

    //         <p classNameName="mt-4 mb-8 dark:text-gray-600">
    //           Sorry, the page you're looking for is unavailable. You might find
    //           what you're looking for by using our Navigation Menu.
    //         </p>
    //         <Link
    //           to="/"
    //           classNameName="px-8 py-3 font-semibold rounded bg-primary-1 text-gray-50"
    //         >
    //           Back to homepage
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default ErrorEl;
