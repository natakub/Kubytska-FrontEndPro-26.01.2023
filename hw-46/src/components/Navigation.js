import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <Navbar bg="dark">
      <Container>
        <NavLink className="navigator" activeClassName="active" to="/users">
          Users List
        </NavLink>
      </Container>
    </Navbar>
  );
}
