// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; // Para navegación
// import FlexBox from "../components/FlexBox/FlexBox";
// import Form from "../components/Form/Form";
// import useExplorerData from "../hooks/useExplorerData";
// import BlockDetails from "../components/BlockDetails";
// import ExplorerSelect from "../components/ExplorerSelect";
// import Layout from "../components/Layout"; // Usamos el layout global
// import Button from "../components/UI/Button"; // Botón reutilizable
// import { H2 } from "../components/UI/Typography";

// const StyledExplorer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   height: 85vh;
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const Explorer = () => {
//   const navigate = useNavigate(); // Para redirigir
//   const [selectedOption, setSelectedOption] = useState("");
//   const [formData, setFormData] = useState(null);
//   const { data, loading, error } = useExplorerData(selectedOption, formData);

//   return (
//     <Layout>
//       <StyledExplorer>
//         <H2>Explorador de Ethereum</H2>

//         {!selectedOption && (
//           <FlexBox>
//             <ExplorerSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
//             <p>Opción seleccionada: {selectedOption || "Ninguna"}</p>
//           </FlexBox>
//         )}

//         {selectedOption && (
//           <>
//             <FlexBox height={95}>
//               <H2>Buscador</H2>
//               {selectedOption === "block" && <Form selectedOption={selectedOption} onSubmitForm={setFormData} />}
//               <Button onClick={() => setSelectedOption("")}>Volver</Button>
//             </FlexBox>

//             <FlexBox height={95}>
//               <H2>Resultado</H2>
//               {loading && <p>Cargando datos...</p>}
//               {error && <p>Error: {error}</p>}
//               {data && <BlockDetails data={data} />}
//             </FlexBox>
//           </>
//         )}

//         {/* Botón para volver a Home */}
//         <Button onClick={() => navigate("/")}>Ir al Inicio</Button>
//       </StyledExplorer>
//     </Layout>
//   );
// };

// export default Explorer;


import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FlexBox from "../components/FlexBox/FlexBox";
import Form from "../components/Form/Form";
import useExplorerData from "../hooks/useExplorerData";
import BlockDetails from "../components/BlockDetails";
import ExplorerSelect from "../components/ExplorerSelect";
import Layout from "../components/Layout";
import Button from "../components/UI/Button";
import { H2, P } from "../components/UI/Typography";

const StyledExplorer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  justify-content:space-between;
  gap: 20px;
  min-height: 85vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border:2px solid red;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 15px;
    padding: 15px;
  }
`;

const Explorer = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState(null);
  const { data, loading, error } = useExplorerData(selectedOption, formData);

  return (
    <Layout>
      <StyledExplorer>
        <H2>Explorador de Ethereum</H2>

        {!selectedOption && (
          <FlexBox width={80} height={100}>
            <ExplorerSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <P>Opción seleccionada: {selectedOption || "Ninguna"}</P>
          </FlexBox>
        )}

        {selectedOption && (
          <>
          {/* {setFormData()} */}
            <FlexBox width={90} height={40}>
              <H2>Buscador</H2>
              {selectedOption === "block" && <Form selectedOption={selectedOption} onSubmitForm={setFormData} />}
              <Button onClick={() => setSelectedOption("")}>Volver</Button>
            </FlexBox>

            <FlexBox width={90} height={40}>
              <H2>Resultado</H2>
              {loading ? <P>Cargando datos...</P> : error ? <P>Error: {error}</P> : data && <BlockDetails data={data} />}
            </FlexBox>
          </>
        )}

        {/* Botón para volver a Home */}
        <Button onClick={() => navigate("/")}>Ir al Inicio</Button>
      </StyledExplorer>
    </Layout>
  );
};

export default Explorer;
