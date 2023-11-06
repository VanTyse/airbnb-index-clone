import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SearchContextProvider } from "./context/SearchContext.tsx";
import { ItemsContextProvider } from "./context/ItemsContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <SearchContextProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#000",
            },
          }}
        >
          <Router>
            <App />
          </Router>
        </ConfigProvider>
      </SearchContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>
);
