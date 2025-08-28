import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";

export function PageCard({
  data,
  changeState,
}: {
  data: MainPage;
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Main page</CardTitle>
        <CardDescription>Content of main page</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data.about}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => changeState((s) => !s)}>Edit</Button>
      </CardFooter>
    </Card>
  );
}
