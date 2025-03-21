import type { Identifier, XYCoord } from "dnd-core";
import type { FC } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { ItemTypes } from "../../../config/ItemTypes";
import { FaRegEdit } from "react-icons/fa";
import { GoGrabber } from "react-icons/go";

// const style = {
//   border: "1px dashed gray",
//   // padding: "0.5rem 1rem",
//   marginBottom: ".5rem",
//   backgroundColor: "white",
//   cursor: "move",
// };

export interface CardProps {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card: FC<CardProps> = ({ id, text, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

   
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    
    <div
      ref={ref}
      data-handler-id={handlerId}
      className={` opacity-[${opacity}] ${index ===0 && "rounded-tl-lg"} p-3 border-[1px]  border-[#D6DBDE] flex-1 shrink-0`}
    >
      <div className="flex justify-between gap-10">
        <div className="flex items-center">
        <GoGrabber className="cursor-move" size={20} />

        {/* <p className="text-sm text-[#114B53] font-semibold">{id}</p> */}
        </div>
        <FaRegEdit />
      </div>
      <p className="text-xs text-[#114B53] font-semibold mt-3 w-max ">{text}</p>
    </div>
  );
};

