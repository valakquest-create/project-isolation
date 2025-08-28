import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const config: S3ClientConfig = {
  region: process.env.AWS_REGION,
  endpoint: process.env.NEXT_PUBLIC_AWS_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_SECRET_KEY ?? "",
  },
};

export const s3Client = new S3Client(config);
