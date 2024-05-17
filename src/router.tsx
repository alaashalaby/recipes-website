import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </>
  )
);
export default router;