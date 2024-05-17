import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<h1>Home</h1>}/>
    </>
));
export default router;