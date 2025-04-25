import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore = create((get, set) => ({
  //Iniciar Session
  signInWithEmail: async (p) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: p.correo,
      password:p.password
    })
    if(error){
      return null
    }
    return data.user
  },

  //Cerrar session
  signOut:async()=>{
    const {error}=await supabase.auth.signOut()
    if(error)
      throw  new Error("Error",error)
  }
}));
