import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const subtotal = useSelector((state) => state.orebiReducer.subtotal);
  const navigate = useNavigate();

  const handlePayment = async () => {
    setIsProcessing(true);
    setError("");

    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/stripe/create-payment-intent`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product: { price: subtotal, currency: "usd" } }),
    });

    const { clientSecret, error: intentError } = await response.json();

    if (intentError) {
      setError(intentError);
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    setIsProcessing(false);

    if (confirmError) {
      console.log("Confirm Error:", confirmError.message);
      setError(confirmError.message);
    } else {
      console.log("Payment Successful");
      setSuccessPopup(true);
      setTimeout(() => {
        navigate("/"); // Redirect to home after 2 seconds
      }, 2000);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: "16px",
        letterSpacing: "0.025em",
        lineHeight: "24px",
        padding: "10px",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <h1 className="text-center text-2xl font-semibold mb-6">Stripe Payment Method</h1>
        <div className="flex flex-col items-center">
          <label htmlFor="card-element" className="mb-2">Credit or Debit Card</label>
          <CardElement options={cardElementOptions} className="my-4 w-full max-w-xs" />
          <button
            onClick={handlePayment}
            className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
            disabled={!stripe || isProcessing}
          >
            {isProcessing ? "Processing..." : `Pay Rs ${subtotal.toFixed(2)}`} {/* Display total price */}
          </button>
          
          {/* Error Popup */}
          {error && (
            <div className="text-red-500 mt-2 text-center">
              {error}
            </div>
          )}
          
          {/* Success Popup */}
          {successPopup && (
            <div className="bg-green-500 text-white p-4 rounded mt-4">
              Payment successful! Redirecting...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
