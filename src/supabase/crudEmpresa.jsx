import Swal from "sweetalert2";
import { supabase } from "../index";

export const MostrarEmpresa = async (p) => {
  const { data, error } = await supabase
    .from("asignarempresa")
    .select(`empresa(id,nombre,simbolomoneda)`)
    .eq("id_usuario", p.idusuario)
    .maybeSingle();

  if (data) {
    return data;
    
  }
};
