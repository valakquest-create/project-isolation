import { certificateOrderRepository } from "@/entities/certificate-order";
import { ListItem } from "./list-item";

export async function CertificateOrdersList() {
  const orders = await certificateOrderRepository.getCertificateOrders();

  return (
    <div>
      {orders.length ? (
        <ul>
          {orders.map((order) => (
            <li className="mb-5" key={order.id}>
              <ListItem item={order} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Certificate orders list is empty yet</p>
      )}
    </div>
  );
}
