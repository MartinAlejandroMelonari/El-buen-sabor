import { useState } from 'react';

const DropdownMedioDePago = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelectOption(option);
  };
  return (
    <div>
      <label>
        Medio De Pago
        <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="0" key={0}>Efectivo</option>
        <option value="1" key={1}>Mercado Pago</option>
        </select>        
      </label>
    </div>
  );
};

export default DropdownMedioDePago;