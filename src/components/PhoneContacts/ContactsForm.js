import React, { Component } from "react";
import styled from "styled-components";

import { error } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
  min-width: 120px;
  height: 40px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  display: block;
  min-width: 150px;
  height: 25px;
  font-size: 17px;
`;

export default class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name === "" || number === "") {
      alert("Enter contact number and name");
      return;
    }

    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    this.props.contacts.map((contact) => {
      if (value === contact.name) {
        error({
          text: "This name is already in your list!",
          delay: 2000,
        });
      }

      if (contact.number === value) {
        error({
          text: "This number is already in your list!",
          delay: 2000,
        });
      }
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form>
        <label>
          Enter contact name
          <StyledInput
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Enter contact number
          <StyledInput
            type="tel"
            onChange={this.handleChange}
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit" onClick={this.handleSubmit}>
          Submit form
        </Button>
      </form>
    );
  }
}
