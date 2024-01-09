
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-08";

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any) {
  return builder.image(source);
}
