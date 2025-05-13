import { Route, Routes } from "react-router-dom";
import {
  ErrorMolecula,
  Home,
  Login,
  ProtectedRoutes,
  useEmpresaStore,
  UserAuth,
  useUsuariosStore,
} from "../index";
import { useQuery } from "@tanstack/react-query";
import { SpinnerLoader } from "../components/moleculas/SpinnetLoader";
export function MyRoutes() {
  const { user } = UserAuth();
  const { mostrarUsuarios,idusuario } = useUsuariosStore();
  const {mostrarEmpresa} = useEmpresaStore();
  const { data:datausuarios, isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: ()=>mostrarUsuarios(),
  });

  console.log("ID de usuario pasado al useQuery:", idusuario);
  const {data:dataempresa}=useQuery({
    queryKey:["mostrar empresa"],
    queryFn:()=>mostrarEmpresa({idusuario:idusuario}),
    enabled:!!datausuarios})


  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <ErrorMolecula mensaje={error.message} />;
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      <Route element={<ProtectedRoutes user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
