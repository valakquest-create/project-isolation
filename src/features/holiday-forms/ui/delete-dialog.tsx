"use client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/shared/ui/dialog";
import { deleteHoliday } from "../model";

export function DeleteDialog({ id }: { id: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Удалить</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Удалить праздник?</DialogTitle>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <div className="flex gap-5">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Отмена
              </Button>
            </DialogClose>
            <Button
              type="button"
              variant="destructive"
              onClick={() => deleteHoliday({ id })}
            >
              Удалить
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
