import React from "react";

function ContactForm({
  name,
  phone,
  email,
  handleNameChange,
  handlePhoneChange,
  handleEmailChange,
  handleSubmit,
  isDuplicate
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Contact</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <input
        type="tel"
        placeholder="Phone (123-456-7890)"
        value={phone}
        onChange={handlePhoneChange}
        pattern="\d{3}-\d{3}-\d{4}"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <button type="submit">Add Contact</button>

      {isDuplicate && (
        <p style={{ color: "red" }}>
          ⚠️ Contact already exists!
        </p>
      )}
    </form>
  );
}

export default ContactForm;
