/* eslint-disable react/no-unescaped-entities */
const JoinTeam = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="space-y-3 max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold mb-10 max-w-xl text-center md:text-left">
          Join us and make the
          <span className="text-primary-1"> world cleaner </span>
          and better with our team
        </h1>
        <p className="md:text-xl">
          Join us in our mission to make the world cleaner and better! Become a
          vital part of our team and contribute to positive change. Together, we
          can make a lasting impact on the environment and communities. Join
          hands with us and be a force for good.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-3 bg-base-200 rounded-xl p-5">
          <img src="https://i.ibb.co/RH7r9Vp/mt-1926-home-icon-1.png" alt="" />
          <h3 className="text-2xl font-semibold text-secondary-1">
            Become a Volunteer
          </h3>
          <p className="">
            If you are a person who supports our ideas and wants to make his
            utmost contribution, we welcome you!
          </p>
        </div>
        <div className="space-y-3 bg-base-200 rounded-xl p-5">
          <img src="https://i.ibb.co/cDmxZVz/mt-1926-home-icon-3.png" alt="" />
          <h3 className="text-2xl font-semibold text-secondary-1">
            Support a Campaign
          </h3>
          <p>
            You can support any of our campaigns by either your personal
            participation or any donation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
