import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import Status from "./component/Status/Status";
import Forum from "./component/Forum/Forum";
import Root from "./component/Root/Root";
import ParentHomePage from "./component/ParentHomePage/ParentHomePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/home",
//     element: <Home></Home>,
//   },
//   {
//     path: "/status",
//     element: <Status></Status>,
//   },
//   {
//     path: "/forum",
//     element: <Forum></Forum>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentHomePage></ParentHomePage>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "status",
        element: <Status></Status>,
      },
      {
        path: "forum",
        element: <Forum></Forum>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
