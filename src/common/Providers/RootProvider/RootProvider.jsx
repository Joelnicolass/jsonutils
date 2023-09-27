import React from "react";

import { NextUIProvider } from "@nextui-org/react";

const RootProvider = ({ children }) => {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background h-screen">
        {children}
      </main>
    </NextUIProvider>
  );
};

export default RootProvider;
