export type ESIMPlan = {
  id: number;
  title: string;
  country: string;
  countryCode: string;
  region: string;
  data: string;
  validity: string;
  price: number;
  discountedPrice: number;
  reviews: number;
  coverage: string[];
  features: string[];
  provider: string;
  networkType: string;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
};

export type PurchasedESIM = {
  orderId: string;
  planId: number;
  planTitle: string;
  country: string;
  data: string;
  validity: string;
  purchaseDate: string;
  expiryDate: string;
  status: "active" | "expired" | "pending";
  dataUsed: string;
  dataRemaining: string;
  qrCode: string;
  iccid: string;
};

export type Country = {
  id: number;
  name: string;
  code: string;
  region: string;
  flag: string;
  plansCount: number;
};
