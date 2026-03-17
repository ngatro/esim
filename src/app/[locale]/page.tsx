import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eSIM Store | Global Connectivity",
  description: "Discover premium eSIM plans for worldwide connectivity",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
