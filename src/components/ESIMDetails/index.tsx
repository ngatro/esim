"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import Link from "next/link";
import { esimPlans, getCountryFlag } from "@/data/esimData";
import { ESIMPlan } from "@/types/esim";

interface ESIMDetailsProps {
  planId?: string;
}

const ESIMDetails = ({ planId }: ESIMDetailsProps) => {
  const [plan, setPlan] = useState<ESIMPlan | null>(null);
  const [activeTab, setActiveTab] = useState("tabOne");

  const tabs = [
    {
      id: "tabOne",
      title: "Plan Details",
    },
    {
      id: "tabTwo",
      title: "Coverage",
    },
    {
      id: "tabThree",
      title: "How to Install",
    },
  ];

  useEffect(() => {
    // Get plan from localStorage or find by ID
    const storedPlan = localStorage.getItem("selectedESIMPlan");
    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    } else if (planId) {
      const foundPlan = esimPlans.find((p) => p.id === planId);
      if (foundPlan) {
        setPlan(foundPlan);
      }
    } else {
      // Default to first plan
      setPlan(esimPlans[0]);
    }
  }, [planId]);

  if (!plan) {
    return (
      <>
        <Breadcrumb title={"eSIM Plan Details"} pages={["esim", "plan details"]} />
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg text-gray-500">Loading plan details...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title={"eSIM Plan Details"} pages={["esim", plan.country]} />

      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
            {/* Plan Image/Flag Section */}
            <div className="lg:max-w-[570px] w-full">
              <div className="lg:min-h-[400px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex flex-col items-center justify-center">
                <div className="text-[120px] mb-4">{getCountryFlag(plan.countryCode)}</div>
                <h3 className="text-2xl font-semibold text-dark">{plan.country}</h3>
                <p className="text-gray-500 mt-2">{plan.region}</p>
                
                {/* Coverage indicator */}
                <div className="mt-6 flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1.66669 10H18.3334"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 1.66669C12.0844 3.94865 13.2691 6.91002 13.3334 10C13.2691 13.09 12.0844 16.0514 10 18.3334C7.91561 16.0514 6.73093 13.09 6.66669 10C6.73093 6.91002 7.91561 3.94865 10 1.66669Z"
                      stroke="#3C50E0"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-sm font-medium text-dark">
                    {plan.coverage.length > 1 
                      ? `${plan.coverage.length} Countries Coverage`
                      : "Single Country Coverage"
                    }
                  </span>
                </div>
              </div>

              {/* Network badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {plan.networks.map((network, idx) => (
                  <span
                    key={idx}
                    className="bg-white shadow-1 rounded-lg px-4 py-2 text-sm font-medium text-dark"
                  >
                    {network}
                  </span>
                ))}
              </div>
            </div>

            {/* Plan Content */}
            <div className="max-w-[539px] w-full">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                  {plan.name}
                </h2>

                {plan.popular && (
                  <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                    Popular
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={i < Math.floor(plan.rating) ? "fill-[#FFA645]" : "fill-gray-300"}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                          fill=""
                        />
                      </svg>
                    ))}
                  </div>
                  <span>({plan.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_375_9221)">
                      <path
                        d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                        fill="#22AD5C"
                      />
                      <path
                        d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                        fill="#22AD5C"
                      />
                    </g>
                  </svg>
                  <span className="text-green">Instant Activation</span>
                </div>
              </div>

              <h3 className="font-medium text-custom-1 mb-4.5">
                <span className="text-2xl text-dark font-bold">${plan.price.toFixed(2)}</span>
              </h3>

              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                      fill="#3C50E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                      fill="#3C50E0"
                    />
                  </svg>
                  <span className="font-medium">{plan.data}</span> High-Speed Data
                </li>

                <li className="flex items-center gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                      fill="#3C50E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                      fill="#3C50E0"
                    />
                  </svg>
                  <span className="font-medium">{plan.validity}</span> Validity
                </li>

                <li className="flex items-center gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                      fill="#3C50E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                      fill="#3C50E0"
                    />
                  </svg>
                  {plan.speed} Network Speed
                </li>

                <li className="flex items-center gap-2.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                      fill="#3C50E0"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                      fill="#3C50E0"
                    />
                  </svg>
                  {plan.type === "data-only" ? "Data Only (No Calls/SMS)" : "Data + Calls + SMS"}
                </li>
              </ul>

              <div className="border-y border-gray-3 mt-7.5 mb-9 py-9">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="min-w-[100px]">
                      <h4 className="font-medium text-dark">Data:</h4>
                    </div>
                    <span className="text-gray-600">{plan.data}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="min-w-[100px]">
                      <h4 className="font-medium text-dark">Validity:</h4>
                    </div>
                    <span className="text-gray-600">{plan.validity}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="min-w-[100px]">
                      <h4 className="font-medium text-dark">Speed:</h4>
                    </div>
                    <span className="text-gray-600">{plan.speed}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="min-w-[100px]">
                      <h4 className="font-medium text-dark">Networks:</h4>
                    </div>
                    <span className="text-gray-600">{plan.networks.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4.5">
                <Link
                  href="/checkout"
                  onClick={() => {
                    localStorage.setItem("checkoutESIM", JSON.stringify(plan));
                  }}
                  className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                  Buy Now - ${plan.price.toFixed(2)}
                </Link>

                <button
                  className="flex items-center justify-center gap-2 py-3 px-7 rounded-md border border-gray-3 ease-out duration-200 hover:text-white hover:bg-dark hover:border-transparent"
                >
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.62436 4.42423C3.96537 5.18256 2.75 6.98626 2.75 9.13713C2.75 11.3345 3.64922 13.0283 4.93829 14.4798C6.00072 15.6761 7.28684 16.6677 8.54113 17.6346C8.83904 17.8643 9.13515 18.0926 9.42605 18.3219C9.95208 18.7366 10.4213 19.1006 10.8736 19.3649C11.3261 19.6293 11.6904 19.75 12 19.75C12.3096 19.75 12.6739 19.6293 13.1264 19.3649C13.5787 19.1006 14.0479 18.7366 14.574 18.3219C14.8649 18.0926 15.161 17.8643 15.4589 17.6346C16.7132 16.6677 17.9993 15.6761 19.0617 14.4798C20.3508 13.0283 21.25 11.3345 21.25 9.13713C21.25 6.98626 20.0346 5.18256 18.3756 4.42423C16.7639 3.68751 14.5983 3.88261 12.5404 6.02077C12.399 6.16766 12.2039 6.25067 12 6.25067C11.7961 6.25067 11.601 6.16766 11.4596 6.02077C9.40166 3.88261 7.23607 3.68751 5.62436 4.42423Z"
                      fill=""
                    />
                  </svg>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* Tab Header */}
          <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
            {tabs.map((item, key) => (
              <button
                key={key}
                onClick={() => setActiveTab(item.id)}
                className={`font-medium lg:text-lg ease-out duration-200 hover:text-blue relative before:h-0.5 before:bg-blue before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
                  activeTab === item.id
                    ? "text-blue before:w-full"
                    : "text-dark before:w-0"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {/* Plan Details Tab */}
            <div
              className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
                activeTab === "tabOne" ? "flex" : "hidden"
              }`}
            >
              <div className="max-w-[670px] w-full">
                <h2 className="font-medium text-2xl text-dark mb-7">
                  Plan Specifications:
                </h2>

                <div className="bg-white rounded-lg p-6 shadow-1">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 font-medium text-dark">Data Allowance</td>
                        <td className="py-3 text-right">{plan.data}</td>
                      </tr>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 font-medium text-dark">Validity Period</td>
                        <td className="py-3 text-right">{plan.validity}</td>
                      </tr>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 font-medium text-dark">Network Speed</td>
                        <td className="py-3 text-right">{plan.speed}</td>
                      </tr>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 font-medium text-dark">Plan Type</td>
                        <td className="py-3 text-right">{plan.type === "data-only" ? "Data Only" : "Data + Voice"}</td>
                      </tr>
                      <tr className="border-b border-gray-3">
                        <td className="py-3 font-medium text-dark">Supported Networks</td>
                        <td className="py-3 text-right">{plan.networks.join(", ")}</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-dark">Activation</td>
                        <td className="py-3 text-right">Instant (QR Code)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-xl text-dark mb-4">Features:</h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg
                          width="20"
                          height="20"
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
              </div>

              <div className="max-w-[370px] w-full">
                <h2 className="font-medium text-2xl text-dark mb-7">
                  Important Notes:
                </h2>
                <div className="bg-white rounded-lg p-6 shadow-1">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-blue font-bold">1.</span>
                      <span>Your device must be eSIM compatible and carrier unlocked</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue font-bold">2.</span>
                      <span>eSIM can be installed before your trip but will activate upon arrival</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue font-bold">3.</span>
                      <span>Validity period starts when the eSIM connects to a local network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue font-bold">4.</span>
                      <span>Data speeds may be reduced after fair usage limits are reached</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coverage Tab */}
            <div
              className={`mt-12.5 ${activeTab === "tabTwo" ? "block" : "hidden"}`}
            >
              <h2 className="font-medium text-2xl text-dark mb-7">
                Coverage Areas:
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {plan.coverage.map((country, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-gray-1 rounded-lg"
                    >
                      <span className="text-green">
                        <svg
                          width="16"
                          height="16"
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
                      </span>
                      <span className="text-sm">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Installation Tab */}
            <div
              className={`mt-12.5 ${activeTab === "tabThree" ? "block" : "hidden"}`}
            >
              <h2 className="font-medium text-2xl text-dark mb-7">
                How to Install Your eSIM:
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-1">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mb-4">
                    <span className="text-blue font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-medium text-lg text-dark mb-2">Purchase & Receive</h3>
                  <p className="text-gray-600 text-sm">
                    After purchase, you will receive a QR code via email instantly. Keep it accessible on another device or print it.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-1">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mb-4">
                    <span className="text-blue font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-medium text-lg text-dark mb-2">Scan QR Code</h3>
                  <p className="text-gray-600 text-sm">
                    {"Go to Settings > Cellular > Add eSIM, then scan the QR code. Follow the on-screen instructions to complete setup."}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-1">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center mb-4">
                    <span className="text-blue font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-medium text-lg text-dark mb-2">Activate & Connect</h3>
                  <p className="text-gray-600 text-sm">
                    Once installed, enable the eSIM line for data. The plan activates when you connect to a supported network at your destination.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg p-6 shadow-1">
                <h3 className="font-medium text-lg text-dark mb-4">Compatible Devices:</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-dark mb-2">iPhone</h4>
                    <p className="text-sm text-gray-600">iPhone XS, XR and newer models</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark mb-2">Samsung</h4>
                    <p className="text-sm text-gray-600">Galaxy S20, Note 20, Fold series and newer</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-dark mb-2">Google Pixel</h4>
                    <p className="text-sm text-gray-600">Pixel 3 and newer models</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default ESIMDetails;
