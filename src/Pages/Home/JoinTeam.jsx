const JoinTeam = () => {
  return (
    <div className="flex gap-5">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold mb-5">
          Join us and make the <br />
          <span className="text-primary-1">world cleaner </span>
          and better with our team
        </h1>
        <p className="text-lg">
          Everyday we put major efforts to collect garbage from the streets,
          recycle materials and promote the ideas of ecology and eco-friendly
          materials.
        </p>
      </div>
      <div className="flex gap-4">
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
