// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import FlexBox from "../../components/FlexBox/FlexBox";
// import Select from "../../components/Select";
// import Form from "../../components/Form/Form";

// const StyledExplorer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   height: 85svh;
//   width: 100%;
//   background-color: orange;
// `;

// const options = [
//  {label:"Ultimo Bloque",value:"last"} ,
//   { label: "Block", value: "block" },
//   { label: "Transaction", value: "tx" },
//   { label: "Count", value: "count" },
// ];

// const Explorer = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [formData, setFormData] = useState(null);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   if (!formData || !selectedOption) return;

//   //   // Obtén el valor ingresado en el formulario (block, tx o count)
//   //   const inputValue = Object.values(formData)[0];

//   //   if (!inputValue) return; // Si está vacío, no hacer la petición

//   //   const fetchData = async () => {
//   //     setLoading(true);
//   //     setError(null);
//   //     try {
//   //       // Construir la URL correctamente
//   //       const response = await fetch(`http://localhost:4000/explorer/${selectedOption}/${inputValue}`);

//   //       if (!response.ok) throw new Error("Error en la petición");

//   //       const result = await response.json();
//   //       setData(result);
//   //     } catch (error) {
//   //       setError(error.message);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [formData, selectedOption]);

//   useEffect(() => {
//     if (!formData || !selectedOption) return;

//     const inputValue = Object.values(formData)[0];

//     if (!inputValue) return; // Evitar petición vacía

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           `http://localhost:4000/explorer/${selectedOption}/${inputValue}`
//         );
//         if (!response.ok) throw new Error("Error en la petición");

//         const result = await response.json();

//         // 🔥 Filtrar solo los datos clave
//         if (result.block) {
//           setData({
//             number: result.block.number,
//             hash: result.block.hash,
//             parentHash: result.block.parentHash,
//             timestamp: new Date(result.block.timestamp * 1000).toLocaleString(), // Convertir timestamp
//             transactions: result.block.transactions.length, // Número de transacciones
//             miner: result.block.miner,
//             gasUsed: result.block.gasUsed,
//             gasLimit: result.block.gasLimit,
//           });
//         } else {
//           setData(null);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [formData, selectedOption]);

//   return (
//     <StyledExplorer>
//       <h1>Explorer</h1>

//       {!selectedOption && (
//         <Select
//           options={[
//             { label: "Seleccione una opción...", value: "", disabled: true },
//             ...options,
//           ]}
//           value={selectedOption}
//           onChange={(e) => setSelectedOption(e.target.value, console.log(e.target.value))}
          
//         />
//       )}

//       <p>Opción seleccionada: {selectedOption || "Ninguna"}</p>

//       {!selectedOption && <p>No tengo dato</p>}

//       {selectedOption && (
//         <>
//           <FlexBox height={95}>
//             <h2>Buscador</h2>
//             <Form selectedOption={selectedOption} onSubmitForm={setFormData} />
//             <button onClick={() => setSelectedOption("")}>Volver</button>
//           </FlexBox>
//           <FlexBox height={95}>
//             <h2>Resultado</h2>
//             {loading && <p>Cargando datos...</p>}
//             {error && <p>Error: {error}</p>}
//             {data && (
//               <div>
//                 <p>
//                   <strong>Número de bloque:</strong> {data.number}
//                 </p>
//                 <p>
//                   <strong>Hash:</strong> {data.hash}
//                 </p>
//                 <p>
//                   <strong>Hash anterior:</strong> {data.parentHash}
//                 </p>
//                 <p>
//                   <strong>Fecha:</strong> {data.timestamp}
//                 </p>
//                 <p>
//                   <strong>Transacciones:</strong> {data.transactions}
//                 </p>
//                 <p>
//                   <strong>Minero:</strong> {data.miner}
//                 </p>
//                 <p>
//                   <strong>Gas utilizado:</strong> {data.gasUsed}
//                 </p>
//                 <p>
//                   <strong>Límite de Gas:</strong> {data.gasLimit}
//                 </p>
//               </div>
//             )}
//           </FlexBox>

//           {/* <FlexBox height={95}>
//             <h2>Resultado</h2>
//             {loading && <p>Cargando datos...</p>}
//             {error && <p>Error: {error}</p>}
//             {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//           </FlexBox> */}
//         </>
//       )}
//     </StyledExplorer>
//   );
// };

// export default Explorer;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import FlexBox from "../../components/FlexBox/FlexBox";
// import Select from "../../components/Select";
// import Form from "../../components/Form/Form";

