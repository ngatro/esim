import React from "react";
import ESIMCheckout from "@/components/ESIMCheckout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout | eSIM Store",
  description: "Complete your eSIM purchase securely. Instant delivery via email with QR code for easy installation.",
};

const CheckoutPage = () => {
  return (
    <main>
      <ESIMCheckout />
    </main>
  );
};

export default CheckoutPage;
