// "use client";

// import { useFormContext, useWatch } from "react-hook-form";
// import "@uploadthing/react/styles.css";
// import { UploadButton } from "@/lib/uploadthing";

// import { X, GripVertical } from "lucide-react";
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   useSensor,
//   useSensors,
//   DragEndEvent,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   useSortable,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { createProductSchema } from "@/lib/validators";
// import { z } from "zod";
// import Image from "next/image";

// type Side = "left" | "right";

// function SortableImage({
//   url,
//   index,
//   onRemove,
// }: {
//   url: string;
//   index: number;
//   onRemove: () => void;
// }) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({ id: url });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.5 : 1,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className="relative aspect-square group bg-gray-100 rounded"
//     >
//       <Image
//         src={url}
//         alt={`Frame ${index}`}
//         width={50}
//         height={50}
//         className="object-cover rounded"
//       />

//       <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
//         {index}
//       </span>

//       <button
//         type="button"
//         className="absolute top-2 right-2 bg-white p-1 rounded opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing transition-opacity"
//         {...attributes}
//         {...listeners}
//       >
//         <GripVertical size={16} className="text-gray-600" />
//       </button>

//       <button
//         type="button"
//         onClick={onRemove}
//         className="absolute bottom-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
//       >
//         <X size={16} />
//       </button>
//     </div>
//   );
// }

// export function Spin360Upload() {
//   const { setValue, control } =
//     useFormContext<z.infer<typeof createProductSchema>>();

//   const leftImages =
//     useWatch({
//       control,
//       name: "showcaseImages.spin360.left",
//     }) || [];

//   const rightImages =
//     useWatch({
//       control,
//       name: "showcaseImages.spin360.right",
//     }) || [];

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   const handleUploadComplete = (side: Side, urls: string[]) => {
//     const currentImages = side === "left" ? leftImages : rightImages;
//     setValue(`showcaseImages.spin360.${side}`, [...currentImages, ...urls], {
//       shouldValidate: true,
//       shouldDirty: true,
//     });
//   };

//   const handleDragEnd = (side: Side) => (event: DragEndEvent) => {
//     const { active, over } = event;

//     if (!over || active.id === over.id) return;

//     const images = side === "left" ? leftImages : rightImages;
//     const oldIndex = images.indexOf(active.id as string);
//     const newIndex = images.indexOf(over.id as string);

//     const reordered = arrayMove(images, oldIndex, newIndex);
//     setValue(`showcaseImages.spin360.${side}`, reordered, {
//       shouldValidate: true,
//       shouldDirty: true,
//     });
//   };

//   const removeImage = (side: Side, index: number) => {
//     const images = side === "left" ? leftImages : rightImages;
//     const updated = images.filter((_, idx) => idx !== index);
//     setValue(`showcaseImages.spin360.${side}`, updated, {
//       shouldValidate: true,
//       shouldDirty: true,
//     });
//   };

//   return (
//     <div className="space-y-8 border p-6 rounded-lg">
//       <div>
//         <h3 className="font-semibold text-lg">360° Spin View (Optional)</h3>
//         <p className="text-sm text-muted-foreground mt-1">
//           Upload 8 images per side showing the garment rotating 360°. Drag to
//           reorder frames.
//         </p>
//       </div>

//       {/* LEFT SIDE */}
//       <div>
//         <div className="flex items-center justify-between mb-4">
//           <label className="text-sm font-medium">
//             Left Side - Model
//             <span className="ml-2 text-xs text-muted-foreground">
//               ({leftImages.length}/8)
//             </span>
//           </label>

//           <UploadButton
//             endpoint="imageUploader"
//             onClientUploadComplete={(res) => {
//               const urls = res.map((file) => file.url);
//               handleUploadComplete("left", urls);
//             }}
//             onUploadError={(error) => {
//               console.error("Upload error:", error);
//             }}
//           />
//         </div>

//         {leftImages.length > 0 && (
//           <DndContext
//             sensors={sensors}
//             collisionDetection={closestCenter}
//             onDragEnd={handleDragEnd("left")}
//           >
//             <SortableContext items={leftImages} strategy={rectSortingStrategy}>
//               <div className="grid grid-cols-8 gap-3">
//                 {leftImages.map((url, idx) => (
//                   <SortableImage
//                     key={url}
//                     url={url}
//                     index={idx}
//                     onRemove={() => removeImage("left", idx)}
//                   />
//                 ))}
//               </div>
//             </SortableContext>
//           </DndContext>
//         )}

//         {leftImages.length > 0 && leftImages.length !== 8 && (
//           <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
//             <span>⚠️</span> Need exactly 8 images (currently {leftImages.length}
//             )
//           </p>
//         )}

//         {leftImages.length === 8 && (
//           <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
//             <span>✓</span> All 8 frames uploaded
//           </p>
//         )}
//       </div>

//       {/* RIGHT SIDE */}
//       <div>
//         <div className="flex items-center justify-between mb-4">
//           <label className="text-sm font-medium">
//             Right Side - Model
//             <span className="ml-2 text-xs text-muted-foreground">
//               ({rightImages.length}/8)
//             </span>
//           </label>

//           <UploadButton
//             endpoint="imageUploader"
//             onClientUploadComplete={(res) => {
//               const urls = res.map((file) => file.url);
//               handleUploadComplete("right", urls);
//             }}
//             onUploadError={(error) => {
//               console.error("Upload error:", error);
//             }}
//           />
//         </div>

//         {rightImages.length > 0 && (
//           <DndContext
//             sensors={sensors}
//             collisionDetection={closestCenter}
//             onDragEnd={handleDragEnd("right")}
//           >
//             <SortableContext items={rightImages} strategy={rectSortingStrategy}>
//               <div className="grid grid-cols-8 gap-3">
//                 {rightImages.map((url, idx) => (
//                   <SortableImage
//                     key={url}
//                     url={url}
//                     index={idx}
//                     onRemove={() => removeImage("right", idx)}
//                   />
//                 ))}
//               </div>
//             </SortableContext>
//           </DndContext>
//         )}

//         {rightImages.length > 0 && rightImages.length !== 8 && (
//           <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
//             <span>⚠️</span> Need exactly 8 images (currently{" "}
//             {rightImages.length})
//           </p>
//         )}

//         {rightImages.length === 8 && (
//           <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
//             <span>✓</span> All 8 frames uploaded
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useFormContext, useWatch } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/lib/uploadthing";

