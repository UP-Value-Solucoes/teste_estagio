import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Login } from "./pages/Login/login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Sucess" element={<Login />} />
      </Route>
    </Routes>
  );
}
