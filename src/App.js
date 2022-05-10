import React from "react";
import Navigate from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ContextProvider } from "./context/index";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigate />
      </BrowserRouter>
      <GlobalStyle />
    </ContextProvider>
  );
}

export default App;
