import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/";
import NotFound from "../pages/NotFound/";
import Register from "../pages/Register/Register/";
import Login from "../pages/Login/Login/";
import HomeUser from "../pages/Home/indexUser";
import HomeAdmin from "../pages/Home/indexAdmin";
import ProductDetail from "../pages/ProductDetail";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/src/pages/Home/indexUser.jsx" element={<HomeUser />} />
          <Route path="/src/pages/Home/indexAdmin.jsx" element={<HomeAdmin />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="administracion" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
