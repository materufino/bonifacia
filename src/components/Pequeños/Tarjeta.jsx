import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import '../../Assets/fonts.css'
const Contenedor = styled.div`
    background-color: #e63e3e;
    width: 600px;
    height: 300px;
`
const StyledCard = styled(Card)`
  height: 100%;
  max-width: 400px;
`;

const Tarjeta = props => {
    let { imagen, price, title } = props.data;
    return (<>

        <StyledCard className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0">
                <Card.Img variant='top' src={imagen} />
                <Card.Body className="text-center">
                    <Card.Title style={{ fontFamily: "Cutive Mono", fontSize: "1.5rem" }}>{title}</Card.Title>
                    <Card.Title className="display-6">{price}</Card.Title>
                </Card.Body>
                <Button className="w-100 rounded-0" variant="dark">Añadir al carrito</Button>
            </div>

        </StyledCard>


    </>)
}

export default Tarjeta;