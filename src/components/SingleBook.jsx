import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col xs={10} md={4} xl={3}>
      <Card className="mb-4" style={{ height: "480px", borderRadius: "15px" }}>
        <Card.Img variant="top" src={props.src} style={{ height: "350px" }} />
        <Card.Body className="pb-2">
          <Card.Title
            className="text-truncate"
            style={{ height: "45px", textOverflow: "ellipsis" }}
          >
            {props.title}
          </Card.Title>
          <Button className=" " variant="success">
            + add
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
