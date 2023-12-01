import { Route, Routes } from "react-router-dom";
import {LoginPage} from "../pages/login/login"
import { RegisterPage } from "../pages/register/cadastro";

export function RouterMain(){
    return(
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    )
}