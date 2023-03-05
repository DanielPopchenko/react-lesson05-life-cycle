import React, { Component } from "react";
import uniqid from "uniqid";

import FilterContacts from "./components/PhoneContacts/FilterContacts";
import ContactsForm from "./components/PhoneContacts/ContactsForm";
import ContactsList from "./components/PhoneContacts/ContactsList";

import { info } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

export default class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (filter) => {
    // const { contacts } = this.state;
    this.setState({ filter });

    // contacts.map((contact) => {
    //   if (contact.name === filter) {
    //     alert("This contact is already in your list");
    //   }
    // });
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: uniqid(),
    };

    if (this.state.filter === name) {
      alert("This contact is already in your list");
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => {
          if (contact.id !== contactId) {
            return contact;
          }
        }),
      };
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <section>
        <h1>Telephone book</h1>

        <ContactsForm
          contacts={visibleContacts}
          onAddContact={this.addContact}
        />

        <FilterContacts filter={filter} onChangeFilter={this.changeFilter} />

        <h2>Contacts:</h2>
        {visibleContacts.length === 0 && (
          <h2>No contact in your contact-book</h2>
        )}
        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </section>
    );
  }
}
