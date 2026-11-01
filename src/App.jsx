import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home";
import ContentProglat from "./components/ContentProglat";
import DetailPelatihan from "./pages/DetailPelatihan";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <ContentProglat />
              </>
            }
          />
          <Route
            path="/pelatihan/:id"
            element={<DetailPelatihan />}
          />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;