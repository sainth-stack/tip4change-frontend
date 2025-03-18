import React from "react";
import LandingPage from "./pages/landing-page";
import PaymentForm from "./pages/paymentSection";

import StatesCard from "./pages/landing-page/sections/section5/CardData";

const App = () => {
  return (
    <>
      <LandingPage />
      <PaymentForm />
      <StatesCard />
    </>
  );
};
export default App;
