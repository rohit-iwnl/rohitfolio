import type { QueryParams } from "@sanity/client";
import { client } from "./client";

export const token = process.env.SANITY_API_READ_TOKEN;

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  perspective = "published",
  stega = true,
  draftMode = false,
}: {
  query: string;
  params?: QueryParams;
  perspective?: "published" | "previewDrafts";
  stega?: boolean;
  draftMode?: boolean;
}): Promise<QueryResponse> {
  if (draftMode && !token) {
    throw new Error("The `SANITY_API_READ_TOKEN` environment variable is required.");
  }

  return client.fetch<QueryResponse>(query, params, {
    token: draftMode ? token : undefined,
    perspective: draftMode ? "previewDrafts" : perspective,
    useCdn: !draftMode,
  });
} 