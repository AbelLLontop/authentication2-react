import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "@/routes/routes";
const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Bienvenid@ al Gestor de tareas</h2>
          <p>Aqui podras gestionar tus proyectos!</p>
          <p>Marca tus tareas como terminadas, Agrega, elimina o actualiza.</p>
          <div>
            <Link to={routes.login}>Ingresa</Link>o
            <Button as={Link} to={routes.register}>
              Crea una cuenta
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
