import routes from "@/routes/routes";
import { logout } from "@/store/features/auth";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from '@/hooks/useStore';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const handlelogout = ()=>{
    dispatch(logout());
  }
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to={routes.home}>Task Manager </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to={routes.projects}>
            Proyectos
          </Nav.Link>
          <NavDropdown  title="admin">
            <NavDropdown.Item  as={NavLink} to={routes.admin.user}>Usuarios</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
        <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesion</Nav.Link>
        <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
        <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
        <Nav.Link onClick={handlelogout}>Cerrar Sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
