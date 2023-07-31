import { Route, Routes } from "react-router-dom";

import Error from "./pages/404";
import Index from "./pages/Index";
import Footer from "components/Footer/Footer";
import Gazpromneft from "pages/Gazpromneft";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/gazpromneft" element={<Gazpromneft />} />
        {/* <Route path="/montblanc" element={<Montblanc />} />
        <Route path="/skysmartcamp" element={<Skysmartcamp />} />
        <Route path="/highload" element={<Highload />} />
        <Route path="/helix" element={<Helix />} />
        <Route path="/vk" element={<Vk />} />
        <Route path="/skysmartbigday" element={<Skysmartbigday />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
