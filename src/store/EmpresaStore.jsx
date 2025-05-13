import { create } from "zustand";
import { MostrarEmpresa } from "../index";

export const useEmpresaStore = create((get, set) => ({
  dataempresa: [],
  mostrarEmpresa: async (p) => {
    const response = await MostrarEmpresa(p);
    set({ dataempresa: response });
    return response;
  },
}));
