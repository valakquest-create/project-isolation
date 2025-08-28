import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";
import { Holiday } from "../model";

export function HolidayItem({
  holiday,
  children,
}: {
  holiday: Holiday;
  children?: Readonly<React.ReactNode>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{holiday.name}</CardTitle>
      </CardHeader>
      <CardContent>{format(holiday.date, "dd-MM-yyyy")}</CardContent>
      {children && <CardFooter>{children}</CardFooter>}
    </Card>
  );
}
