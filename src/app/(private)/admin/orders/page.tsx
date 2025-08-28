// eslint-disable-next-line import/no-internal-modules
import OrdersPage from "@/app-pages/orders";

export const revalidate = 60;

export default function Orders() {
  return <OrdersPage />;
}
