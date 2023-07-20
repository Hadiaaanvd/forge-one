import React from "react";
const Home = React.lazy(() => import("./pages/home/home.page"));
const Gun = React.lazy(() => import("./pages/detection/detection.page"));

export const finalRoutes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: <Home />,
  },
  {
    path: "/gun-detection",
    name: "gun-detection",
    exact: true,
    component: <Gun />,
  },
];
