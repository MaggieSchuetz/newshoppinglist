import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <InputForm>
        <label for="inputField">Please enter an item!</label>
        <input type="text" className="inputField"></input>
      </InputForm>
    </div>
  );
}

export default App;

const InputForm = styled.form`
  display: grid;
  width: 50;
  gap: 10 px;
`;
