/* eslint-disable @typescript-eslint/no-unused-vars */

interface CertificatesPage {
  id: number;
  h1: string;
  content: string;
  images: string[];
}

interface CreateCertificatesPageCommand {
  h1: string;
  content: string;
  images: string[];
}

interface CreateCertificatesPageRequest {
  h1: string;
  content: string;
  images: File[];
}
