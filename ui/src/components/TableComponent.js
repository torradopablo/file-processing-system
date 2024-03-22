

  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  
  const TableComponent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const headers = {
            'Authorization': `Bearer ${process.env.REACT_APP_PROVIDER_SECRET_API}`,
          }        
          const response = await axios.get(`${process.env.REACT_APP_PROVIDER_API_URL}/files/data`, {headers:headers});
          console.log(response.data)
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>Tabla de Datos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, index) => (
            item.lines.map((line, idx) => (
              <tr key={`${index}-${idx}`}>
                <td>{item.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableComponent;
  