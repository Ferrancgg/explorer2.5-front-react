import { renderHook, act } from "@testing-library/react";
import useExplorerData from "./useExplorerData";

global.fetch = vi.fn(); // Mockeamos fetch

describe("useExplorerData Hook", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("debe hacer una petición y devolver los datos del bloque", async () => {
    const mockResponse = { block: { number: 12345, hash: "0xabc" } };
    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockResponse });

    const { result } = renderHook(() => useExplorerData("block", { input: "12345" }));

    await act(async () => {
      expect(result.current.loading).toBe(true);
    });

    await act(async () => {
      expect(result.current.data).toEqual({
        number: 12345,
        hash: "0xabc",
        parentHash: undefined,
        timestamp: "No disponible",
        transactions: 0,
        miner: undefined,
        gasUsed: undefined,
        gasLimit: undefined,
      });
      expect(result.current.loading).toBe(false);
    });
  });

  it("debe manejar errores en la petición", async () => {
    fetch.mockRejectedValueOnce(new Error("Error en la petición"));

    const { result } = renderHook(() => useExplorerData("block", { input: "12345" }));

    await act(async () => {
      expect(result.current.error).toBe("Error en la petición");
      expect(result.current.loading).toBe(false);
    });
  });
});
