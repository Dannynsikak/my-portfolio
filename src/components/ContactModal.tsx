import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebaseCOnfig";

interface ContactModalProps {
  show: boolean;
  handleClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });

      setLoading(false);
      handleClose(); // Close modal after submission
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
