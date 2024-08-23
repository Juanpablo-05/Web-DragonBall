import React from "react";
import { useContext, useState } from "react";
import { ApiContext } from "../context/apiContext";

function Card() {
  const { items, dataFilter } = useContext(ApiContext)
  const [visibleIndex, setVisibleIndex] = useState(null)
  //funcion para hacer visible las informacion
  const handleVisible = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index); // Alternar visibilidad
  };


  const displayItems = dataFilter.length > 0 ? dataFilter : items;

  return (
    <>
      {displayItems.map((item, index) => (
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

            <div className={visibleIndex === index ? 'des-info open' : 'des-info'} >
              <h3>Descripcion</h3>
              <div className="info">
                {item.description}
              </div>
            </div>

            <button className='btn-more'
              onClick={()=>{
                handleVisible(index)
              }}>
              info
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
