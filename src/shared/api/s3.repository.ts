import { ListObjectsCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../lib/s3";

class S3Repository {
  getObjectList = () =>
    s3Client.send(
      new ListObjectsCommand({
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      }),
    );

  uploadObject = (filename: string, body: Uint8Array, contentType: string) =>
    s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME ?? "",
        Key: filename,
        Body: body,
        ContentType: contentType,
      }),
    );
}

export const s3Repository = new S3Repository();
