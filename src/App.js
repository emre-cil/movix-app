import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
