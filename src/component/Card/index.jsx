import React from "react";
import "./style.css";
const ChainCard = () => {
  return (
    <div>
      <div className="card">
        <img className="profile" src="src/images/profile.png" />
        <h1 className="font-montserrat font-bold text-[17px] leading-[100%] tracking-[0.2em] uppercase">
          grameena
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "20%",
            textTransform: "uppercase",
          }}
        >
          vikas kendram
        </p>
      </div>
      <p
        style={{
          width: "395.9848937988281",
          height: "20.270263671875",
          top: " 129.5",
          left: "1px",
        }}
      >
        suppliers certificate
      </p>
    </div>
  );
};

export default ChainCard;
