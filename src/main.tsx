import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SearchContextProvider } from "./context/SearchContext.tsx";
import { ItemsContextProvider } from "./context/ItemsContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <SearchContextProvider>
        <Router>
          <App />
        </Router>
      </SearchContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>
);
