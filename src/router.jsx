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
import ComingSoon from "./components/Page-404/ComingSoon";
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
import ResourceLibrary from "./component/Card/Resource";
import SupplierInformation from './pages/retailPages/SupplierInformation/Index';
import AnaliticalInsights from "./pages/brandPages/analytics-insights/AnalyticInsights";
import SocialPassport from "./pages/brandPages/social-passport/SocailPassport";
import ConsumerEngagemnt from "./pages/brandPages/consumer-engagement/ConsumerEngagemnt";
import NewsUpdates from "./pages/brandPages/new&updates/NewsUpdates";
import CommunityForum from "./pages/brandPages/communityForum/CommunityForum";
import ProductInformation from './pages/retailPages/ProductInformation/Index';
import CommunityEngagement from "./pages/retailPages/ConsumerEngagement/Index";
import AnalyticsInsights from './pages/retailPages/AnalyticsInsights/Index';
import NewsAndUpdates from './pages/retailPages/newsAndUpdates/Index';
import RetailResourceLibrary from './pages/retailPages/ResourceLibrary/Index';
import RetailCommunityForum from "./pages/retailPages/CommunityForum/Index";


const router = createBrowserRouter([
  {
    path: "*",
    element: <ComingSoon />,
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
      { path: "/card1", element: <StatesCard /> },
      { path: "/card2", element: <StatesCard2 /> },
      { path: "/card3", element: <StatesCard3 /> },
      { path: "/card4", element: <StatesCard4 /> },
      { path: "/card5", element: <StatesCard5 /> },
      { path: "/payment-section", element: <PaymentTablePage /> },
      { path: "/news", element: <SustainabilityCard /> },
      { path: "/resource", element: <ResourceLibrary /> },
    ],
  },
  //default routes----------------------------------------------------------------

  //***Brand routes----------------------------------------------------------------
  {
    path: "/brand",
    element: "",
    children: [
      { index: true, element: <ComingSoon /> },
      {
        path: "",
        element: <NewISidebarLayout basePath={"/brand"} />,
        children: [
          { path: "impact-claim", element: <ImpactClaims /> },
          { path: "supply-chain", element: <SupplyChain /> },
          { path: "analytics-insights", element: <AnaliticalInsights /> },
          { path: "social-passport", element: <SocialPassport /> },
          { path: "consumer-engagement", element: <ConsumerEngagemnt /> },
          { path: "news-updates", element: <NewsUpdates /> },
          { path: "resources-library", element: <ResourceLibrary /> },
          { path: "community-forum", element: <CommunityForum /> },
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
      { index: true, element: <ComingSoon /> },
      {
        path: "",
        element: <NewISidebarLayout basePath={"/retail"} />,
        children: [
          { path: "supplier-info", element: <SupplierInformation /> },
          { path: "product-info", element: <ProductInformation /> },
          { path: "consumer-engagement", element: <CommunityEngagement /> },
          { path: "analytics-insights", element: <AnalyticsInsights /> },
          { path: "news-updates", element: <NewsAndUpdates /> },
          { path: "resources-library", element: <RetailResourceLibrary /> },
          { path: "community-forum", element: <RetailCommunityForum /> },
        ],
      },
    ],
  },

  //^^^^Retail routes----------------------------------------------------------------
]);

export default router;
