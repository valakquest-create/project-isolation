/* eslint-disable @typescript-eslint/no-explicit-any */
import { revalidateTag, unstable_cache } from "next/cache";

interface CacheWithTagsOptions {
  key: string | string[];
  tags: string[];
  revalidate?: number | false;
}

export function cacheWithTags<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  { key, tags, revalidate = false }: CacheWithTagsOptions,
): T {
  return unstable_cache(fn, Array.isArray(key) ? key : [key], {
    tags,
    revalidate,
  });
}

export function revalidateTags(...tags: string[]) {
  tags.forEach((tag) => revalidateTag(tag));
}
