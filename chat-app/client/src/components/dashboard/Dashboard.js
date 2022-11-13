import React from "react";
import Sidebar from "../sidebar/Sidebar";
import OpenConversation from "../sidebar/conversations/OpenConversation";
import { useConversations } from "../../contexts/ConversationsProvider";

function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
};

export default Dashboard;
