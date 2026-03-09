// src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store"; 
import Routing from "./Routing/Routing";

function App() {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;