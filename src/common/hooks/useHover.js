import React, { useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const onMouseOver = () => setHovered(true);
  const onMouseOut = () => setHovered(false);

  const attrs = {
    onMouseOver,
    onMouseOut,
  };

  return [hovered, attrs];
};

export default useHover;
