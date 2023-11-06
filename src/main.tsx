import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SearchContextProvider } from "./context/SearchContext.tsx";
import { ItemsContextProvider } from "./context/ItemsContext.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <SearchContextProvider>
        {/* <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#000",
            },
          }}
        > */}
        <Router>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </Router>
        {/* </ConfigProvider> */}
      </SearchContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>
);
