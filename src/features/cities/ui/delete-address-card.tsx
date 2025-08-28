"use client";

import { useTransition } from "react";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { deleteAddressAction } from "../actions";

export function DeleteAddressCard({
  id,
  cityId,
  setIsActive,
}: {
  id: number;
  cityId: number;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isDeleteTransition, startDeleteTransition] = useTransition();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Удалить адрес?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-center gap-5">
          <Button
            onClick={() => setIsActive(false)}
            disabled={isDeleteTransition}
          >
            Отменить
          </Button>
          <Button
            onClick={() =>
              startDeleteTransition(async () => {
                await deleteAddressAction({ id }, cityId);
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
