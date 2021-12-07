import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Talant from "./routersComponenets/talant";
import Admin1 from "./routersComponenets/admin1";
import Admin2 from "./routersComponenets/admin2";
import Imployer1 from "./routersComponenets/imployer1";
import Imployer2 from "./imployer2";
import AdminEmployer from "./routersComponenets/admin&employer";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="talant" element={<Talant />} />
        <Route path="admin1" element={<Admin1 />} />
        <Route path="admin2" element={<Admin2 />} />
        <Route path="imployer1" element={<Imployer1 />} />
        <Route path="imployer2" element={<Imployer2 />} />
        <Route path="adminEmployer" element={<AdminEmployer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
