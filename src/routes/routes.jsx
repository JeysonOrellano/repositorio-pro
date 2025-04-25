import {Route, Routes } from "react-router-dom";
import {Home,Login} from "../index"
export function MyRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

  );
}
