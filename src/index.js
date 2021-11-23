import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="experience" element={<App />} />
        <Route path="work" element={<App />} />
        <Route path="contact" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
