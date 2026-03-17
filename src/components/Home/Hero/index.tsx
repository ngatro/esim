import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-6">
                  <div>
                    <h2 className="font-semibold text-dark text-xl mb-2">
                      <Link href="/shop-with-sidebar?region=Asia">
                        Asia eSIM Plans
                      </Link>
                    </h2>

                    <p className="text-custom-sm text-dark-4 mb-4">
                      Japan, Korea, Thailand & more
                    </p>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        Starting from
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-blue">
                          $7.99
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-24 h-24 bg-blue/10 rounded-full">
                    <svg
                      className="w-12 h-12 text-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 12H22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-6">
                  <div>
                    <h2 className="font-semibold text-dark text-xl mb-2">
                      <Link href="/shop-with-sidebar?region=Europe">
                        Europe eSIM Plans
                      </Link>
                    </h2>

                    <p className="text-custom-sm text-dark-4 mb-4">
                      37+ European countries
                    </p>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        Starting from
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-blue">
                          $17.99
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-24 h-24 bg-blue/10 rounded-full">
                    <svg
                      className="w-12 h-12 text-blue"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.56 3.69C9.23 3.24 10.04 3 10.9 3C13.08 3 14.85 4.77 14.85 6.95C14.85 7.53 14.74 8.09 14.52 8.59"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.97 10.42C3.97 14.09 6.95 17.06 10.62 17.06L9.54 15.33"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.03 13.58C20.03 9.91 17.05 6.94 13.38 6.94L14.46 8.67"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.44 20.31C14.77 20.76 13.96 21 13.1 21C10.92 21 9.15 19.23 9.15 17.05C9.15 16.47 9.26 15.91 9.48 15.41"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
