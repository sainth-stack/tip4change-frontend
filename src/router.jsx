import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/index";
import LandingPage from "./pages/landing-page/index";
import Section1 from "./pages/landing-page/sections/section1/index";
import Section2 from "./pages/landing-page/sections/section2/index";
import NewISidebarLayout from "./layout/NewISidebarLayout";
import ProjectPage from "./pages/User/ProjectPage/ProjectPage";
import StoryPage from "./pages/User/StoryPage/StoryPage";
import PaymentForm from "./pages/User/paymentSection";
import DoughnutChart from "./pages/User/progressTracker/index";
import NotFound from "./components/Page-404/NotFoundPage";
import ProfilePage from "./pages/User/ProfilePage/ProfilePage";
import PaymentTablePage from "./pages/User/PaymentTablePage/PaymentTablePage";
import ImpactClaims from "./pages/brandPages/ImpactSection/ImpactClaims";
import SupplyChain from "./pages/brandPages/SupplyChainSection/SupplyChain";
import StatesCard from "./pages/landing-page/sections/section5/CardData";
import StatesCard3 from "./pages/landing-page/sections/section5/CardData3";
import StatesCard4 from "./pages/landing-page/sections/section5/CardData4";
import StatesCard5 from "./pages/landing-page/sections/section5/CardData5";
import StatesCard2 from "./pages/landing-page/sections/section5/CardData2";
import SustainabilityCard from "./component/Card/News";

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

  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/payments", element: <PaymentForm /> }],
  },
  {
    path: "/",
    element: <NewISidebarLayout basePath={"/"} />,
    children: [
      { path: "/project", element: <ProjectPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/story", element: <StoryPage /> },
      { path: "/progress-tracking", element: <DoughnutChart /> },
      { path: "/payments", element: <PaymentForm /> },
      { path: "/card1", element: <StatesCard /> },
      { path: "/card2", element: <StatesCard2 /> },
      { path: "/card3", element: <StatesCard3 /> },
      { path: "/card4", element: <StatesCard4 /> },
      { path: "/card5", element: <StatesCard5 /> },
      { path: "/payment-section", element: <PaymentTablePage /> },
      { path: "/news", element: <SustainabilityCard /> },
    ],
  },
  {
    path: "/brand",
    element: "",
    children: [
      { index: true, element: <NotFound /> },
      {
        path: "",
        element: <NewISidebarLayout basePath={"/brand"} />,
        children: [
          { path: "impact-claim", element: <ImpactClaims /> },
          { path: "supply-chain", element: <SupplyChain /> },
        ],
      },
    ],
  },
]);

export default router;
