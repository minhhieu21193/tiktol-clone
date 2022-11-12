import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "xr4f4uya",
  dataset: "production",
  apiVersion: "2022-11-12",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
