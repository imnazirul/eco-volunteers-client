/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const BannerSlider2 = () => {
  return (
    <div className="rounded-lg overflow-hidden dark:text-white">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px] "
              style={{
                backgroundImage: "url(https://i.ibb.co/zhGWBRg/image-1.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins       dark:text-[#ffffffCC]">
                    Join Us in Building a Better Tomorrow!
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Discover meaningful volunteer opportunities that align
                      with your passions and skills. Together, we can create
                      positive change in our communities and beyond. Sign up
                      today to make a difference!
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/4KDTN1t/image-2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    Empower Your Community Through Volunteerism!
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Be a catalyst for change by volunteering with us. Whether
                      you're passionate about education, environmental
                      conservation, or social justice, we have diverse
                      opportunities where you can contribute your time and
                      talents. Explore our volunteering options and start making
                      an impact now!
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/tLvK7JS/image-3.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    Make Memories, Make Friends, Make a Difference!
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Experience the joy of giving back while forging lifelong
                      connections. Our volunteer programs offer not just
                      opportunities to serve but also chances to build
                      friendships, learn new skills, and create lasting
                      memories. Join our community of volunteers today and be
                      part of something bigger than yourself.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/vqsLzqj/image-4.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    Be the Change You Want to See in the World!
                  </h1>

                  <Fade direction="up">
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Ready to turn your passion for change into action? Whether
                      you're a student looking to fulfill service hours, a
                      professional seeking to give back, or a retiree wanting to
                      stay active in the community, we welcome volunteers of all
                      ages and backgrounds. Start your journey with us and be
                      the change you wish to see.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="hero h-[210px] md:h-[300px] lg:h-[500px]"
              style={{
                backgroundImage: "url(https://i.ibb.co/0M92Jmf/image-5.png)",
              }}
            >
              <div className="hero-overlay bg-opacity-40"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl max-sm:space-y-1">
                  {" "}
                  <h1 className="lg:mb-5 text-xl lg:text-4xl font-bold md:text-2xl font-poppins dark:text-[#ffffffCC]">
                    Discover Your Purpose, Volunteer with Us!
                  </h1>
                  <Fade direction="up">
                    {" "}
                    <p className="md:mb-5 max-sm:text-sm font-poppins lg:text-lg dark:text-[#ffffffCC]">
                      Uncover your potential and find fulfillment through
                      volunteering. Our platform offers a wide range of
                      opportunities tailored to your interests and schedule.
                      Whether you have a few hours a week or just want to
                      contribute occasionally, there's a role for you here. Join
                      us on a journey of self-discovery and meaningful impact.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default BannerSlider2;
