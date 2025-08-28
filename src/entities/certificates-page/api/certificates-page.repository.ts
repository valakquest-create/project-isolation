import { dbClient } from "@/shared/lib/db";

class CertificatesPageRepository {
  createCertificatesPage = (
    command: CreateCertificatesPageCommand,
  ): Promise<CertificatesPage> =>
    dbClient.certificatesPage.create({
      data: command,
    });
}

export const certificatesPageRepository = new CertificatesPageRepository();
