import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage();

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
