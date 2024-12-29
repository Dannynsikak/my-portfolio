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
            {/* Name Input */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            {/* Message Input */}
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                rows={3}
                required
              />
            </Form.Group>

            {/* Button and Link */}
            <div className="d-flex justify-content-center flex-column align-items-center">
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="w-50 mb-3"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              <span className="text-muted text-center">
                Prefer a direct approach?{" "}
                <a
                  href="mailto:nsikakdanny11@gmail.com"
                  className="underline font-weight-bold text-primary"
                >
                  Email me directly
                </a>
              </span>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;
