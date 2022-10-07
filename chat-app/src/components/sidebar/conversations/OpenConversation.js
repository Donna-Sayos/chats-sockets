import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../../../contexts/ConversationsProvider";

function OpenConversation() {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText(""); // clears out the input box after sending a message;
  }
  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="h-100 d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            return (
              <div
                key={index}
                className={`my-1 d-flex flex-column ${
                  message.fromMe ? "align-self-end" : ""
                }`}
              >
                <div
                  className={`rounded pw-2 py-1 ${
                    message.fromMe ? "bg-primary text-white" : "border"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-right" : ""
                  }`}
                >
                  {message.fromMe ? "You" : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
              required
            />
            <Button type="submit" variant="warning">
              Send
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default OpenConversation;
