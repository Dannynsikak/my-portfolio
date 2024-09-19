import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Homescreen from "./screens/Homescreen";
import Projectscreen from "./screens/Projectscreen";
import NotFound from "./components/NotFound";
import SkillsScreen from "./screens/SkillsScreen";
import ContactModal from "./components/ContactModal";

// Define the router without nesting paths unnecessarily
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
  },
  {
    path: "/projects",
    element: <Projectscreen />,
  },
  {
    path: "*", // Wildcard for non-existent routes
    element: <NotFound />,
  },
  {
    path: "/portfolio",
    element: <SkillsScreen />,
  },
  {
    path: "/contact",
    element: <ContactModal />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
