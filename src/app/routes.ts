import { createBrowserRouter } from "react-router";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: Home }, // Fallback to Home for now
    ],
  },
]);
