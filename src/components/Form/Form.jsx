import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90%;
    padding: 15px;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const StyledButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
`;

const Form = ({ selectedOption, onSubmitForm }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (values) => {
    const formattedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, Number(value)])
    );

    console.log("Datos del formulario:", formattedValues);
    onSubmitForm(formattedValues); // Enviamos los datos al padre (Explorer)
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {selectedOption === "block" && (
        <>
          <StyledLabel htmlFor="block">Introduce el número de bloque</StyledLabel>
          <StyledInput
            type="number"
            {...register("block", { required: "El número de bloque es obligatorio", min: 0 })}
            id="block"
            placeholder="Número de bloque"
          />
          {errors.block && <ErrorMessage>{errors.block.message}</ErrorMessage>}
        </>
      )}

      {/* {selectedOption === "tx" && (
        <>
          <StyledLabel htmlFor="tx">Introduce el hash de la transacción</StyledLabel>
          <StyledInput
            type="text"
            {...register("tx", { required: "El hash de la transacción es obligatorio" })}
            id="tx"
            placeholder="Hash de la transacción"
          />
          {errors.tx && <ErrorMessage>{errors.tx.message}</ErrorMessage>}
        </>
      )} */}

      {/* {selectedOption === "count" && (
        <>
          <StyledLabel htmlFor="count">Introduce una cuenta</StyledLabel>
          <StyledInput
            type="text"
            {...register("count", { required: "La cuenta es obligatoria" })}
            id="count"
            placeholder="Cuenta"
          />
          {errors.count && <ErrorMessage>{errors.count.message}</ErrorMessage>}
        </>
      )} */}

      <StyledButton type="submit" disabled={!isValid}>
        Consultar
      </StyledButton>
    </StyledForm>
  );
};

export default Form;

