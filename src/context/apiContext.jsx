import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  // Estados para la API
  const [data, setData] = useState([]); //datos para la navegacion
  const [items, setItems] = useState([]);//datos de los personajes
  const [currentPage, setCurrentPage] = useState(1);// cambiar de pagina
  const [totalPages, setTotalPages] = useState(1);//paginas totales
  const [dataType, setDataType] = useState("characters");//tipo de datos de la api
  const [dataFilter, setDataFilter] = useState([] || '');//filtro de los datos

  //funcion para seleccionar el tipo de dato a mostrar
  const handleDataTypeChange =  (type) => {
    setDataType(type);
    setCurrentPage(1);
  } 
  //funcion para dirigir a la primera pagina 
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  //funcion para devolver a la pagina anterior
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
 //funcion para seguir a la siguiente pagina 
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
 //funcion para redirigir a al ultima pagina
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };
  //funcion para hacer fetch a la api
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setItems(data.items);
      setTotalPages(data.meta.totalPages)
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const urlWithPage = dataType == 'characters' 
    ? `https://dragonball-api.com/api/characters?page=${currentPage}&limit=12`
    : `https://dragonball-api.com/api/planets?page=${currentPage}&limit=4`
    
    fetchData(urlWithPage);
    setDataFilter([]); 
  }, [currentPage, dataType]);

  return (
    <ApiContext.Provider
      value={{
        data,
        items,
        currentPage,
        totalPages,
        dataType,
        dataFilter,
        setDataFilter,
        setData,
        fetchData,
        setItems,
        handleFirstPage,
        handleLastPage,
        handleNextPage,
        handlePrevPage,
        handleDataTypeChange,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
