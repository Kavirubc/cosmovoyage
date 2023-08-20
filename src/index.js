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

/* import pages */
import Error from "./pages/Error";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error />,
  },
  {
    path: "/email", 
    element: <EmailVerification />,
    errorElement: <Error />,
  },
  {
    path: "/flight-booking",
    element: <SeatBooking />,
    errorElement: <Error />,
  },
  {
    path: "/mobile",
    element: <MobileVerification/>,
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/logout",
    element: <Logout />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);