import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SeatBooking from "./pages/SeatBooking";
import EmailVerification from "./pages/EmailVerification";
import MonileVerification from "./pages/MobileVerification";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Login from "./pages/Login";


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
    element: <MonileVerification/>,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);