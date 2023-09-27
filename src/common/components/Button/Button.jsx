import React from "react";

import { Button } from "@nextui-org/react";

const Btn = ({ children, ...props }) => {
  return (
    <Button color="primary" variant="ghost" {...props}>
      {children}
    </Button>
  );
};

export default Btn;
