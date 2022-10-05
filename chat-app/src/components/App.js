import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const [id, setId] = useLocalStorage();

  return (
    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  );
}

export default App;
