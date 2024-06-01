/* eslint-disable react-refresh/only-export-components */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";
import Layout from "./layout/Layout";
const Home = lazy(() => import("./pages/Home"));
const Recipes = lazy(() => import("./pages/Recipes"));
const Categories = lazy(() => import("./pages/Categories"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Details = lazy(() => import("./pages/Details"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/categories/:categoryName" element={<Categories />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
export default router;
