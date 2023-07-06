import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Error from "./pages/404";
import Footer from "./components/Footer/Footer";
import Index from "./pages/Index/Index";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";

function App() {
  const isMobile = useMediaQuery(breakpoints.mobile);

  useEffect(() => {
    Aos.init({ once: isMobile });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
