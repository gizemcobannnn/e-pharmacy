import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// lazy-loaded component
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const HomePage = lazy(() => import("../pages/Homepage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
