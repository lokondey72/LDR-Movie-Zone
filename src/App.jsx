import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Componens/Layout";
import Home from "./Componens/Home";
import AboutUs from "./Componens/AboutUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
