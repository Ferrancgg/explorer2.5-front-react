import { useState, useEffect } from "react";

const useExplorerData = (selectedOption, formData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedOption) return;

    let url = `http://localhost:4000/explorer/${selectedOption}`;
    if (selectedOption === "block" && formData) {
      const blockNumber = Object.values(formData)[0];
      if (!blockNumber) return;
      url += `/${blockNumber}`;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error en la petición");

        const result = await response.json();
        if (!result.block) throw new Error("Datos del bloque no disponibles");

        setData({
          number: result.block.number || "No disponible",
          hash: result.block.hash || "No disponible",
          parentHash: result.block.parentHash || "No disponible",
          timestamp: result.block.timestamp
            ? new Date(result.block.timestamp * 1000).toLocaleString()
            : "No disponible",
          transactions: result.block.transactions?.length || 0,
          miner: result.block.miner || "No disponible",
          gasUsed: result.block.gasUsed || "No disponible",
          gasLimit: result.block.gasLimit || "No disponible",
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOption, formData]);

  return { data, loading, error };
};

export default useExplorerData;