// const StyledExplorer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   height: 85svh;
//   width: 100%;
//   background-color: orange;
// `;

// const options = [
//   { label: "Último Bloque", value: "last" },
//   { label: "Block", value: "block" },
//   { label: "Transaction", value: "tx" },
//   { label: "Count", value: "count" },
// ];

// const Explorer = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [formData, setFormData] = useState(null);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!selectedOption) return;

//     let url = `http://localhost:4000/explorer/${selectedOption}`;

//     // Solo añadir formData si la opción no es "last"
//     if (selectedOption !== "last" && formData) {
//       const inputValue = Object.values(formData)[0];
//       if (!inputValue) return; // Evitar peticiones vacías
//       url += `/${inputValue}`;
//     }

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Error en la petición");

//         const result = await response.json();

//         // 🔥 Formatear datos según el tipo de consulta
//         if (selectedOption === "block" || selectedOption === "last") {
//           setData({
//             type: "block",
//             number: result.block.number,
//             hash: result.block.hash,
//             parentHash: result.block.parentHash,
//             timestamp: new Date(result.block.timestamp * 1000).toLocaleString(),
//             transactions: result.block.transactions.length,
//             miner: result.block.miner,
//             gasUsed: result.block.gasUsed,
//             gasLimit: result.block.gasLimit,
//           });
//         } else if (selectedOption === "tx") {
//           setData({
//             type: "tx",
//             hash: result.tx.hash,
//             from: result.tx.from,
//             to: result.tx.to,
//             value: result.tx.value,
//             gasUsed: result.tx.gasUsed,
//             blockNumber: result.tx.blockNumber,
//           });
//         } else if (selectedOption === "count") {
//           setData({
//             type: "count",
//             total: result.count,
//           });
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [formData, selectedOption]);

//   return (
//     <StyledExplorer>
//       <h1>Explorer</h1>

//       {!selectedOption && (
//         <Select
//           options={[
//             { label: "Seleccione una opción...", value: "", disabled: true },
//             ...options,
//           ]}
//           value={selectedOption}
//           onChange={(e) => setSelectedOption(e.target.value)}
//         />
//       )}

//       <p>Opción seleccionada: {selectedOption || "Ninguna"}</p>

//       {!selectedOption && <p>No tengo dato</p>}

//       {selectedOption && (
//         <>
//           <FlexBox height={95}>
//             <h2>Buscador</h2>
//             {selectedOption !== "last" && <Form selectedOption={selectedOption} onSubmitForm={setFormData} />}
//             <button onClick={() => setSelectedOption("")}>Volver</button>
//           </FlexBox>
          
//           <FlexBox height={95}>
//             <h2>Resultado</h2>
//             {loading && <p>Cargando datos...</p>}
//             {error && <p>Error: {error}</p>}

//             {/* 🔥 Mostrar datos según la consulta */}
//             {data && data.type === "block" && (
//               <div>
//                 <p><strong>Número de bloque:</strong> {data.number}</p>
//                 <p><strong>Hash:</strong> {data.hash}</p>
//                 <p><strong>Hash anterior:</strong> {data.parentHash}</p>
//                 <p><strong>Fecha:</strong> {data.timestamp}</p>
//                 <p><strong>Transacciones:</strong> {data.transactions}</p>
//                 <p><strong>Minero:</strong> {data.miner}</p>
//                 <p><strong>Gas utilizado:</strong> {data.gasUsed}</p>
//                 <p><strong>Límite de Gas:</strong> {data.gasLimit}</p>
//               </div>
//             )}

//             {data && data.type === "tx" && (
//               <div>
//                 <p><strong>Hash de Transacción:</strong> {data.hash}</p>
//                 <p><strong>Desde:</strong> {data.from}</p>
//                 <p><strong>Hacia:</strong> {data.to}</p>
//                 <p><strong>Valor:</strong> {data.value}</p>
//                 <p><strong>Gas utilizado:</strong> {data.gasUsed}</p>
//                 <p><strong>Número de Bloque:</strong> {data.blockNumber}</p>
//               </div>
//             )}

//             {data && data.type === "count" && (
//               <div>
//                 <p><strong>Total:</strong> {data.total}</p>
//               </div>
//             )}
//           </FlexBox>
//         </>
//       )}
//     </StyledExplorer>
//   );
// };

// export default Explorer;


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlexBox from "../../components/FlexBox/FlexBox";
import Select from "../../components/Select";
import Form from "../../components/Form/Form";

