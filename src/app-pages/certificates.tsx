import { CertificatesHeader } from "@/widgets/certificates-header";
import { ModalWithFormWrapper } from "@/widgets/modal-with-form";
import { PageSection } from "@/shared/ui/page-section";

export function CertificatePage() {
  return (
    <>
      <CertificatesHeader />
      <PageSection
        title="Думаете, как порадовать близких или коллег по работе?"
        description="Сертификат от Isolation - это оригинальный подарок в виде бурных эмоций
        и ярких впечатлений! Такой сюрприз точно не оставит ваших друзей
        равнодушными."
      />
      <ModalWithFormWrapper />
    </>
  );
}
