import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./checkout.css";
import { FaDonate } from "react-icons/fa";
import { useRef, useState } from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");
  const amountRef = useRef();
  const [stripeSecret, setStripeSecret] = useState("");
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleChange = async () => {
    const amount = { amount: amountRef.current.value };
    if (amount.amount > 0) {
      const res = await axiosPublic.post("/create-payment-intent", amount);
      setStripeSecret(res.data.clientSecret);
    }
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: user?.displayName || "anonymous",
        email: user?.email || "anonymous",
      },
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(stripeSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      const donationData = {
        name: user?.displayName,
        email: user?.email,
        amount: parseInt(paymentIntent?.amount / 100),
        transactionId: paymentIntent?.id,
        status: paymentIntent?.status,
        time: new Date().getTime(),
      };

      const res = await axiosSecure.post("/donations", donationData);
      console.log(res.data);

      Swal.fire({
        title: "DONATION SUCCESSFUL",
        text: `YOUR TRANSACTION ID: ${paymentIntent.id}`,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/donationHistory");
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white text-lg">
            Enter Amount<span className="text-red-600 text-xl">*</span>{" "}
          </span>
        </label>

        <input
          onBlur={handleChange}
          ref={amountRef}
          type="number"
          placeholder="Ex: 10 $"
          className="input max-w-40 input-bordered"
        />
      </div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button
        className="btn bg-green-500 disabled:bg-transparent hover:bg-green-600 disabled:bg-slate-200"
        type="submit"
        disabled={!stripe || !stripeSecret}
      >
        <FaDonate></FaDonate> Donate
      </button>

      {paymentError && (
        <p className="text-red-600 mt-2 px-2 bg-white bg-opacity-50 max-w-80">
          {paymentError}
        </p>
      )}
    </form>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export default Checkout;
