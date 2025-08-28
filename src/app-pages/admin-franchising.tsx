import {
  CreateFranchisingForm,
  FranchisingLayout,
} from "@/features/franchising";
import { franchisingRepository } from "@/entities/franchising";
import { AdminTitle } from "@/shared/ui/admin-title";

export async function AdminFranchising() {
  const franchising = await franchisingRepository.readFranchising();

  return (
    <>
      <AdminTitle title="Редактирование страницы франшизы" />
      {franchising ? (
        <FranchisingLayout
          franchising={franchising}
          revalidatePagePath={["/franchising", "/admin/franchising"]}
        />
      ) : (
        <CreateFranchisingForm
          revalidatePagePath={["/franchising", "/admin/franchising"]}
        />
      )}
    </>
  );
}
