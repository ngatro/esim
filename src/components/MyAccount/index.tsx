"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import MyESIMs from "../MyESIMs";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <>
      <Breadcrumb title={"My Account"} pages={["my account"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            {/* User Dashboard Menu */}
            <div className="xl:max-w-[370px] w-full bg-white rounded-xl shadow-1">
              <div className="flex xl:flex-col">
                <div className="hidden lg:flex flex-wrap items-center gap-5 py-6 px-4 sm:px-7.5 xl:px-9 border-r xl:border-r-0 xl:border-b border-gray-3">
                  <div className="max-w-[64px] w-full h-16 rounded-full overflow-hidden">
                    <Image
                      src="/images/users/user-04.jpg"
                      alt="user"
                      width={64}
                      height={64}
                    />
                  </div>

                  <div>
                    <p className="font-medium text-dark mb-0.5">
                      John Traveler
                    </p>
                    <p className="text-custom-xs">Member Since Jan 2024</p>
                  </div>
                </div>

                <div className="p-4 sm:p-7.5 xl:p-9">
                  <div className="flex flex-wrap xl:flex-nowrap xl:flex-col gap-4">
                    <button
                      onClick={() => setActiveTab("dashboard")}
                      className={`flex items-center rounded-md gap-2.5 py-3 px-4.5 ease-out duration-200 hover:bg-blue hover:text-white ${
                        activeTab === "dashboard"
                          ? "text-white bg-blue"
                          : "text-dark-2 bg-gray-1"
                      }`}
                    >
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.91002 1.60413C5.08642 1.6041 4.39962 1.60408 3.85441 1.67738C3.27893 1.75475 2.75937 1.92495 2.34185 2.34246C1.92434 2.75998 1.75414 3.27954 1.67677 3.85502C1.60347 4.40023 1.60349 5.08701 1.60352 5.9106V6.00596C1.60349 6.82956 1.60347 7.51636 1.67677 8.06157C1.75414 8.63705 1.92434 9.15661 2.34185 9.57413C2.75937 9.99164 3.27893 10.1618 3.85441 10.2392C4.39962 10.3125 5.0864 10.3125 5.90999 10.3125H6.00535C6.82894 10.3125 7.51575 10.3125 8.06096 10.2392C8.63644 10.1618 9.156 9.99164 9.57352 9.57413C9.99103 9.15661 10.1612 8.63705 10.2386 8.06157C10.3119 7.51636 10.3119 6.82958 10.3119 6.00599V5.91063C10.3119 5.08704 10.3119 4.40023 10.2386 3.85502C10.1612 3.27954 9.99103 2.75998 9.57352 2.34246C9.156 1.92495 8.63644 1.75475 8.06096 1.67738C7.51575 1.60408 6.82897 1.6041 6.00538 1.60413H5.91002ZM3.31413 3.31474C3.43358 3.19528 3.61462 3.09699 4.03763 3.04012C4.48041 2.98059 5.07401 2.97913 5.95768 2.97913C6.84136 2.97913 7.43496 2.98059 7.87774 3.04012C8.30075 3.09699 8.48179 3.19528 8.60124 3.31474C8.7207 3.43419 8.81899 3.61523 8.87586 4.03824C8.93539 4.48102 8.93685 5.07462 8.93685 5.9583C8.93685 6.84197 8.93539 7.43557 8.87586 7.87835C8.81899 8.30136 8.7207 8.4824 8.60124 8.60186C8.48179 8.72131 8.30075 8.8196 7.87774 8.87647C7.43496 8.936 6.84136 8.93746 5.95768 8.93746C5.07401 8.93746 4.48041 8.936 4.03763 8.87647C3.61462 8.8196 3.43358 8.72131 3.31413 8.60186C3.19467 8.4824 3.09638 8.30136 3.03951 7.87835C2.97998 7.43557 2.97852 6.84197 2.97852 5.9583C2.97852 5.07462 2.97998 4.48102 3.03951 4.03824C3.09638 3.61523 3.19467 3.43419 3.31413 3.31474Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.9934 11.6875C15.1697 11.6874 14.483 11.6874 13.9377 11.7607C13.3623 11.8381 12.8427 12.0083 12.4252 12.4258C12.0077 12.8433 11.8375 13.3629 11.7601 13.9384C11.6868 14.4836 11.6868 15.1704 11.6869 15.994V16.0893C11.6868 16.9129 11.6868 17.5997 11.7601 18.1449C11.8375 18.7204 12.0077 19.2399 12.4252 19.6575C12.8427 20.075 13.3623 20.2452 13.9377 20.3225C14.4829 20.3958 15.1697 20.3958 15.9933 20.3958H16.0887C16.9123 20.3958 17.5991 20.3958 18.1443 20.3225C18.7198 20.2452 19.2393 20.075 19.6569 19.6575C20.0744 19.2399 20.2446 18.7204 20.3219 18.1449C20.3952 17.5997 20.3952 16.913 20.3952 16.0894V15.994C20.3952 15.1704 20.3952 14.4836 20.3219 13.9384C20.2446 13.3629 20.0744 12.8433 19.6569 12.4258C19.2393 12.0083 18.7198 11.8381 18.1443 11.7607C17.5991 11.6874 16.9123 11.6874 16.0887 11.6875H15.9934ZM13.3975 13.3981C13.5169 13.2786 13.698 13.1803 14.121 13.1235C14.5637 13.0639 15.1573 13.0625 16.041 13.0625C16.9247 13.0625 17.5183 13.0639 17.9611 13.1235C18.3841 13.1803 18.5651 13.2786 18.6846 13.3981C18.804 13.5175 18.9023 13.6986 18.9592 14.1216C19.0187 14.5644 19.0202 15.158 19.0202 16.0416C19.0202 16.9253 19.0187 17.5189 18.9592 17.9617C18.9023 18.3847 18.804 18.5657 18.6846 18.6852C18.5651 18.8046 18.3841 18.9029 17.9611 18.9598C17.5183 19.0193 16.9247 19.0208 16.041 19.0208C15.1573 19.0208 14.5637 19.0193 14.121 18.9598C13.698 18.9029 13.5169 18.8046 13.3975 18.6852C13.278 18.5657 13.1797 18.3847 13.1228 17.9617C13.0633 17.5189 13.0619 16.9253 13.0619 16.0416C13.0619 15.158 13.0633 14.5644 13.1228 14.1216C13.1797 13.6986 13.278 13.5175 13.3975 13.3981Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.91002 11.6875H6.00535C6.82896 11.6874 7.51574 11.6874 8.06096 11.7607C8.63644 11.8381 9.156 12.0083 9.57352 12.4258C9.99103 12.8433 10.1612 13.3629 10.2386 13.9384C10.3119 14.4836 10.3119 15.1703 10.3119 15.9939V16.0893C10.3119 16.9129 10.3119 17.5997 10.2386 18.1449C10.1612 18.7204 9.99103 19.2399 9.57352 19.6575C9.156 20.075 8.63644 20.2452 8.06096 20.3225C7.51575 20.3958 6.82899 20.3958 6.0054 20.3958H5.91002C5.08644 20.3958 4.39962 20.3958 3.85441 20.3225C3.27893 20.2452 2.75937 20.075 2.34185 19.6575C1.92434 19.2399 1.75414 18.7204 1.67677 18.1449C1.60347 17.5997 1.60349 16.9129 1.60352 16.0893V15.994C1.60349 15.1704 1.60347 14.4836 1.67677 13.9384C1.75414 13.3629 1.92434 12.8433 2.34185 12.4258C2.75937 12.0083 3.27893 11.8381 3.85441 11.7607C4.39963 11.6874 5.08641 11.6874 5.91002 11.6875ZM4.03763 13.1235C3.61462 13.1803 3.43358 13.2786 3.31413 13.3981C3.19467 13.5175 3.09638 13.6986 3.03951 14.1216C2.97998 14.5644 2.97852 15.158 2.97852 16.0416C2.97852 16.9253 2.97998 17.5189 3.03951 17.9617C3.09638 18.3847 3.19467 18.5657 3.31413 18.6852C3.43358 18.8046 3.61462 18.9029 4.03763 18.9598C4.48041 19.0193 5.07401 19.0208 5.95768 19.0208C6.84136 19.0208 7.43496 19.0193 7.87774 18.9598C8.30075 18.9029 8.48179 18.8046 8.60124 18.6852C8.7207 18.5657 8.81899 18.3847 8.87586 17.9617C8.93539 17.5189 8.93685 16.9253 8.93685 16.0416C8.93685 15.158 8.93539 14.5644 8.87586 14.1216C8.81899 13.6986 8.7207 13.5175 8.60124 13.3981C8.48179 13.2786 8.30075 13.1803 7.87774 13.1235C7.43496 13.0639 6.84136 13.0625 5.95768 13.0625C5.07401 13.0625 4.48041 13.0639 4.03763 13.1235Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.9934 1.60413C15.1698 1.6041 14.483 1.60408 13.9377 1.67738C13.3623 1.75475 12.8427 1.92495 12.4252 2.34246C12.0077 2.75998 11.8375 3.27954 11.7601 3.85502C11.6868 4.40024 11.6868 5.08702 11.6869 5.91063V6.00596C11.6868 6.82957 11.6868 7.51635 11.7601 8.06157C11.8375 8.63705 12.0077 9.15661 12.4252 9.57413C12.8427 9.99164 13.3623 10.1618 13.9377 10.2392C14.483 10.3125 15.1697 10.3125 15.9933 10.3125H16.0887C16.9123 10.3125 17.5991 10.3125 18.1443 10.2392C18.7198 10.1618 19.2393 9.99164 19.6569 9.57413C20.0744 9.15661 20.2446 8.63705 20.3219 8.06157C20.3952 7.51636 20.3952 6.82958 20.3952 6.00599V5.91063C20.3952 5.08704 20.3952 4.40023 20.3219 3.85502C20.2446 3.27954 20.0744 2.75998 19.6569 2.34246C19.2393 1.92495 18.7198 1.75475 18.1443 1.67738C17.5991 1.60408 16.9123 1.6041 16.0887 1.60413H15.9934ZM13.3975 3.31474C13.5169 3.19528 13.698 3.09699 14.121 3.04012C14.5637 2.98059 15.1573 2.97913 16.041 2.97913C16.9247 2.97913 17.5183 2.98059 17.9611 3.04012C18.3841 3.09699 18.5651 3.19528 18.6846 3.31474C18.804 3.43419 18.9023 3.61523 18.9592 4.03824C19.0187 4.48102 19.0202 5.07462 19.0202 5.9583C19.0202 6.84197 19.0187 7.43557 18.9592 7.87835C18.9023 8.30136 18.804 8.4824 18.6846 8.60186C18.5651 8.72131 18.3841 8.8196 17.9611 8.87647C17.5183 8.936 16.9247 8.93746 16.041 8.93746C15.1573 8.93746 14.5637 8.936 14.121 8.87647C13.698 8.8196 13.5169 8.72131 13.3975 8.60186C13.278 8.4824 13.1797 8.30136 13.1228 7.87835C13.0633 7.43557 13.0619 6.84197 13.0619 5.9583C13.0619 5.07462 13.0633 4.48102 13.1228 4.03824C13.1797 3.61523 13.278 3.43419 13.3975 3.31474Z"
                          fill=""
                        />
                      </svg>
                      Dashboard
                    </button>

                    <button
                      onClick={() => setActiveTab("esims")}
                      className={`flex items-center rounded-md gap-2.5 py-3 px-4.5 ease-out duration-200 hover:bg-blue hover:text-white ${
                        activeTab === "esims"
                          ? "text-white bg-blue"
                          : "text-dark-2 bg-gray-1"
                      }`}
                    >
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="4"
                          y="2"
                          width="14"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M8 6H14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 10H14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 14H11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      My eSIMs
                    </button>

                    <button
                      onClick={() => setActiveTab("account-details")}
                      className={`flex items-center rounded-md gap-2.5 py-3 px-4.5 ease-out duration-200 hover:bg-blue hover:text-white ${
                        activeTab === "account-details"
                          ? "text-white bg-blue"
                          : "text-dark-2 bg-gray-1"
                      }`}
                    >
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.9995 1.14581C8.59473 1.14581 6.64531 3.09524 6.64531 5.49998C6.64531 7.90472 8.59473 9.85415 10.9995 9.85415C13.4042 9.85415 15.3536 7.90472 15.3536 5.49998C15.3536 3.09524 13.4042 1.14581 10.9995 1.14581ZM8.02031 5.49998C8.02031 3.85463 9.35412 2.52081 10.9995 2.52081C12.6448 2.52081 13.9786 3.85463 13.9786 5.49998C13.9786 7.14533 12.6448 8.47915 10.9995 8.47915C9.35412 8.47915 8.02031 7.14533 8.02031 5.49998Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.9995 11.2291C8.87872 11.2291 6.92482 11.7112 5.47697 12.5256C4.05066 13.3279 2.97864 14.5439 2.97864 16.0416L2.97858 16.1351C2.97754 17.2001 2.97624 18.5368 4.14868 19.4916C4.7257 19.9614 5.53291 20.2956 6.6235 20.5163C7.71713 20.7377 9.14251 20.8541 10.9995 20.8541C12.8564 20.8541 14.2818 20.7377 15.3754 20.5163C16.466 20.2956 17.2732 19.9614 17.8503 19.4916C19.0227 18.5368 19.0214 17.2001 19.0204 16.1351L19.0203 16.0416C19.0203 14.5439 17.9483 13.3279 16.522 12.5256C15.0741 11.7112 13.1202 11.2291 10.9995 11.2291ZM4.35364 16.0416C4.35364 15.2612 4.92324 14.4147 6.15108 13.724C7.35737 13.0455 9.07014 12.6041 10.9995 12.6041C12.9288 12.6041 14.6416 13.0455 15.8479 13.724C17.0757 14.4147 17.6453 15.2612 17.6453 16.0416C17.6453 17.2405 17.6084 17.9153 16.982 18.4254C16.6424 18.702 16.0746 18.9719 15.1027 19.1686C14.1338 19.3648 12.8092 19.4791 10.9995 19.4791C9.18977 19.4791 7.86515 19.3648 6.89628 19.1686C5.92437 18.9719 5.35658 18.702 5.01693 18.4254C4.39059 17.9153 4.35364 17.2405 4.35364 16.0416Z"
                          fill=""
                        />
                      </svg>
                      Account Details
                    </button>

                    <button
                      onClick={() => setActiveTab("logout")}
                      className={`flex items-center rounded-md gap-2.5 py-3 px-4.5 ease-out duration-200 hover:bg-blue hover:text-white ${
                        activeTab === "logout"
                          ? "text-white bg-blue"
                          : "text-dark-2 bg-gray-1"
                      }`}
                    >
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7005 1.14581C12.4469 1.14579 11.4365 1.14578 10.6417 1.25263C9.81664 1.36356 9.12193 1.60088 8.57017 2.15263C8.08898 2.63382 7.84585 3.22514 7.71822 3.91997C7.59419 4.59515 7.57047 5.42142 7.56495 6.41282C7.56284 6.79251 7.86892 7.10202 8.24861 7.10414C8.6283 7.10625 8.93782 6.80016 8.93993 6.42047C8.94551 5.4181 8.97154 4.70761 9.07059 4.16838C9.16603 3.64881 9.31927 3.34807 9.54244 3.12491C9.79614 2.87121 10.1523 2.7058 10.825 2.61537C11.5174 2.52227 12.435 2.52081 13.7508 2.52081H14.6675C15.9833 2.52081 16.901 2.52227 17.5934 2.61537C18.266 2.7058 18.6222 2.87121 18.8759 3.12491C19.1296 3.37861 19.295 3.7348 19.3855 4.40742C19.4786 5.09983 19.48 6.01752 19.48 7.33331V14.6666C19.48 15.9824 19.4786 16.9001 19.3855 17.5925C19.295 18.2652 19.1296 18.6214 18.8759 18.8751C18.6222 19.1288 18.266 19.2942 17.5934 19.3846C16.901 19.4777 15.9833 19.4791 14.6675 19.4791H13.7508C12.435 19.4791 11.5174 19.4777 10.825 19.3846C10.1523 19.2942 9.79614 19.1288 9.54244 18.8751C9.31927 18.6519 9.16603 18.3512 9.07059 17.8316C8.97154 17.2924 8.94551 16.5819 8.93993 15.5795C8.93782 15.1998 8.6283 14.8937 8.24861 14.8958C7.86892 14.8979 7.56284 15.2075 7.56495 15.5871C7.57047 16.5785 7.59419 17.4048 7.71822 18.08C7.84585 18.7748 8.08898 19.3661 8.57017 19.8473C9.12193 20.3991 9.81664 20.6364 10.6417 20.7473C11.4365 20.8542 12.4469 20.8542 13.7006 20.8541H14.7178C15.9714 20.8542 16.9819 20.8542 17.7766 20.7473C18.6017 20.6364 19.2964 20.3991 19.8482 19.8473C20.4 19.2956 20.6373 18.6009 20.7482 17.7758C20.855 16.981 20.855 15.9706 20.855 14.7169V7.28302C20.855 6.02939 20.855 5.01893 20.7482 4.22421C20.6373 3.39911 20.4 2.70439 19.8482 2.15263C19.2964 1.60088 18.6017 1.36356 17.7766 1.25263C16.9819 1.14578 15.9714 1.14579 14.7178 1.14581H13.7005Z"
                          fill=""
                        />
                        <path
                          d="M13.7507 10.3125C14.1303 10.3125 14.4382 10.6203 14.4382 11C14.4382 11.3797 14.1303 11.6875 13.7507 11.6875H3.69247L5.48974 13.228C5.77802 13.4751 5.81141 13.9091 5.56431 14.1974C5.3172 14.4857 4.88318 14.5191 4.5949 14.272L1.38657 11.522C1.23418 11.3914 1.14648 11.2007 1.14648 11C1.14648 10.7993 1.23418 10.6086 1.38657 10.478L4.5949 7.72799C4.88318 7.48089 5.3172 7.51428 5.56431 7.80256C5.81141 8.09085 5.77802 8.52487 5.48974 8.77197L3.69247 10.3125H13.7507Z"
                          fill=""
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div
              className={`xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 py-9.5 px-4 sm:px-7.5 xl:px-10 ${
                activeTab === "dashboard" ? "block" : "hidden"
              }`}
            >
              <p className="text-dark">
                Hello John! Welcome to your eSIM dashboard.
              </p>

              <p className="text-custom-sm mt-4 mb-6">
                From your account dashboard you can view and manage your purchased eSIMs,
                access QR codes for installation, and manage your account details.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-1 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue mb-1">0</div>
                  <p className="text-sm text-gray-600">Active eSIMs</p>
                </div>
                <div className="bg-gray-1 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green mb-1">0</div>
                  <p className="text-sm text-gray-600">Total Purchased</p>
                </div>
                <div className="bg-gray-1 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-dark mb-1">190+</div>
                  <p className="text-sm text-gray-600">Countries Available</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h3 className="font-medium text-dark mb-4">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/shop-with-sidebar"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-dark transition-colors"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M1.66669 10H18.3334"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 1.66669C12.0844 3.94865 13.2691 6.91002 13.3334 10C13.2691 13.09 12.0844 16.0514 10 18.3334"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    Browse eSIM Plans
                  </a>
                  <button
                    onClick={() => setActiveTab("esims")}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-1 text-dark rounded-md hover:bg-gray-2 transition-colors"
                  >
                    View My eSIMs
                  </button>
                </div>
              </div>
            </div>

            {/* My eSIMs Tab */}
            <div
              className={`xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 ${
                activeTab === "esims" ? "block" : "hidden"
              }`}
            >
              <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
                <h3 className="font-medium text-xl text-dark">My eSIMs</h3>
              </div>
              <MyESIMs />
            </div>

            {/* Account Details Tab */}
            <div
              className={`xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 py-9.5 px-4 sm:px-7.5 xl:px-10 ${
                activeTab === "account-details" ? "block" : "hidden"
              }`}
            >
              <h3 className="font-medium text-xl text-dark mb-6">
                Account Details
              </h3>

              <form>
                <div className="flex flex-col lg:flex-row gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="firstName" className="block mb-2.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      defaultValue="John"
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="lastName" className="block mb-2.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      defaultValue="Traveler"
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue="john@example.com"
                    className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>

                <h4 className="font-medium text-dark mt-8 mb-4">
                  Change Password
                </h4>

                <div className="mb-5">
                  <label htmlFor="currentPassword" className="block mb-2.5">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    id="currentPassword"
                    className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>

                <div className="flex flex-col lg:flex-row gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="newPassword" className="block mb-2.5">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="confirmPassword" className="block mb-2.5">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark mt-4"
                >
                  Save Changes
                </button>
              </form>
            </div>

            {/* Logout Tab */}
            <div
              className={`xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 py-9.5 px-4 sm:px-7.5 xl:px-10 ${
                activeTab === "logout" ? "block" : "hidden"
              }`}
            >
              <div className="text-center">
                <h3 className="font-medium text-xl text-dark mb-4">
                  Are you sure you want to logout?
                </h3>
                <p className="text-gray-600 mb-6">
                  You will need to sign in again to access your eSIMs and account.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className="px-6 py-2 bg-gray-1 text-dark rounded-md hover:bg-gray-2 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-red text-white rounded-md hover:bg-red/90 transition-colors">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
