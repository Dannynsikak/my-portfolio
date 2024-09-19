import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrDocumentCsv } from "react-icons/gr";
import { MdOutlineContactMail } from "react-icons/md";
import { Frame1 } from "../imgs";

const navbar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bg-light shadow">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src={Frame1}
            alt="brand logo"
            className="inline-block max-w-[50px] h-auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {" "}
              <FaHome className="size-7" />
            </Nav.Link>
            <Nav.Link>
              {" "}
              <a
                href="https://github.com/Dannynsikak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-7" />
              </a>
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/projects">
                <FcAbout className="size-7" />
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/portfolio">
                <GrDocumentCsv className="size-7" />
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">
                <MdOutlineContactMail className="size-7" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
