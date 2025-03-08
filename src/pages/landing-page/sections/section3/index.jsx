import React from "react";
import "./style.css";
import ChainCard from "../../../../component/Card";

const index = () => {
  return (
    <>
      <div className="main-chain">
        <h1 className="chain">Supply Chain Transparency</h1>
        <p className="believe">
          We believe in transparency and accountability throughout our supply
          chain.
          <br /> Meet the farmers and suppliers who work with us to produce{" "}
          <br />
          our sustainable cotton T-shirts.
        </p>
        <div
          style={{
            display: "flex",
            gap: "30px",
            width: "100%",
            marginTop: "40px",
          }}
        >
          <ChainCard />
          <ChainCard />
          <ChainCard />
        </div>
      </div>
      ;
    </>
  );
};

export default index;
