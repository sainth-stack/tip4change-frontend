import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from './layout/index';
import LandingPage from './pages/landing-page/index';
import Section1 from './pages/landing-page/sections/section1/index';
import Section2 from './pages/landing-page/sections/section2/index';
import NewISidebarLayout from "./layout/NewISidebarLayout";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import PaymentForm from "./pages/paymentSection";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <LandingPage /> },

    ],
  },
  {
    path: "/payment",
    element: <Layout />,
    children: [
      { path: "", element: <PaymentForm /> },

    ],
  },
  {
    path: "",
    element: <NewISidebarLayout />,
    children: [
      { path: "/project", element: <ProjectPage /> },
      { path: "/story", element: <StoryPage /> },

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
