// import React from "react";
import "../styles/card.sass";

const Card = ({ title, img, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <span className="card-img-container" > <img src={img} /> </span>
      {children}
    </div>
  );
};

export default Card;
