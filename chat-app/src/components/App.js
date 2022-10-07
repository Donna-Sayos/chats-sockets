import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage();

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
