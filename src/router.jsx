import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/index";
import LandingPage from "./pages/landing-page/index";
import Section1 from "./pages/landing-page/sections/section1/index";
import Section2 from "./pages/landing-page/sections/section2/index";
import NewISidebarLayout from "./layout/NewISidebarLayout";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import PaymentForm from "./pages/paymentSection";
import DoughnutChart from "./pages/progressTracker/index";
import NotFound from "./components/Page-404/NotFoundPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PaymentTablePage from "./pages/PaymentTablePage/PaymentTablePage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <LandingPage /> }],
  },
  // {
  //   path: "/payment",
  //   element: <Layout />,
  //   children: [{ path: "", element: <PaymentForm /> }],
  // },

  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/payments", element: <PaymentForm /> }],
  },
  {
    path: "",
    element: <NewISidebarLayout />,
    children: [
      { path: "/project", element: <ProjectPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/story", element: <StoryPage /> },
      { path: "/progress-tracking", element: <DoughnutChart /> },
      { path: "/payments", element: <PaymentForm /> },
      { path: "/payment-section", element: <PaymentTablePage /> },
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
