"use client";

import { useTransition } from "react";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/shared/ui/card";
import { deleteCityAction } from "../actions";

export function DeleteCityCard({
  id,
  setIsActive,
}: {
  id: number;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isDeleteTransition, startDeleteTransition] = useTransition();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Удалить город?</CardTitle>
        <CardDescription>
          Адреса, связанные с городом, также будут удалены!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-center">
          <Button
            onClick={() => setIsActive(false)}
            disabled={isDeleteTransition}
          >
            Отменить
          </Button>
          <Button
            onClick={() =>
              startDeleteTransition(async () => {
                await deleteCityAction({ id });
                setIsActive(false);
              })
            }
            variant="destructive"
            disabled={isDeleteTransition}
          >
            Удалить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
