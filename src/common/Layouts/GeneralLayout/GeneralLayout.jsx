import React from "react";

import Nav from "../../components/Nav/Nav";

const GeneralLayout = ({ children }) => {
  return (
    <main className="dark text-foreground bg-background h-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <Nav />
      <div className="h-16" />
      {children}
    </main>
  );
};

export default GeneralLayout;
