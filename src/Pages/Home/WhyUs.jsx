/* eslint-disable react/no-unescaped-entities */
const WhyUs = () => {
  return (
    <div>
      <section className="bg-base-100 border rounded-xl">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary-1">
                <h3 className="text-3xl font-semibold">Join Us</h3>
                <span className="text-sm font-bold tracking-wider uppercase ">
                  Be A Part Of Our Journey!
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-base-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-1">
                  <h3 className=" md:text-xl font-semibold tracking-wide">
                    Make a Difference
                  </h3>

                  <p className="mt-3 max-sm:text-sm">
                    Every action counts. Whether you're planting trees, cleaning
                    up beaches, or mentoring youth, your contributions have a
                    ripple effect that can transform lives and protect the
                    planet.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-1">
                  <h3 className=" md:text-xl font-semibold tracking-wide">
                    Join a Community
                  </h3>

                  <p className="mt-3 max-sm:text-sm">
                    Become part of a supportive and inclusive community of
                    like-minded individuals who share your passion for making
                    the world a better place. Together, we can achieve more than
                    we ever could alone.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-1">
                  <h3 className=" md:text-xl font-semibold tracking-wide">
                    Gain Experience and Skills
                  </h3>

                  <p className="mt-3 max-sm:text-sm">
                    Volunteering with us offers valuable opportunities for
                    personal and professional growth. Learn new skills, expand
                    your network, and gain hands-on experience in areas that
                    matter to you.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary-1">
                  <h3 className=" md:text-xl font-semibold tracking-wide">
                    No Experience Necessary
                  </h3>

                  <p className="mt-3 max-sm:text-sm">
                    Everyone has something valuable to contribute. No matter
                    your background or experience level, there's a place for you
                    on our team. We provide training and support to help you
                    succeed in your role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
