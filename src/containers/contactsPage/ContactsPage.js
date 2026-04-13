import React, { useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

function ContactsPage({ contacts, addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    const isDuplicate = contacts.some(
      (contact) => contact.name === value
    );

    setDuplicate(isDuplicate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicate) {
      addContact(name, phone, email);

      setName("");
      setPhone("");
      setEmail("");
      setDuplicate(false);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>

        <ContactForm
          name={name}
          phone={phone}
          email={email}
          handleNameChange={handleNameChange}
          handlePhoneChange={(e) => setPhone(e.target.value)}
          handleEmailChange={(e) => setEmail(e.target.value)}
          handleSubmit={handleSubmit}
          isDuplicate={duplicate}
        />
      </section>

      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
}

export default ContactsPage;
