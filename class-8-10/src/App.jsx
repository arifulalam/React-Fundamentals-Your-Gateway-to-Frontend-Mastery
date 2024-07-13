/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MasterPage from "./layout/MasterPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Note from "./pages/Note";
import Contact from "./pages/Contact";
import CreateNote from "./pages/CreateNote";

import { Helmet, HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MasterPage />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateNote />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/note/:id" element={<Note />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
