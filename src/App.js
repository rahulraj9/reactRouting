import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Item from "./components/Item";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/items",
      element: <Item />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
