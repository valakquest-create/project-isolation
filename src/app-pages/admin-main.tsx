import { CardFormLayout, CreateMainPageForm } from "@/features/main-page-form";
import { mainPageRepository } from "@/entities/main-page";
import { AdminTitle } from "@/shared/ui/admin-title";

export default async function AdminMain() {
  const mainPage = await mainPageRepository.getMainPage();
  const revalidatePagePath = ["/admin/main", "/"];

  return (
    <>
      <AdminTitle title="Admin main" />
      {!mainPage ? (
        <>
          <p>Data is not found</p>
          <CreateMainPageForm revalidatePagePath={revalidatePagePath} />
        </>
      ) : (
        <CardFormLayout
          revalidatePagePath={revalidatePagePath}
          pageData={mainPage}
        />
      )}
    </>
  );
}
