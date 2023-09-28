import React from "react";
import RootProvider from "./common/Providers/RootProvider/RootProvider";
import JsonCompareView from "./features/compare/views/JsonCompareView/JsonCompareView";
import GeneralLayout from "./common/Layouts/GeneralLayout/GeneralLayout";
import { RouterProvider } from "react-router-dom";
import { router } from "./common/router/app.router";
import HomeView from "./features/home/views/HomeView/HomeView";

const App = () => {
  return (
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  );
};

export default App;
