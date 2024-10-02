import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          {" "}
          <Navbar /> <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          {" "}
          <Navbar /> <Contact />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
