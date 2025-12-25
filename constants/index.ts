export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Heno";

export const APP_DESC =
  process.env.NEXT_PUBLIC_APP_DESC ||
  "A modern e-commerce store built with Nextjs";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || `http://localhost:3000`;

export const signInDefaultValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["Stripe", "Paystack"];

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "TOPS" as const,
  color: "",
  shopImage: "",
  showcaseImages: {
    spin360: {
      left: [],
      right: [],
    },
    regular: [],
  },
  description: "",
  detail: "",
  sizingInfo: null,
  price: 0,
  onSale: false,
  discountPercent: undefined,
  isFeatured: false,
  banner: null,
  sizeStock: [],
};

export const ALLOWED_SHIPPING_COUNTRIES = [
  "US",
  "CA",
  "NG",
  "ZA",
  "KE",
  "EG",
  "MA",
  "GH",
  "TN",
  "CI",
  "ET",
  "UG",
  "GB",
  "DE",
  "FR",
  "ES",
  "IT",
  "NL",
  "SE",
  "PL",
  "DK",
  "BE",
  "JP",
  "KR",
  "AU",
  "SG",
  "MY",
  "TH",
  "ID",
  "VN",
  "PH",
  "NZ",
] as const;

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(", ")
  : ["admin", "user"];

export const SENDER_EMAIL = process.env.SENDER_EMAIL || "Onboarding@resend.dev";
