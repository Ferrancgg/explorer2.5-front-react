
// import React from "react";
// import styled from "styled-components";
// import { FaChevronDown } from "react-icons/fa"; // Icono para el select

// const SelectWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 300px;
// `;

// const StyledSelect = styled.select`
//   appearance: none; /* Oculta el diseño nativo del select */
//   width: 100%;
//   padding: 12px 16px;
//   font-size: 1rem;
//   border-radius: 5px;
//   border: 2px solid ${({ theme }) => theme.colors.primary};
//   background: ${({ theme }) => theme.colors.background};
//   color: ${({ theme }) => theme.colors.text};
//   outline: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   padding-right: 40px; /* Espacio para el icono */

//   &:hover {
//     border-color: ${({ theme }) => theme.colors.accent};
//   }

//   &:focus {
//     border-color: ${({ theme }) => theme.colors.secondary};
//     box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
//   }
// `;

// const DropdownIcon = styled(FaChevronDown)`
//   position: absolute;
//   right: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   pointer-events: none;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const ExplorerSelect = ({ selectedOption, setSelectedOption }) => {
//   const options = [
//     { label: "Último Bloque", value: "last" },
//     { label: "Consultar Bloque", value: "block" },
//   ];

//   return (
//     <SelectWrapper>
//       <StyledSelect
//         value={selectedOption}
//         onChange={(e) => setSelectedOption(e.target.value)}
//       >
//         <option value="" disabled>
//           Seleccione una opción...
//         </option>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </StyledSelect>
//       <DropdownIcon />
//     </SelectWrapper>
//   );
// };

// export default ExplorerSelect;

import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa"; // Icono para el desplegable

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%; /* 🔥 Se coloca justo debajo del select */
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px; /* 🔥 Evita que el menú sea demasiado largo */
  overflow-y: auto; /* 🔥 Si hay muchas opciones, aparece un scroll */
  z-index: 10; /* 🔥 Se asegura de que esté por encima de otros elementos */
  display: ${({ open }) => (open ? "block" : "none")}; /* 🔥 Ocultar cuando no esté activo */
`;

const Option = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const DropdownIcon = styled(FaChevronDown)`
  color: ${({ theme }) => theme.colors.text};
`;

const ExplorerSelect = ({ selectedOption, setSelectedOption }) => {
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Último Bloque", value: "last" },
    { label: "Consultar Bloque", value: "block" },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <SelectWrapper>
      <StyledSelect onClick={() => setOpen(!open)}>
        {selectedOption
          ? options.find((option) => option.value === selectedOption)?.label
          : "Seleccione una opción..."}
        <DropdownIcon />
      </StyledSelect>

      <Dropdown open={open}>
        {options.map((option) => (
          <Option key={option.value} onClick={() => handleSelect(option.value)}>
            {option.label}
          </Option>
        ))}
      </Dropdown>
    </SelectWrapper>
  );
};

export default ExplorerSelect;
