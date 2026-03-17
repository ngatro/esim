import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, we need to wait
// for params to be available. This root layout just passes children through.
export default function RootLayout({ children }: Props) {
  return children;
}
