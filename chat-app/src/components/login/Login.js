import React, { useRef } from "react";
import "./login.css";
import { Container, Form } from "react-bootstrap";

function Login() {
    const idRef = useRef();
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
