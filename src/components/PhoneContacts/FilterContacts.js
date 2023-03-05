import React from "react";
import styled from "styled-components";

const StyledFilterInput = styled.input`
  display: block;
  min-width: 150px;
  height: 25px;
  font-size: 17px;
  margin-bottom: 20px;
`;

export default function FilterContacts({ filter, onChangeFilter }) {
  return (
    <div>
      <h2>Filter Contacts by name:</h2>
      <label>
        Enter name:
        <StyledFilterInput
          type="text"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
