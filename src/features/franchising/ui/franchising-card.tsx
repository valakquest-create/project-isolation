import { Franchising } from "@/entities/franchising/";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";

export function FranchisingCard({
  franchising,
  changeState,
}: {
  franchising: Franchising;
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Франшиза</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <b>{franchising.title}</b>
        </p>
        <p>{franchising.description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => changeState(true)}>Редактировать</Button>
      </CardFooter>
    </Card>
  );
}
