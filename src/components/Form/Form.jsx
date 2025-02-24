import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Form = ({ selectedOption, onSubmitForm }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    // Convertimos los valores a número si es necesario
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
          <label htmlFor="block">Introduce el número de bloque</label>
          <input type="number" {...register("block")} id="block" placeholder="Número de bloque" />
        </>
      )}

      {selectedOption === "tx" && (
        <>
          <label htmlFor="tx">Introduce el número de transacción</label>
          <input type="number" {...register("tx")} id="tx" placeholder="Número de transacción" />
        </>
      )}

      {selectedOption === "count" && (
        <>
          <label htmlFor="count">Introduce una cuenta</label>
          <input type="number" {...register("count")} id="count" placeholder="Cuenta" />
        </>
      )}

      <button type="submit">Consultar</button>
    </StyledForm>
  );
};

export default Form;
