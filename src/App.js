import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main/Main";
import StateProvider from "./Services/Context/StateProvider";
import "./App.css"

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
