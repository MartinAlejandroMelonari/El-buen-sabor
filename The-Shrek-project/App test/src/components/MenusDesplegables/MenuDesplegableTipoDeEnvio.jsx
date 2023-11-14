import { useState } from 'react';

const DropdownTipoEntrega = ({ onSelectOption }) => {
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
        <option value="0" key={0}>Delivery</option>
        <option value="1" key={1}>Take away</option>
        </select>        
      </label>
    </div>
  );
};

export default DropdownTipoEntrega;