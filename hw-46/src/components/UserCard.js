import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function UserCard(props) {
  return (
    <Card bg="secondary" text="light">
      <Card.Header>{props.username}</Card.Header>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>{props.email}</p>
          <p>
            {props.company}, {props.city}
          </p>
          <p>{props.catchPhrase}</p>
        </Card.Text>
      </Card.Body>
      <Link
        to={`/user/${props.id}/albums?name=${props.name}`}
        className="d-grid  text-decoration-none"
      >
        <Button variant="info" size="md">
          Albums
        </Button>
      </Link>
    </Card>
  );
}
