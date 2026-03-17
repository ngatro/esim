import React from "react";
import Link from "next/link";
import { esimPlans } from "@/data/esimData";
import ESIMPlanItem from "@/components/Common/ESIMPlanItem";

const NewArrival = () => {
  return (
    <section className="overflow-hidden pt-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- section title --> */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
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
              Popular Plans
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              Featured eSIM Plans
            </h2>
          </div>

          <Link
            href="/shop-with-sidebar"
            className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
          {/* <!-- eSIM Plan items --> */}
          {esimPlans.map((plan, key) => (
            <ESIMPlanItem item={plan} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
