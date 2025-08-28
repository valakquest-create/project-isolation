import { Filtering, OrderList, Sorting } from "@/features/orders";
import { AdminTitle } from "@/shared/ui/admin-title";

export default function OrdersPage() {
  return (
    <>
      <AdminTitle title="Orders" />
      <div className="flex gap-5 mb-5">
        <Sorting />
        <Filtering />
      </div>
      <OrderList />
    </>
  );
}
