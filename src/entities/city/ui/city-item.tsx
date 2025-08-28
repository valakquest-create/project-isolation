import Link from "next/link";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";

export function CityItem({
  id,
  name,
  map,
  children,
}: {
  id: number;
  name: string;
  map: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-96">
          {map ? (
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={map}
            ></iframe>
          ) : (
            <div className="w-full h-full bg-slate-400"></div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-5">
          <Link href={`/admin/cities/${id}`}>
            <Button>Редактировать</Button>
          </Link>
          {children}
        </div>
      </CardFooter>
    </Card>
  );
}
