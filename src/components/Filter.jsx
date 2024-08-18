import {useState, useContext} from 'react'
import { ApiContext } from '../context/apiContext';

function Filter() {
    const {items, dataFilter, setDataFilter} = useContext(ApiContext)
//funcion para filtrar los datos
  const filterData = (name) => {
    const filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(name.toLowerCase())
        );
        
        if (filteredItems.length > 0) {
        setDataFilter(filteredItems);
        console.log(dataFilter)
        } else {
        console.log('No se encontró el personaje...');
        setDataFilter([]); 
        }
    }

    const handleFilter = (e) => {
      filterData(e.target.value);
    }

    return (
      <div className="filter-container">
        <input 
          type="text" 
          onChange={handleFilter} 
          placeholder="Filtrar por nombre" 
        />
      </div>
    )
}

export default Filter