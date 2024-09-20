import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Detail() {

  const location = useLocation();
  const mascota = location.state?.mascota;

  return (
    <Container style={{ textAlign: "center", marginTop: "2rem" }}>
      {mascota ? (
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img variant="top" src={mascota.foto} />
          <Card.Body>
            <Card.Title>{mascota.nombre}</Card.Title>
            <Card.Text>
              <strong>Raza:</strong> {mascota.raza} <br />
              <strong>Descripción:</strong> {mascota.descripcion}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>No se encontró la información de la mascota.</p>
      )}
    </Container>
  );
}
