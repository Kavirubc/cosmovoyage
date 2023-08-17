import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SeatBooking from "./pages/SeatBooking";
import EmailVerification from "./pages/EmailVerification";
import NavBar from "./components/molecules/NavBar";
import MonileVerification from "./pages/MobileVerification";
import Main from "./pages/Main";
import VerificationPage from "./pages/VerificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
  },
  {
    path: "/Email", 
    element:<EmailVerification/>,},
  {
    path: "/Seat",
    element: <SeatBooking />,
  },
  {
    path: "/mobile",
    element: <MonileVerification/>,
  },
  {
    path: "/Main",
    element: <Main/>,
  },
  {
    path: "/verify",
    element: <VerificationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);