import type { Image } from "sanity";
import { urlFor } from "@/lib/sanity.client";

export function resolveOpenGraphImage(image: any): { url: string; alt?: string } | undefined {
  if (!image) return undefined;
  
  const imageUrl = urlFor(image).width(1200).height(630).url();
  
  return imageUrl ? { url: imageUrl, alt: image.alt as string } : undefined;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
} 