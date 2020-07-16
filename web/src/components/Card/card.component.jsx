import React from "react";
import { useDrag } from "react-dnd";
import { deck } from "../../assets";

export function Card({ path, dragging }) {

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", path: path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if(dragging) {
      dragging(isDragging)
  }

  return (
    <div
      className={`card ${isDragging ? "is-dragging-card" : ""}`}
      ref={dragRef}
    >
      <img src={deck[path]} alt="" />
    </div>
  );
}
