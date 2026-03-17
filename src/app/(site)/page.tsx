import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eSIM Store | Buy International eSIM Plans Online",
  description: "Get instant mobile data in 190+ countries with our eSIM plans. No physical SIM needed. Activate instantly and stay connected while traveling.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
