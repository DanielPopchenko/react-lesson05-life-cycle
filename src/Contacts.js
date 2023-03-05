import React, { Component } from "react";
// import uuid from "react-uuid";
// import ContactsList from "./components/PhoneContacts/ContactsList";

const Subscription = {
  FREE: "free",
  PRO: "pro",
  PREMIUM: "premium",
};

export default class Contacts extends Component {
  state = {
    email: "",
    password: "",
    agreed: false,
    subscription: null,
    age: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleAgreeChange = (e) => {
    this.setState({ agreed: e.target.checked });
  };

  handleSubscriptionChange = (e) => {
    this.setState({ subscription: e.target.value });
  };

  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { email, password, agreed, subscription, age } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <br />
          </label>
          <br />

          <label>
            password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleAgreeChange}
            />
            Agree with smth
          </label>

          <br />
          <div role="group">
            <label>
              <input
                type="radio"
                value={Subscription.FREE}
                checked={Subscription.FREE === subscription}
                onChange={this.handleSubscriptionChange}
              />
              free
            </label>

            <label>
              <input
                type="radio"
                value={Subscription.PRO}
                checked={Subscription.PRO === subscription}
                onChange={this.handleSubscriptionChange}
              />
              pro
            </label>

            <label>
              <input
                type="radio"
                value={Subscription.PREMIUM}
                checked={Subscription.PREMIUM === subscription}
                onChange={this.handleSubscriptionChange}
              />
              premium
            </label>

            <br />
            <label>
              Choose your age
              <select name="age" value={age} onChange={this.handleAgeChange}>
                <option value="" disabled>
                  ...
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
              </select>
            </label>
          </div>
          <button disabled={!agreed} type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
