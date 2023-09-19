import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import ParentHomePage from "./component/ParentHomePage/ParentHomePage";
import Home from "./component/Home/Home";
import Status from "./component/Status/Status";
import Forum from "./component/Forum/Forum";
import NavBar from "./component/NavBar/NavBar";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Main></Main>,
  //     children: [
  //       {
  //         path: "/",

  //         children: [
  //           {
  //             index: true,
  //             element: <ParentHomePage></ParentHomePage>,
  //           },
  //           {
  //             path: "home",
  //             element: <Home></Home>,
  //           },
  //           {
  //             path: "status",
  //             element: <Status></Status>,
  //           },
  //           {
  //             path: "forum",
  //             element: <Forum></Forum>,
  //           },
  //         ],
  //       },
  //       {
  //         path: "/parentHomePage",
  //         element: <ParentHomePage></ParentHomePage>,
  //         children: [
  //           {
  //             path: "parentHomePage/home",
  //             element: <Home></Home>,
  //           },
  //           {
  //             path: "parentHomePage/status",
  //             element: <Status></Status>,
  //           },
  //           {
  //             path: "parentHomePage/forum",
  //             element: <Forum></Forum>,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div className="App">
      <h1>This is app</h1>
    </div>
  );
}

export default App;
