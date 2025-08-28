import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { getImagePath } from "@/shared/lib/get-image-path";
import { cn } from "@/shared/ui/utils";

export function Gallery({
  images,
  className,
  onChange,
}: {
  images: string[];
  className?: string;
  onChange: (images: string[]) => void;
}) {
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = images.indexOf(active.id as string);
      const newIndex = images.indexOf(over?.id as string);
      const newItems = arrayMove(images, oldIndex, newIndex);
      onChange(newItems);
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={images}>
        <div className={cn("grid grid-cols-5 gap-2", className)}>
          {images.map((image) => (
            <SortableImage key={image} image={image} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

function SortableImage({ image }: { image: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="w-full h-28 relative"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Image src={getImagePath(image)} alt={image} fill={true} />
    </div>
  );
}
