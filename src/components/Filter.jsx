import { useState, useContext } from "react";
import { ApiContext } from "../context/apiContext";

function Filter() {
  const { items, dataType, dataFilter, setDataFilter } = useContext(ApiContext);
  //funcion para filtrar los datos de personajes
  const filterData = (name) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (filteredItems.length > 0) {
      setDataFilter(filteredItems);
      console.log(dataFilter);
    } else {
      console.log("No se encontró el personaje...");
      setDataFilter([]);
    }
  };

  const handleFilterCharacter = (e) => {
    filterData(e.target.value);
  };
  //funcion para filtrar los datos de los planetas

  const filterPlanets = (name) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (filteredItems.length > 0) {
      setDataFilter(filteredItems);
      console.log(dataFilter);
    } else {
      console.log("No se encontró el planeta...");
      setDataFilter([]);
    }
  };

  const handleFilterPlanets = (e) =>{
    filterPlanets(e.target.value)
  }

  return (
    <div className="filter-container">
      {dataType == "characters" ? (
        <input
          type="text"
          onChange={handleFilterCharacter}
          placeholder="Filtrar por nombre"
        />
      ) : (
        <input
          type="text"
          onChange={handleFilterPlanets}
          placeholder="Filtrar por nombre"
        />
      )}
    </div>
  );
}

export default Filter;
