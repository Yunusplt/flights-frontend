import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../img/logo.png"

function OffcanvasExample() {
  return (
    <>
      <Navbar expand={"sm"} className="bg-body-tertiary mb-3 fixed-top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="119px"
              height="72px"
              className="d-inline-block align-top logo ms-3"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"sm"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
            placement="end"
            style={{ width: "236px" }}
          >
            <Offcanvas.Header closeButton>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="119px"
                  height="72px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
                <Nav.Link href="#features">FEATURES</Nav.Link>
                <Nav.Link href="#newsroom">NEWSROOM</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
              <Button
                variant="outline-success"
                className="me-5"
              >
                BOOK NOW
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
