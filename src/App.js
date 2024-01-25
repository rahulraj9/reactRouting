import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Item from "./components/Item";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
export default function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/items" element={<Item />} />
    </>
  );
  const router = createBrowserRouter(routes);
  return (
    <>
    <NavBar/>
      <RouterProvider router={router} />
    </>
  );
}
