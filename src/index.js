import * as React from "react";
import * as ReactDOM from "react-dom/client";

/* Enable the interactive components such as modals, dropdowns, navbars, and more. */
import 'flowbite';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import SeatBooking from "./pages/SeatBooking";
import EmailVerification from "./pages/EmailVerification";
import MobileVerification from "./pages/MobileVerification";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/email", 
    element:<EmailVerification/>,},
  {
    path: "/seat",
    element: <SeatBooking />,
  },
  {
    path: "/mobile",
    element: <MobileVerification/>,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);