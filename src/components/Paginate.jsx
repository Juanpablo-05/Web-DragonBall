import React, { useContext } from "react";
import { ApiContext } from "../context/apiContext";

function Paginate() {
  const { 
    currentPage, 
    totalPages, 
    dataType,
    handleFirstPage, 
    handlePrevPage, 
    handleNextPage, 
    handleLastPage,
    handleDataTypeChange
  } = useContext(ApiContext);

  const handleSelectChange = (e) => {
    handleDataTypeChange(e.target.value)
  }

  return (
    <div className="nav-paginate">
      <button 
        className="opc-btn" 
        onClick={handleFirstPage} 
        disabled={currentPage === 1}
      >
        First
      </button>
      <button 
        className="opc-btn" 
        onClick={handlePrevPage} 
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button 
        className="opc-btn" 
        onClick={handleNextPage} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button 
        className="opc-btn" 
        onClick={handleLastPage} 
        disabled={currentPage === totalPages}
      >
        Last
      </button>

      <div className="filter-container">
        <select onChange={handleSelectChange} value={dataType}>
          <option value="characters">Characters</option>
          <option value="Planets">Planets</option>
        </select>
      </div>
    </div>
  );
}

export default Paginate;
