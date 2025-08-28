import { CreateCertificateForm } from "@/features/certificate-form";
import { AdminTitle } from "@/shared/ui/admin-title";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";

export function AdminCertificates() {
  return (
    <>
      <AdminTitle title="Certificates" />
      <Card>
        <CardHeader>
          <CardTitle>Create certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateCertificateForm />
        </CardContent>
      </Card>
    </>
  );
}
