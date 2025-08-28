import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/shared/ui/card";

export function ListItem({ item }: { item: CertificateOrder }) {
  const { id, name, phone, createdAt } = item;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certificate order #{id}</CardTitle>
        <CardDescription>
          <p>Created at {createdAt.toLocaleString("ru")}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <b>Name: </b> {name}
        </p>
        <p>
          <b>Phone: </b> {phone}
        </p>
      </CardContent>
    </Card>
  );
}
