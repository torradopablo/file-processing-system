import React, { useState, useEffect } from 'react';

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos del endpoint
    fetchDataFromEndpoint();
  }, []);

  const fetchDataFromEndpoint = async () => {
    try {
      // Realiza la solicitud al endpoint y obtén los datos
      const response = await fetch('URL_DEL_ENDPOINT');
      const responseData = await response.json();
      setData(responseData); // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error('Error al obtener los datos del endpoint:', error);
    }
  };

  return (
    <div>
      <h2>Tabla de Datos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
            <th>Columna 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.columna1}</td>
              <td>{row.columna2}</td>
              <td>{row.columna3}</td>
              <td>{row.columna4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
