"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { countries } from "@/data/esimData";
import Link from "next/link";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

const HeroCarousal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[450px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-5">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                eSIM
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Stay
                <br />
                Connected
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              Travel the World with Instant Data
            </h1>

            <p className="mb-6">
              Get connected in 190+ countries. No physical SIM needed. Activate
              your eSIM instantly and enjoy seamless connectivity.
            </p>

            {/* Country Search */}
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your destination..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(e.target.value.length > 0);
                  }}
                  onFocus={() => searchQuery.length > 0 && setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                  className="w-full rounded-md border border-gray-3 bg-gray-1 py-3 pl-5 pr-12 outline-none duration-200 focus:border-blue focus:shadow-input"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-dark hover:text-blue">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 17.5L13.875 13.875"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Search Results Dropdown */}
              {showResults && filteredCountries.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-md shadow-lg border border-gray-3 max-h-60 overflow-y-auto">
                  {filteredCountries.slice(0, 6).map((country) => (
                    <Link
                      key={country.id}
                      href={`/shop-with-sidebar?country=${country.code}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-1 transition-colors"
                    >
                      <span className="text-xl">{country.flag}</span>
                      <div>
                        <p className="font-medium text-dark">{country.name}</p>
                        <p className="text-custom-xs text-dark-4">
                          {country.plansCount} plans available
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/shop-with-sidebar"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-6"
            >
              Browse All Plans
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue/10 rounded-full"></div>
              <svg
                className="w-40 h-40 sm:w-48 sm:h-48 text-blue"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[450px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-5">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                25%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
                <br />
                Plans
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              Premium Data Plans for Travelers
            </h1>

            <p className="mb-6">
              Unlimited data, 5G speeds, and coverage in over 190 countries.
              Perfect for business and leisure travelers.
            </p>

            <Link
              href="/shop-with-sidebar"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue"
            >
              View Offers
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue/10 rounded-full"></div>
              <svg
                className="w-40 h-40 sm:w-48 sm:h-48 text-blue"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
