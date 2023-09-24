import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Our from "./pages/Our";
import Layout from "./components/Layout";
import Form from "./pages/Form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="our" element={<Our />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
