"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImagePath } from "@/shared/lib/get-image-path";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";
import { getAllImages } from "../model";

export function ImageSelector({
  initial,
  isActive,
  setIsActive,
  changeImages,
}: {
  initial: string[];
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  changeImages: (images: string[]) => void;
}) {
  const [images, setImages] = useState<(string | undefined)[]>([]);
  const [selected, setSelected] = useState(initial);

  useEffect(() => {
    getAllImages().then(setImages);
  }, []);

  const handleClick = (image: string) => {
    if (selected.includes(image)) {
      setSelected(selected.filter((item) => item !== image));
    } else {
      setSelected([...selected, image]);
    }
  };

  const reset = () => {
    setIsActive(false);
    setSelected(initial);
  };

  const submit = () => {
    changeImages(selected);
    setIsActive(false);
  };

  return (
    <div
      className={cn(
        "hidden fixed top-0 left-0 z-10 w-[100dvw] h-[100dvh] bg-black/75",
        isActive && "flex justify-center items-center",
      )}
    >
      <Card className="w-2/3">
        <CardHeader>
          <CardTitle>Выберите изображения</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-scroll h-[420px] mb-5">
          <div className="grid grid-cols-5 gap-2 h-fit">
            {images.length
              ? images.map((image) => {
                  const isSelected = selected.includes(image!);

                  return (
                    image &&
                    !image.includes("-mobile") && (
                      <div
                        className={cn(
                          "w-full h-28 relative cursor-pointer",
                          isSelected && "border-4 border-green-600",
                        )}
                        key={image}
                        onClick={() => handleClick(image)}
                      >
                        <Image
                          src={getImagePath(image)}
                          alt={image}
                          fill={true}
                          title={image}
                        />
                      </div>
                    )
                  );
                })
              : "Изображений не найдено"}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-5">
            <Button type="button" onClick={() => submit()}>
              Подтвердить
            </Button>
            <Button type="button" onClick={() => reset()} variant="destructive">
              Отменить
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
