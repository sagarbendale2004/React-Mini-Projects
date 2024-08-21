import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
