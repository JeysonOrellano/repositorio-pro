import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuarios } from "../index";

export const useUsuariosStore = create((get, set) => ({
  insertaUsuarioAdmin: async (p) => {
  const {data,error}=  await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });
    console.log("Data",data)
    if(error) return;
    await InsertarUsuarios({idauth:data.user.id,fecharegisto:new Date(),tipouser:"admin"})
  },
}));
