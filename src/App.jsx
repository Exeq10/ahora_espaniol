import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import ContactProvider from "./context/ContactProvider";

const Landing = lazy(() => import("./pages/Landing"));
const Accomodation = lazy(() => import("./pages/Accomodation"));
const Siele = lazy(() => import("./pages/Siele"));
const Classes = lazy(() => import("./pages/Classes"));
const Contact = lazy(() => import ("./pages/Contact"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/accomodation" element={<Accomodation />} />
      <Route path="/siele" element={<Siele />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
);

function App() {
  return (

    <ContactProvider>

    <Suspense fallback={'Loading...'}>
      <RouterProvider router={router} />
    </Suspense>
    </ContactProvider>
  );
}

export default App;
