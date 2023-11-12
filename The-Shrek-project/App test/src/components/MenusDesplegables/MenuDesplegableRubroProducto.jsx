import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownMenu = ({ url , onSelectOption }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setOptions(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error al obtener opciones:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div>
      <label>
        Rubro producto:
        <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
          <option value="" disabled>Seleccione una opción</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.nombreCategoriaProducto}
            </option>
          ))}
        </select>
        
      </label>
    </div>
  );
};

export default DropdownMenu;