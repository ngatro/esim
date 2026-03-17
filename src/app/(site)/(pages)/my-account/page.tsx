import MyAccount from "@/components/MyAccount";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Account | eSIM Store",
  description: "Manage your purchased eSIMs, view QR codes for installation, and update your account settings.",
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;
