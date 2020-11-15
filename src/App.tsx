import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
