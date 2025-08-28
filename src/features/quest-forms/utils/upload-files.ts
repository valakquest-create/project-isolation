import { s3Repository } from "@/shared/api/s3.repository";

export async function uploadFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  try {
    await s3Repository.uploadObject(file.name, buffer, file.type);
  } catch (err) {
    console.log("Upload error: ", err);
  }
}

export async function uploadFiles(files: File[], cb: (index: number) => void) {
  let index = 0;

  for (const file of files) {
    await uploadFile(file).then(() => cb(index));
    index++;
  }
}
