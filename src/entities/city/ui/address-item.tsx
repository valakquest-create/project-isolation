import { Card, CardHeader, CardTitle, CardFooter } from "@/shared/ui/card";

export function AddressItem({
  place,
  children,
}: {
  place: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{place}</CardTitle>
      </CardHeader>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
}
