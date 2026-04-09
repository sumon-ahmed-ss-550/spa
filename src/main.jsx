import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Features from "./components/features/Features.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import About from "./components/about/About.jsx";
import Users from "./components/users/Users.jsx";
import User from "./components/user/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "features", element: <Features></Features> },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      { path: "pricing", element: <Pricing></Pricing> },
      { path: "about", element: <About></About> },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <User></User>,
      },
    ],
  },
  { path: "*", element: <h2>Not found 404</h2> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
