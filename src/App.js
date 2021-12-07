import "./App.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
  let [value, handleValue] = useState("talant");
  return (
    <div className="App">
      <button
        className={"btn"}
        onClick={() => {
          handleValue("admin");
        }}
      >
        login admin
      </button>
      <button
        className={"btn"}
        onClick={() => {
          handleValue("talant");
        }}
      >
        login admin
      </button>
      <button
        className={"btn"}
        onClick={() => {
          handleValue("inployer");
        }}
      >
        login admin
      </button>
      <nav className={"nav"}>
        <Link className={"link"} to="talant">
          talant
        </Link>
        <Link className={"link"} to="admin2">
          admin2
        </Link>
        <Link className={"link"} to="imployer1">
          imployer1
        </Link>
        <Link className={"link"} to="imployer2">
          imployer2
        </Link>
        <Link className={"link"} to="adminEmployer">
          admin and employer
        </Link>
      </nav>
    </div>
  );
}

export default App;
