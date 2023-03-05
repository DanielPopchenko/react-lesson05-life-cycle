import React from "react";

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <h2>{contact.name}</h2>
          <p>Number: {contact.number}</p>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
