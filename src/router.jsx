import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from './layout/index';
import LandingPage from './pages/landing-page/index';
import Section1 from './pages/landing-page/sections/section1/index';
import Section2 from './pages/landing-page/sections/section2/index';
import NewISidebarLayout from "./layout/NewISidebarLayout";
import StoryPage from "./pages/StoryPage/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <LandingPage /> },

    ],
  },
  {
    path: "projects",
    element: <NewISidebarLayout />,
    children: [
      { path: "", element: <StoryPage /> },
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <NewISidebarLayout />,
  //   children: [
  //     { path: "", element: <StoryPage /> },
  //   ],
  // },
]);

export default router;
