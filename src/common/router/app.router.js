import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/HomeView/HomeView";
import JsonCompareView from "../../features/compare/views/JsonCompareView/JsonCompareView";
import GeneralLayout from "../Layouts/GeneralLayout/GeneralLayout";
import VCard from "../components/VCard/VCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: () =>
      GeneralLayout({
        children: HomeView(),
      }),
  },
  {
    path: "/compare",
    Component: () => GeneralLayout({ children: JsonCompareView() }),
  },
  {
    path: "/vcard",
    Component: () => VCard(),
  },
]);
