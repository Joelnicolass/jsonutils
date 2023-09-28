import React from "react";

import { motion } from "framer-motion";

const CardGrid = ({
  size = 1,
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
  return (
    <motion.div
      initial={{ y: animation.y, opacity: animation.opacity }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: animation.duration, delay: animation.delay }}
      className={`rounded-xl border-${borderSize}
      col-span-${size}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default CardGrid;
