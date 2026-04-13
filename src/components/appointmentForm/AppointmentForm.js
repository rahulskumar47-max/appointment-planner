import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";
import { getTodayString } from "../../utils/date";

function AppointmentForm({
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  contacts,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Appointment</h3>

      <input
        type="text"
        placeholder="Appointment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        name="contact"
      />

      <input
        type="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <button type="submit">
        Add Appointment
      </button>
    </form>
  );
}

export default AppointmentForm;
