import React from "react";
import RootProvider from "./common/Providers/RootProvider/RootProvider";
import JsonCompareView from "./features/compare/views/JsonCompareView/JsonCompareView";
import GeneralLayout from "./common/Layouts/GeneralLayout/GeneralLayout";

const App = () => {
  return (
    <RootProvider>
      <GeneralLayout>
        <JsonCompareView />
      </GeneralLayout>
    </RootProvider>
  );
};

export default App;
