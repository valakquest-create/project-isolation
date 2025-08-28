"use client";

import { useTransition } from "react";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";

export function ContactItem({
  contact,
  onDelete,
}: {
  contact: ContactItem;
  onDelete: () => Promise<void>;
}) {
  const [isDeleteTransition, startDeleteTransition] = useTransition();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{contact.value}</CardTitle>
        <CardDescription>{contact.type}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-5">
        <Button>Edit</Button>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isDeleteTransition}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
