import React, { useRef, useState, forwardRef } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import ".././App.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/getting-started-with-framer-motion
 */
const DragDrop = () => {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const cells = [ref0, ref1, ref2, ref3];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const getActiveCellIndex = ({ point }) => {
    const cellIndex = cells.findIndex((cell) => {
      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight,
        parentElement
      } = cell.current;

      const leftEdge = parentElement.offsetLeft + offsetLeft;
      const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
      const topEdge = parentElement.offsetTop + offsetTop;
      const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;

      return (
        point.x >= leftEdge &&
        point.x <= rightEdge &&
        point.y >= topEdge &&
        point.y <= bottomEdge
      );
    });

    // cellIndex should be -1 if not dropped into a cell. If that's the case, just return the current activeIndex
    if (cellIndex < 0) return activeIndex;

    return cellIndex;
  };

  const dragStart = () => {
    setIsDragging(true);
  };

  const dragEnd = (_, info) => {
    setIsDragging(false);
    setActiveIndex(getActiveCellIndex(info));
  };

  return (
    <div className="container">
      <h1 className="padBottom">{`Current cell ${activeIndex + 1}`}</h1>
      <AnimateSharedLayout>
        <div className="grid">
          {cells.map((cell, i) => (
            <Cell
              index={i}
              key={`cell-${i}`}
              activeIndex={activeIndex}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              isDragging={isDragging}
              ref={cell}
            />
          ))}
        </div>
      </AnimateSharedLayout>
    </div>
  );
}

const cellVariant = {
  dragging: {
    border: "2px dashed #008E95"
  },
  inactive: {
    border: "2px solid #fff"
  }
};

const draggableVariant = {
  dragging: {
    scale: 0.5
  },
  inactive: {
    scale: 1
  }
};

export const Cell = forwardRef(
  ({ index, activeIndex, onDragStart, onDragEnd, isDragging }, ref) => {
    return (
      <motion.div
        className="cell center"
        ref={ref}
        id={index}
        variants={cellVariant}
        animate={isDragging ? "dragging" : "inactive"}
      >
        {`Cell ${index + 1}`}
        {activeIndex === index && (
          <motion.div
            className="draggable center"
            variants={draggableVariant}
            animate={isDragging ? "dragging" : "inactive"}
            dragElastic={1}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            layoutId="drag"
            drag
          >
            Draggable
          </motion.div>
        )}
      </motion.div>
    );
  }
);

export default DragDrop;