import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IPOPage from "./components/IPOPage.tsx";
import IPOList from "./components/IPOList.tsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import PageNotFound from "./components/PageNotFound.tsx";

// Note: I have explained the use/logic with comments.
// For this assignment I used MUI, react router, typescript.

//Bypassed unneccessary <App/> hierarchy and initialized root rendering with BrowserRouter
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary fallback={<PageNotFound />}>
              <IPOList />
            </ErrorBoundary>
          }
        />

        <Route
          path="/:productId"
          element={
            <ErrorBoundary fallback={<PageNotFound />}>
              <IPOPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
