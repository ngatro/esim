"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { ESIMPlan } from "@/types/esim";
import { esimPlans, getCountryFlag } from "@/data/esimData";
import Link from "next/link";

const ESIMCheckout = () => {
  const [plan, setPlan] = useState<ESIMPlan | null>(null);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("checkoutESIM");
    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    } else {
      // Default to first plan if none selected
      setPlan(esimPlans[0]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmEmail || !firstName || !lastName || !agreeTerms) {
      alert("Please fill in all required fields");
      return;
    }
    if (email !== confirmEmail) {
      alert("Email addresses do not match");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      
      // Save to purchased eSIMs
      const purchasedESIMs = JSON.parse(localStorage.getItem("purchasedESIMs") || "[]");
      const newPurchase = {
        ...plan,
        purchaseId: `ESIM-${Date.now()}`,
        purchaseDate: new Date().toISOString(),
        status: "active",
        email: email,
        qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${plan?.id}-${Date.now()}`,
      };
      purchasedESIMs.push(newPurchase);
      localStorage.setItem("purchasedESIMs", JSON.stringify(purchasedESIMs));
    }, 2000);
  };

  if (orderComplete && plan) {
    return (
      <>
        <Breadcrumb title={"Order Complete"} pages={["checkout", "confirmation"]} />
        <section className="overflow-hidden py-20 bg-gray-2">
          <div className="max-w-[600px] w-full mx-auto px-4 sm:px-8 xl:px-0">
            <div className="bg-white shadow-1 rounded-[10px] p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                    fill="#22AD5C"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                    fill="#22AD5C"
                  />
                </svg>
              </div>
              
              <h2 className="font-semibold text-2xl text-dark mb-4">
                Thank You for Your Purchase!
              </h2>
              
              <p className="text-gray-600 mb-6">
                Your eSIM has been activated and is ready to use. We have sent the QR code and installation instructions to <strong>{email}</strong>.
              </p>
              
              <div className="bg-gray-1 rounded-lg p-6 mb-6">
                <div className="text-4xl mb-3">{getCountryFlag(plan.countryCode)}</div>
                <h3 className="font-medium text-lg text-dark">{plan.name}</h3>
                <p className="text-gray-500">{plan.data} | {plan.validity}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/my-account"
                  className="inline-flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                  View My eSIMs
                </Link>
                <Link
                  href="/shop-with-sidebar"
                  className="inline-flex justify-center font-medium text-dark bg-gray-2 py-3 px-6 rounded-md ease-out duration-200 hover:bg-gray-3"
                >
                  Browse More Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!plan) {
    return (
      <>
        <Breadcrumb title={"Checkout"} pages={["checkout"]} />
        <section className="overflow-hidden py-20 bg-gray-2">
          <div className="max-w-[600px] w-full mx-auto px-4 sm:px-8 xl:px-0 text-center">
            <p className="text-lg text-gray-500 mb-4">No plan selected</p>
            <Link
              href="/shop-with-sidebar"
              className="inline-flex font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
            >
              Browse eSIM Plans
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              {/* Checkout Left - Customer Details */}
              <div className="lg:max-w-[670px] w-full">
                {/* Email Section - Most Important for eSIM delivery */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
                  <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
                    Delivery Information
                  </h2>
                  <p className="text-gray-500 mb-6 text-sm">
                    Your eSIM QR code and installation instructions will be sent to this email address.
                  </p>

                  <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                    <div className="w-full">
                      <label htmlFor="firstName" className="block mb-2.5">
                        First Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        required
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>

                    <div className="w-full">
                      <label htmlFor="lastName" className="block mb-2.5">
                        Last Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        required
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2.5">
                      Email Address <span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="confirmEmail" className="block mb-2.5">
                      Confirm Email Address <span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="confirmEmail"
                      id="confirmEmail"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                  <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
                    Payment Method
                  </h2>

                  <div className="space-y-4">
                    <label
                      htmlFor="paymentCard"
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer ${
                        paymentMethod === "card"
                          ? "border-blue bg-blue/5"
                          : "border-gray-3"
                      }`}
                    >
                      <input
                        type="radio"
                        id="paymentCard"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === "card"
                            ? "border-blue"
                            : "border-gray-4"
                        }`}
                      >
                        {paymentMethod === "card" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue"></div>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                            stroke="#3C50E0"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M2 10H22"
                            stroke="#3C50E0"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span className="font-medium text-dark">
                          Credit / Debit Card
                        </span>
                      </div>
                    </label>

                    <label
                      htmlFor="paymentPaypal"
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer ${
                        paymentMethod === "paypal"
                          ? "border-blue bg-blue/5"
                          : "border-gray-3"
                      }`}
                    >
                      <input
                        type="radio"
                        id="paymentPaypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === "paypal"
                            ? "border-blue"
                            : "border-gray-4"
                        }`}
                      >
                        {paymentMethod === "paypal" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue"></div>
                        )}
                      </div>
                      <span className="font-medium text-dark">PayPal</span>
                    </label>

                    <label
                      htmlFor="paymentApple"
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer ${
                        paymentMethod === "apple"
                          ? "border-blue bg-blue/5"
                          : "border-gray-3"
                      }`}
                    >
                      <input
                        type="radio"
                        id="paymentApple"
                        name="paymentMethod"
                        value="apple"
                        checked={paymentMethod === "apple"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === "apple"
                            ? "border-blue"
                            : "border-gray-4"
                        }`}
                      >
                        {paymentMethod === "apple" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue"></div>
                        )}
                      </div>
                      <span className="font-medium text-dark">Apple Pay</span>
                    </label>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-5">
                      <div>
                        <label htmlFor="cardNumber" className="block mb-2.5">
                          Card Number <span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
                      </div>

                      <div className="flex gap-5">
                        <div className="w-full">
                          <label htmlFor="expiry" className="block mb-2.5">
                            Expiry Date <span className="text-red">*</span>
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            id="expiry"
                            placeholder="MM/YY"
                            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                          />
                        </div>

                        <div className="w-full">
                          <label htmlFor="cvv" className="block mb-2.5">
                            CVV <span className="text-red">*</span>
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            id="cvv"
                            placeholder="123"
                            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Checkout Right - Order Summary */}
              <div className="max-w-[455px] w-full">
                {/* Order Summary */}
                <div className="bg-white shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-dark">
                      Order Summary
                    </h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    {/* Plan Details */}
                    <div className="flex items-start gap-4 py-5 border-b border-gray-3">
                      <div className="text-4xl">{getCountryFlag(plan.countryCode)}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-dark">{plan.name}</h4>
                        <p className="text-sm text-gray-500">{plan.country}</p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-600">
                          <span>{plan.data}</span>
                          <span>|</span>
                          <span>{plan.validity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-dark">
                          ${plan.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="py-5 border-b border-gray-3">
                      <h4 className="font-medium text-dark mb-3">Included:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {plan.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                                fill="#22AD5C"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                                fill="#22AD5C"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subtotal */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-3">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-dark">${plan.price.toFixed(2)}</span>
                    </div>

                    {/* Digital delivery - no shipping */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-3">
                      <span className="text-gray-600">Delivery</span>
                      <span className="text-green">Free (Instant Email)</span>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between pt-5">
                      <p className="font-medium text-lg text-dark">Total</p>
                      <p className="font-medium text-lg text-dark">
                        ${plan.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-6 mt-7.5">
                  <label
                    htmlFor="agreeTerms"
                    className="flex cursor-pointer select-none items-start gap-3"
                  >
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border ${
                          agreeTerms
                            ? "border-blue bg-blue"
                            : "border-gray-4"
                        }`}
                      >
                        {agreeTerms && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.3103 9.25104C16.471 9.41178 16.5612 9.62978 16.5612 9.85707C16.5612 10.0844 16.471 10.3024 16.3103 10.4631L12.0243 14.7491C11.8635 14.9098 11.6455 15.0001 11.4182 15.0001C11.191 15.0001 10.973 14.9098 10.8122 14.7491L8.24062 12.1775C8.08448 12.0158 7.99808 11.7993 8.00003 11.5745C8.00199 11.3498 8.09214 11.1348 8.25107 10.9759C8.41 10.8169 8.62499 10.7268 8.84975 10.7248C9.0745 10.7229 9.29103 10.8093 9.4527 10.9654L11.4182 12.931L15.0982 9.25104C15.2589 9.09034 15.4769 9.00006 15.7042 9.00006C15.9315 9.00006 16.1495 9.09034 16.3103 9.25104Z"
                              fill="white"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue hover:underline">
                        Privacy Policy
                      </a>
                      . I understand that this is a digital product and will be delivered via email.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing || !agreeTerms}
                  className={`w-full flex justify-center items-center gap-2 font-medium text-white py-4 px-6 rounded-md ease-out duration-200 mt-7.5 ${
                    isProcessing || !agreeTerms
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue hover:bg-blue-dark"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Purchase - ${plan.price.toFixed(2)}
                    </>
                  )}
                </button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 9.16669H4.16667C3.24619 9.16669 2.5 9.91288 2.5 10.8334V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10.8334C17.5 9.91288 16.7538 9.16669 15.8333 9.16669Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83333 9.16669V5.83335C5.83333 4.72828 6.27232 3.66848 7.05372 2.88708C7.83512 2.10567 8.89493 1.66669 10 1.66669C11.1051 1.66669 12.1649 2.10567 12.9463 2.88708C13.7277 3.66848 14.1667 4.72828 14.1667 5.83335V9.16669"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Secure checkout with SSL encryption
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ESIMCheckout;
