/* eslint-disable no-unused-vars */
import { react, useState } from "react";
import logo from "./assets/react.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import RootLayout from "./RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout logo={logo} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <div className="container-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
