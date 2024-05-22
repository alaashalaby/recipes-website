import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";
import Layout from "./layout/Layout";
import Details from "./pages/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/details/:id" element={<Details />}/>
      </Route>
    </>
  )
);
export default router;
