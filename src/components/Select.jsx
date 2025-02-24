import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #ff6347; /* Borde rojo tomate */
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: #ff4500; /* Color más oscuro al pasar el mouse */
  }
`;

const StyledOption = styled.option`
  font-size: 16px;
`;

const Select = ({ options, value, onChange }) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option, index) => (
        <StyledOption key={index} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
