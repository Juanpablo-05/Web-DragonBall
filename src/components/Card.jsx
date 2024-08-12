import React from "react";
import { ApiContext } from "../context/apiContext";
import { useContext } from "react";

function Card() {
  const { items } = useContext(ApiContext);
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="card-container">
          <div className="img-con">
            <img src={item.image} alt="dragon ball img" />
          </div>

          <div className="description-contain">
            
            <div className="name-container">
              <h2>{item.name}</h2>
              <div>
                <span className="des-card">{item.gender}</span>-
                <span className="des-card">{item.race}</span>
              </div>
            </div>

            <div className="grup-container">
              <span className="title-card">Ki:</span>
              <span className="des-card">{item.ki}</span>
            </div>

            <div className="grup-container">
              <span className="title-card">max-power:</span>
              <span className="des-card">{item.maxKi}</span>
            </div>

            <div className="grup-container">
              <span className="title-card">affiliation:</span>
              <span className="des-card">{item.affiliation}</span>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
