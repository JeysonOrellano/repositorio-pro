import { create } from "zustand";
import {devtools} from "zustand/middleware";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuarios, MostrarUsuarios } from "../index";

export const useUsuariosStore = create(devtools((get, set) => ({
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



  mostrarUsuarios:async()=>{
    const response=await MostrarUsuarios();
    console.log("Respuesta de usuario",response.id)
    set({idusuario:response.id},false,'mostrarUsuarios');
    return response
  }
}),{name:"UsuariosStore"}));
