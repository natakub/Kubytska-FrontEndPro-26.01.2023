import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

function ContactsTable(props) {
  return (
    <Table striped hover size="sm" variant="info">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Delete contact</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact) => (
          <tr key={contact.id} id={contact.id}>
            <td>{contact.name.split(" ")[0]}</td>
            <td>{contact.name.split(" ")[1]}</td>
            <td>{contact.phone}</td>
            <td>
              <DeleteButton
                deleteContact={props.deleteContact}
                id={contact.id}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ContactsTable;

function DeleteButton(props) {
  return (
    <Button
      size="sm"
      variant="outline-dark"
      onClick={() => props.deleteContact(props.id)}
    >
      Delete
    </Button>
  );
}
