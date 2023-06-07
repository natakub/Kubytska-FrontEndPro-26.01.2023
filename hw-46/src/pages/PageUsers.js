import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function PageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Container className="PageUsers py-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <UserCard
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              company={user.company.name}
              city={user.address.city}
              catchPhrase={user.company.catchPhrase}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
