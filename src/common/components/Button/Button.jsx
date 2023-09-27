import React from "react";

import { Button } from "@nextui-org/react";

const Btn = ({ children, ...props }) => {
  return (
    <Button color="primary" variant="ghost" className="h-14" {...props}>
      {children}
    </Button>
  );
};

export default Btn;
