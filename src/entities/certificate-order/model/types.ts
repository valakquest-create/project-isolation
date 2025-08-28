/* eslint-disable @typescript-eslint/no-unused-vars */

interface CertificateOrder {
  id: number;
  name: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateCertificateCommand {
  name: string;
  phone: string;
}

interface CreateCertificateRequest {
  name: string;
  phone: string;
  policy: true | undefined;
}
