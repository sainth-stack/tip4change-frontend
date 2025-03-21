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
import AnaliticalInsights from "./pages/brandPages/analytics-insights/AnalyticInsights";
import SocialPassport from "./pages/brandPages/social-passport/SocailPassport";
import SupplierInformation from './pages/retailPages/SupplierInformation/Index';

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
  //default routes----------------------------------------------------------------
  {
    path: "/",
    element: <NewISidebarLayout basePath={"/"} />,
    children: [
      { path: "/project", element: <ProjectPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/story", element: <StoryPage /> },
      { path: "/progress-tracking", element: <DoughnutChart /> },
      { path: "/payments", element: <PaymentForm /> },
      { path: "/payment-section", element: <PaymentTablePage /> },
    ],
  },
  //default routes----------------------------------------------------------------

  //***Brand routes----------------------------------------------------------------
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
          { path: "analytics-insights", element: <AnaliticalInsights /> },
          { path: "social-passport", element: <SocialPassport /> },
        ],
      },
    ],
  },
  //***Brand routes----------------------------------------------------------------

  //^^^^Retail routes----------------------------------------------------------------

  {
    path: "/retail",
    element: "",
    children: [
      { index: true, element: <NotFound /> },
      {
        path: "",
        element: <NewISidebarLayout basePath={"/retail"} />,
        children: [
          { path: "supplier-info", element: <SupplierInformation /> },
          { path: "product-info", element: <SupplierInformation /> },


          
        ],
      },
    ],
  },

  //^^^^Retail routes----------------------------------------------------------------
]);

export default router;
