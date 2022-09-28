import React, { useRef, useState, useEffect } from "react";
import "./login.css";
import { Container, Form } from "react-bootstrap";

function Login() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const idRef = useRef();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
      </Form>
      <br />
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      {items.map((item, i) => (
        <div key={i}>
            <p>{JSON.stringify(item)}</p>
        </div>
      ))}
    </Container>
  );
}

export default Login;
