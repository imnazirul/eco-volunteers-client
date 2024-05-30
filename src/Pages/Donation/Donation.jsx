import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Donation = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/fqxfJDC/josh-appel-Ne-TPASr-bm-Q-unsplash.jpg')] bg-cover bg-black bg-opacity-50 bg-blend-overlay bg-no-repeat p-5 rounded-xl">
      <h1 className="text-3xl text-white font-semibold border-l-4 pl-1 border-green-600">
        DONATE FOR ECO
      </h1>
      <div className="flex md:gap-3 items-center">
        <div className="max-w-xl flex-1">
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        </div>
        <div className="flex-1 hidden md:flex">
          <img
            className="rounded-xl filter brightness-75"
            src="https://www.cpacanada.ca/-/media/cpa-digital-hub/featured-images/2019/12/hub_12_18_charity-hero-1200x900.jpg?h=900&iar=0&w=1200&rev=af800c90a32a4bac8e7c01400388d10c&hash=896E7846FF0AE4DDC0F744AD80191FBB"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;
