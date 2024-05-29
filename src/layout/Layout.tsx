import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Suspense } from "react";
import { Box, Progress } from "@chakra-ui/react";
import ScrollToTop from "../utils/ScrollToTop";
const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Suspense
        fallback={<Progress size="xs" isIndeterminate colorScheme="orange" />}
      >
        <Box as="main">
          <Outlet />
        </Box>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
