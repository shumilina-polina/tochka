import { Route, Routes } from "react-router-dom";

import Error from "./pages/404";
import Footer from "./components/Footer/Footer";
import Index from "./pages/Index/Index";

function App() {
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
