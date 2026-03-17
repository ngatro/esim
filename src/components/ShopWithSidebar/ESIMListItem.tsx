"use client";
import React from "react";
import { ESIMPlan } from "@/types/esim";
import { addItemToCart } from "@/redux/features/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";

const ESIMListItem = ({ item }: { item: ESIMPlan }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        discountedPrice: item.discountedPrice,
        quantity: 1,
        imgs: item.imgs,
      })
    );
  };

  const discountPercent = Math.round(
    ((item.price - item.discountedPrice) / item.price) * 100
  );

  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-lg shadow-1 p-5">
      {/* Left - Icon/Visual */}
      <div className="sm:min-w-[200px] flex items-center justify-center bg-gray-1 rounded-lg p-6 relative">
        {/* Country Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-blue text-white text-custom-xs font-medium px-2.5 py-1 rounded-full">
            {item.country}
          </span>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex bg-red text-white text-custom-xs font-medium px-2 py-1 rounded">
              -{discountPercent}%
            </span>
          </div>
        )}

        <svg
          className="w-20 h-20 text-blue"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Right - Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="fill-[#FFA645]"
                width="14"
                height="14"
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
          <p className="text-custom-sm">({item.reviews} reviews)</p>
        </div>

        <h3 className="font-medium text-dark text-lg ease-out duration-200 hover:text-blue mb-3">
          <Link href={`/shop-details?id=${item.id}`}>{item.title}</Link>
        </h3>

        {/* Plan Details */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-gray-1 px-3 py-1.5 rounded-full text-custom-sm font-medium text-dark">
            <svg
              className="w-4 h-4 text-blue"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {item.data}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-gray-1 px-3 py-1.5 rounded-full text-custom-sm font-medium text-dark">
            <svg
              className="w-4 h-4 text-blue"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {item.validity}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-gray-1 px-3 py-1.5 rounded-full text-custom-sm font-medium text-dark">
            <svg
              className="w-4 h-4 text-blue"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.56 3.69C9.23 3.24 10.04 3 10.9 3C13.08 3 14.85 4.77 14.85 6.95C14.85 7.53 14.74 8.09 14.52 8.59"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.97 10.42C3.97 14.09 6.95 17.06 10.62 17.06L9.54 15.33"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.03 13.58C20.03 9.91 17.05 6.94 13.38 6.94L14.46 8.67"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15.44 20.31C14.77 20.76 13.96 21 13.1 21C10.92 21 9.15 19.23 9.15 17.05C9.15 16.47 9.26 15.91 9.48 15.41"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {item.networkType}
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 text-custom-sm text-dark-4"
            >
              <svg
                className="w-4 h-4 text-green"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                  fill="#22AD5C"
                />
                <path
                  d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                  fill="#22AD5C"
                />
              </svg>
              {feature}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium text-lg">
            <span className="text-dark text-xl">${item.discountedPrice}</span>
            <span className="text-dark-4 line-through">${item.price}</span>
          </span>

          <button
            onClick={() => handleAddToCart()}
            className="inline-flex font-medium text-custom-sm py-2.5 px-6 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESIMListItem;
