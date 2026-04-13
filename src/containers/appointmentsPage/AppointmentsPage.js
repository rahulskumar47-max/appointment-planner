import React, { useState } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

function AppointmentsPage({ appointments, contacts, addAppointment }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(name, contact, date, time);

    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>

        <AppointmentForm
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>

      <section>
        <h2>Appointments</h2>

        <TileList list={appointments} />
      </section>
    </div>
  );
}

export default AppointmentsPage;
