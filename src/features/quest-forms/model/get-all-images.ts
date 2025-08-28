"use server";

import { s3Repository } from "@/shared/api/s3.repository";

export async function getAllImages() {
  const response = await s3Repository.getObjectList();
  const contents = response.Contents;

  return contents ? contents.map((item) => item.Key) : [];
}
