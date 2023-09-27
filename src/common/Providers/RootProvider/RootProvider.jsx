import React from "react";

import { NextUIProvider } from "@nextui-org/react";

const RootProvider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default RootProvider;