const StyledExplorer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 85svh;
  width: 100%;
  background-color: orange;
`;

const options = [
  { label: "Último Bloque", value: "last" },
  { label: "Block", value: "block" },
  { label: "Transaction", value: "tx" },
  { label: "Cuenta", value: "count" }, // ✅ Nueva opción para consultar cuenta Ethereum
];

const Explorer = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedOption) return;

    let url = `http://localhost:4000/explorer/${selectedOption}`;

    if (selectedOption !== "last" && formData) {
      const inputValue = Object.values(formData)[0];
      if (!inputValue) return; // Evitar peticiones vacías
      url += `/${inputValue}`; // Añadir la dirección de la cuenta o el identificador correcto
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error en la petición");

        const result = await response.json();
        console.log("Respuesta del backend:", result); // Debugging

        if (selectedOption === "block" || selectedOption === "last") {
          if (!result.block) throw new Error("Datos del bloque no disponibles");

          setData({
            type: "block",
            number: result.block?.number || "No disponible",
            hash: result.block?.hash || "No disponible",
            parentHash: result.block?.parentHash || "No disponible",
            timestamp: result.block?.timestamp
              ? new Date(result.block.timestamp * 1000).toLocaleString()
              : "No disponible",
            transactions: result.block?.transactions?.length || 0,
            miner: result.block?.miner || "No disponible",
            gasUsed: result.block?.gasUsed || "No disponible",
            gasLimit: result.block?.gasLimit || "No disponible",
          });
        } else if (selectedOption === "tx") {
          setData({
            type: "tx",
            hash: result.tx?.hash || "No disponible",
            from: result.tx?.from || "No disponible",
            to: result.tx?.to || "No disponible",
            value: result.tx?.value || "No disponible",
            gasUsed: result.tx?.gasUsed || "No disponible",
            blockNumber: result.tx?.blockNumber || "No disponible",
          });
        } else if (selectedOption === "count") {
          setData({
            type: "count",
            balance: result.balance || "No disponible",
            transactions: result.count || "No disponible",
          });
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [formData, selectedOption]);

  return (
    <StyledExplorer>
      <h1>Explorer</h1>

      {!selectedOption && (
        <Select
          options={[
            { label: "Seleccione una opción...", value: "", disabled: true },
            ...options,
          ]}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      )}

      <p>Opción seleccionada: {selectedOption || "Ninguna"}</p>

      {!selectedOption && <p>No tengo dato</p>}

      {selectedOption && (
        <>
          <FlexBox height={95}>
            <h2>Buscador</h2>
            {selectedOption !== "last" && <Form selectedOption={selectedOption} onSubmitForm={setFormData} />}
            <button onClick={() => setSelectedOption("")}>Volver</button>
          </FlexBox>
          
          <FlexBox height={95}>
            <h2>Resultado</h2>
            {loading && <p>Cargando datos...</p>}
            {error && <p>Error: {error}</p>}

            {/* 🔥 Mostrar datos según la consulta */}
            {data && data.type === "block" && (
              <div>
                <p><strong>Número de bloque:</strong> {data.number}</p>
                <p><strong>Hash:</strong> {data.hash}</p>
                <p><strong>Hash anterior:</strong> {data.parentHash}</p>
                <p><strong>Fecha:</strong> {data.timestamp}</p>
                <p><strong>Transacciones:</strong> {data.transactions}</p>
                <p><strong>Minero:</strong> {data.miner}</p>
                <p><strong>Gas utilizado:</strong> {data.gasUsed}</p>
                <p><strong>Límite de Gas:</strong> {data.gasLimit}</p>
              </div>
            )}

            {data && data.type === "tx" && (
              <div>
                <p><strong>Hash de Transacción:</strong> {data.hash}</p>
                <p><strong>Desde:</strong> {data.from}</p>
                <p><strong>Hacia:</strong> {data.to}</p>
                <p><strong>Valor:</strong> {data.value}</p>
                <p><strong>Gas utilizado:</strong> {data.gasUsed}</p>
                <p><strong>Número de Bloque:</strong> {data.blockNumber}</p>
              </div>
            )}

            {data && data.type === "count" && (
              <div>
                <p><strong>Balance:</strong> {data.balance} ETH</p>
                <p><strong>Transacciones enviadas:</strong> {data.transactions}</p>
              </div>
            )}
          </FlexBox>
        </>
      )}
    </StyledExplorer>
  );
};

export default Explorer;
