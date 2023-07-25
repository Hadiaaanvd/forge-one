import React from "react";
const Home = React.lazy(() => import("./pages/home/home.page"));
const Contact = React.lazy(() => import("./pages/contact/contact.page"));
const Solutions = React.lazy(() => import("./pages/solutions/solutions.page"));
const Gun = React.lazy(() => import("./pages/detection/detection.page"));

export const finalRoutes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: <Home />,
  },
  {
    path: "/contact",
    name: "contact",
    exact: true,
    component: <Contact />,
  },
  {
    path: "/gun-detection",
    name: "gun-detection",
    exact: true,
    component: <Gun />,
  },
  {
    path: "/tailor-made-solutions",
    name: "tailor-made-solutions",
    exact: true,
    component: <Solutions />,
  },
];
