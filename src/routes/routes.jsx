import { Route, Routes } from "react-router-dom";
import { Home, Login, ProtectedRoutes, UseAuth } from "../index";
export function MyRoutes() {
  const { user } = UseAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      
      <Route element={<ProtectedRoutes user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}
