import React from "react";

import { motion } from "framer-motion";

const CardGrid = ({
  col = 1,
  row = 1,
  borderSize = 0,
  animation = {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
  },
  children,
  ...props
}) => {
  const getSizeCol = () => {
    const sizes = {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
    };
    return sizes[col] || sizes[1];
  };

  const getSizeRow = () => {
    const sizes = {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
    };
    return sizes[row] || sizes[1];
  };

  return (
    <motion.div
      initial={{ y: animation.y, opacity: animation.opacity }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: animation.duration, delay: animation.delay }}
      className={`rounded-xl border-${borderSize}
        ${getSizeCol()}
        ${getSizeRow()}
      
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default CardGrid;
