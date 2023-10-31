import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Analytics } from "@vercel/analytics/react";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
