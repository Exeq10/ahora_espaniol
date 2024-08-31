// Router
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {lazy} from "react";

const Landing = lazy(() => import("./pages/Landing"));
const Accomodation = lazy(() => import("./pages/Accomodation"));
const Classes = lazy(() => import("./pages/Classes"));
 import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/accomodation" element={<Accomodation />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/contact" element={<Contact />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;