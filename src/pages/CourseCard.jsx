
import { Col, Row, Card, Button, Container } from "react-bootstrap";

import data from "../data"
import { useNavigate } from "react-router-dom";


const CourseCard = () => {
  const navigate = useNavigate()
  return (
    <Container className="text-center mt-2 mb-5 py-4">
      <h3 className="text-center border mb-5 border-primary display-6 rounded text-secondary">COURSES</h3>
      <Row className="gap-5 gap-lg-0 justify-content-center">
      
        {data.map(({ img, name, text, id }) => {
          // const{img, name, text} = item
          return (
            <Col sm={12} md={5} lg={4} key={id}>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="warning"
                  onClick={()=>navigate(`/courses/${name}`)}>Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
