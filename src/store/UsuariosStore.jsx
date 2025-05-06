import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuarios } from "../index";

export const useUsuariosStore = create((get, set) => ({
  insertarUsuarioAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });
    console.log("Data del registro del user", data);
    if (error) return;
    const dataUser=await InsertarUsuarios({
      idauth: data.user.id,
      fecharegistro: new Date(),
      tipouser: "admin",
    });
    return dataUser;
  },
}));