import { X, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { createProductSchema } from "@/lib/validators";
import { z } from "zod";
import Image from "next/image";

type Side = "left" | "right";

function SortableImage({
  url,
  index,
  onRemove,
}: {
  url: string;
  index: number;
  onRemove: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative aspect-square group bg-gray-100 rounded"
    >
      <Image
        src={url}
        alt={`Frame ${index}`}
        width={50}
        height={50}
        className="object-cover rounded"
      />

      <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
        {index}
      </span>

      <button
        type="button"
        className="absolute top-2 right-2 bg-white p-1 rounded opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing transition-opacity"
        {...attributes}
        {...listeners}
      >
        <GripVertical size={16} className="text-gray-600" />
      </button>

      <button
        type="button"
        onClick={onRemove}
        className="absolute bottom-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
      >
        <X size={16} />
      </button>
    </div>
  );
}

export function Spin360Upload() {
  const { setValue, control } =
    useFormContext<z.infer<typeof createProductSchema>>();

  const leftImages =
    useWatch({
      control,
      name: "showcaseImages.spin360.left",
    }) || null;

  const rightImages =
    useWatch({
      control,
      name: "showcaseImages.spin360.right",
    }) || null;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleUploadComplete = (side: Side, urls: string[]) => {
    const currentImages = side === "left" ? leftImages : rightImages;
    const existingImages = currentImages === null ? [] : currentImages;
    setValue(`showcaseImages.spin360.${side}`, [...existingImages, ...urls], {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleDragEnd = (side: Side) => (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const images = side === "left" ? leftImages : rightImages;
    if (!images) return;

    const oldIndex = images.indexOf(active.id as string);
    const newIndex = images.indexOf(over.id as string);

    const reordered = arrayMove(images, oldIndex, newIndex);
    setValue(`showcaseImages.spin360.${side}`, reordered, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const removeImage = (side: Side, index: number) => {
    const images = side === "left" ? leftImages : rightImages;
    if (!images) return;

    const updated = images.filter((_, idx) => idx !== index);
    setValue(`showcaseImages.spin360.${side}`, updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="space-y-8 border p-6 rounded-lg">
      <div>
        <h3 className="font-semibold text-lg">360° Spin View (Optional)</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Upload 8 images per side showing the garment rotating 360°. Drag to
          reorder frames.
        </p>
      </div>

      {/* LEFT SIDE */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm font-medium">
            Left Side - Model
            <span className="ml-2 text-xs text-muted-foreground">
              ({leftImages?.length || 0}/8)
            </span>
          </label>

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const urls = res.map((file) => file.url);
              handleUploadComplete("left", urls);
            }}
            onUploadError={(error) => {
              console.error("Upload error:", error);
            }}
          />
        </div>

        {leftImages && leftImages.length > 0 && (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd("left")}
          >
            <SortableContext items={leftImages} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-8 gap-3">
                {leftImages.map((url, idx) => (
                  <SortableImage
                    key={url}
                    url={url}
                    index={idx}
                    onRemove={() => removeImage("left", idx)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}

        {leftImages && leftImages.length > 0 && leftImages.length !== 8 && (
          <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
            <span>⚠️</span> Need exactly 8 images (currently {leftImages.length}
            )
          </p>
        )}

        {leftImages && leftImages.length === 8 && (
          <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
            <span>✓</span> All 8 frames uploaded
          </p>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm font-medium">
            Right Side - Model
            <span className="ml-2 text-xs text-muted-foreground">
              ({rightImages?.length || 0}/8)
            </span>
          </label>

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const urls = res.map((file) => file.url);
              handleUploadComplete("right", urls);
            }}
            onUploadError={(error) => {
              console.error("Upload error:", error);
            }}
          />
        </div>

        {rightImages && rightImages.length > 0 && (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd("right")}
          >
            <SortableContext items={rightImages} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-8 gap-3">
                {rightImages.map((url, idx) => (
                  <SortableImage
                    key={url}
                    url={url}
                    index={idx}
                    onRemove={() => removeImage("right", idx)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}

        {rightImages && rightImages.length > 0 && rightImages.length !== 8 && (
          <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
            <span>⚠️</span> Need exactly 8 images (currently{" "}
            {rightImages.length})
          </p>
        )}

        {rightImages && rightImages.length === 8 && (
          <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
            <span>✓</span> All 8 frames uploaded
          </p>
        )}
      </div>
    </div>
  );
}
