import React from "react";
import ESIMDetails from "@/components/ESIMDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eSIM Plan Details | eSIM Store",
  description: "View detailed information about this eSIM plan including data allowance, validity, coverage, and installation instructions.",
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ESIMDetails />
    </main>
  );
};

export default ShopDetailsPage;
