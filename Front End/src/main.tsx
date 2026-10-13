import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import QueryProvider from "./providers/QueryProvider";
import router from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>,
);
