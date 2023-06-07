import { useState, useEffect } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactsTable from "./components/ContactsTable";

import Button from "react-bootstrap/Button";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const FetchContact = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchContact();
  }, []);

  const addContact = async (firstName, lastName, phoneNumber) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify({
            name: firstName + " " + lastName,
            phone: phoneNumber,
            id: Date.now(),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      setContacts((prevContacts) => [...prevContacts, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        setContacts(
          contacts.filter((contact) => {
            return contact.id !== id;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1 className="py-4">Contacts with API</h1>
      <section>
        <h2>Contacts</h2>
        <ContactsTable deleteContact={deleteContact} contacts={contacts} />
      </section>
      <Button variant="light" onClick={toggleForm}>
        Add contact
      </Button>
      {showForm && (
        <AddContactForm addContact={addContact} onCancel={toggleForm} />
      )}
    </div>
  );
}

export default App;
