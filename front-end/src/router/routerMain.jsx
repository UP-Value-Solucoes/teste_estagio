import { Route, Routes } from "react-router-dom";
import {LoginPage} from "../pages/login/login"

export function RouterMain(){
    return(
      <Routes>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
    )
}