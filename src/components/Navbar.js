import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarHeader = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark d-none d-block navbar-zindex borrado-padding" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <Container>
        <Navbar.Brand className="borrado-padding">
          <Nav.Link href="/">ONGeitor</Nav.Link>
        </Navbar.Brand>
        <Navbar.Collapse className="collapse">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Item >
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/listado-ongs">Listado ONG</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/introducir-ong">Añadir ONG</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse >
      </Container>
    </Navbar >
  );
};
export default NavbarHeader;
