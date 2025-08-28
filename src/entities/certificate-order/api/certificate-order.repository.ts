import { cache } from "react";
import { dbClient } from "@/shared/lib/db";

class CertificateOrderRepository {
  createCertificateOrder = (
    command: CreateCertificateCommand,
  ): Promise<CertificateOrder> =>
    dbClient.certificateOrder.create({
      data: command,
    });

  getCertificateOrders = cache(
    (): Promise<CertificateOrder[]> =>
      dbClient.certificateOrder.findMany({
        orderBy: {
          createdAt: "desc",
        },
      }),
  );
}

export const certificateOrderRepository = new CertificateOrderRepository();
