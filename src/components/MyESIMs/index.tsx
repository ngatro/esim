"use client";
import React, { useEffect, useState } from "react";
import { getCountryFlag } from "@/data/esimData";

interface PurchasedESIM {
  id: string;
  purchaseId: string;
  name: string;
  country: string;
  countryCode: string;
  data: string;
  validity: string;
  price: number;
  purchaseDate: string;
  status: "active" | "expired" | "pending";
  email: string;
  qrCode: string;
}

const MyESIMs = () => {
  const [esims, setEsims] = useState<PurchasedESIM[]>([]);
  const [selectedESIM, setSelectedESIM] = useState<PurchasedESIM | null>(null);

  useEffect(() => {
    const purchasedESIMs = JSON.parse(
      localStorage.getItem("purchasedESIMs") || "[]"
    );
    setEsims(purchasedESIMs);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green/10 text-green";
      case "expired":
        return "bg-red/10 text-red";
      case "pending":
        return "bg-yellow-500/10 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (esims.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="2"
              width="16"
              height="20"
              rx="2"
              stroke="#9CA3AF"
              strokeWidth="1.5"
            />
            <path
              d="M8 6H16"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 10H16"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 14H12"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3 className="font-medium text-lg text-dark mb-2">No eSIMs Yet</h3>
        <p className="text-gray-500 mb-6">
          {"You haven't purchased any eSIM plans yet."}
        </p>
        <a
          href="/shop-with-sidebar"
          className="inline-flex font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
        >
          Browse eSIM Plans
        </a>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="hidden md:flex items-center justify-between py-4.5 px-7.5 border-b border-gray-3">
        <div className="min-w-[120px]">
          <p className="text-custom-sm font-medium text-dark">Order ID</p>
        </div>
        <div className="min-w-[180px]">
          <p className="text-custom-sm font-medium text-dark">Plan</p>
        </div>
        <div className="min-w-[100px]">
          <p className="text-custom-sm font-medium text-dark">Data</p>
        </div>
        <div className="min-w-[120px]">
          <p className="text-custom-sm font-medium text-dark">Purchase Date</p>
        </div>
        <div className="min-w-[100px]">
          <p className="text-custom-sm font-medium text-dark">Status</p>
        </div>
        <div className="min-w-[100px]">
          <p className="text-custom-sm font-medium text-dark">Action</p>
        </div>
      </div>

      {/* eSIM List - Desktop */}
      <div className="hidden md:block">
        {esims.map((esim, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4.5 px-7.5 border-b border-gray-3 hover:bg-gray-1 transition-colors"
          >
            <div className="min-w-[120px]">
              <p className="text-custom-sm text-dark font-medium">
                {esim.purchaseId}
              </p>
            </div>
            <div className="min-w-[180px] flex items-center gap-2">
              <span className="text-2xl">{getCountryFlag(esim.countryCode)}</span>
              <div>
                <p className="text-custom-sm text-dark">{esim.country}</p>
                <p className="text-xs text-gray-500">{esim.validity}</p>
              </div>
            </div>
            <div className="min-w-[100px]">
              <p className="text-custom-sm text-dark">{esim.data}</p>
            </div>
            <div className="min-w-[120px]">
              <p className="text-custom-sm text-dark">
                {formatDate(esim.purchaseDate)}
              </p>
            </div>
            <div className="min-w-[100px]">
              <span
                className={`inline-flex px-2.5 py-1 rounded text-xs font-medium capitalize ${getStatusColor(
                  esim.status
                )}`}
              >
                {esim.status}
              </span>
            </div>
            <div className="min-w-[100px]">
              <button
                onClick={() => setSelectedESIM(esim)}
                className="text-blue hover:underline text-custom-sm font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* eSIM List - Mobile */}
      <div className="md:hidden space-y-4 p-4">
        {esims.map((esim, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{getCountryFlag(esim.countryCode)}</span>
                <div>
                  <p className="font-medium text-dark">{esim.country}</p>
                  <p className="text-xs text-gray-500">{esim.purchaseId}</p>
                </div>
              </div>
              <span
                className={`inline-flex px-2.5 py-1 rounded text-xs font-medium capitalize ${getStatusColor(
                  esim.status
                )}`}
              >
                {esim.status}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <span>{esim.data}</span>
              <span>{esim.validity}</span>
              <span>{formatDate(esim.purchaseDate)}</span>
            </div>

            <button
              onClick={() => setSelectedESIM(esim)}
              className="w-full py-2 text-center text-blue font-medium border border-blue rounded-md hover:bg-blue hover:text-white transition-colors"
            >
              View Details & QR Code
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedESIM && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-xl text-dark">eSIM Details</h3>
                <button
                  onClick={() => setSelectedESIM(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="#64748B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Country Info */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-2">
                  {getCountryFlag(selectedESIM.countryCode)}
                </div>
                <h4 className="font-medium text-lg text-dark">
                  {selectedESIM.country}
                </h4>
                <p className="text-sm text-gray-500">{selectedESIM.name}</p>
              </div>

              {/* QR Code */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Scan this QR code to install your eSIM
                </p>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <img
                    src={selectedESIM.qrCode}
                    alt="eSIM QR Code"
                    className="w-48 h-48"
                  />
                </div>
              </div>

              {/* Plan Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Order ID</span>
                  <span className="font-medium text-dark">
                    {selectedESIM.purchaseId}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Data</span>
                  <span className="font-medium text-dark">
                    {selectedESIM.data}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Validity</span>
                  <span className="font-medium text-dark">
                    {selectedESIM.validity}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Purchase Date</span>
                  <span className="font-medium text-dark">
                    {formatDate(selectedESIM.purchaseDate)}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Status</span>
                  <span
                    className={`inline-flex px-2.5 py-1 rounded text-xs font-medium capitalize ${getStatusColor(
                      selectedESIM.status
                    )}`}
                  >
                    {selectedESIM.status}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Amount Paid</span>
                  <span className="font-medium text-dark">
                    ${selectedESIM.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedESIM(null)}
                  className="flex-1 py-3 text-center font-medium text-dark bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 py-3 text-center font-medium text-white bg-blue rounded-md hover:bg-blue-dark transition-colors">
                  Download QR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyESIMs;
