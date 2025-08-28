"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Gallery } from "./gallery";
import { ImageSelector } from "./image-selector";

export function ImageSelectorLayout({
  images,
  changeImages,
}: {
  images: string[];
  changeImages: (images: string) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(images);

  const handleChangeImage = (images: string[]) => {
    setSelected(images);
    changeImages(images.join(";"));
  };

  return (
    <div className="flex flex-col gap-5">
      <ImageSelector
        initial={selected}
        isActive={isActive}
        setIsActive={setIsActive}
        changeImages={handleChangeImage}
      />
      <Gallery images={selected} onChange={handleChangeImage} />
      <Button className="w-fit" onClick={() => setIsActive(true)} type="button">
        Выбрать другие
      </Button>
    </div>
  );
}
