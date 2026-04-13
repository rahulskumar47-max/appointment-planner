import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import ContactsPage from "./containers/contactsPage/ContactsPage";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, { name, phone, email }]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments((prev) => [
      ...prev,
      { name, contact, date, time }
    ]);
  };

  return (
    <div>
      <nav>
        <Link to="/">Contacts</Link>
        <Link to="/appointments">Appointments</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          }
        />

        <Route
          path="/appointments"
          element={
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
