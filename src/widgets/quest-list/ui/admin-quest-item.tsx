import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";

export function AdminQuestItem({
  quest,
}: {
  quest: Quest & { address: string };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{quest.name}</CardTitle>
        <CardDescription>{quest.address}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-80 rounded-xl overflow-hidden">
          <Image
            src={`https://storage.yandexcloud.net/project-isolation/${quest.photos[0]}`}
            alt={quest.name}
            fill={true}
            objectFit="cover"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/admin/quests/${quest.id}`}>
          <Button>Edit</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
