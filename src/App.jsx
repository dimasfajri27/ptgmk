
import { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home";
import ContentProglat from "./components/ContentProglat";
import DetailPelatihan from "./pages/DetailPelatihan";
import About from "./components/about";

// Mengatur posisi scroll ketika berpindah halaman
function ScrollManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    // Menonaktifkan animasi scroll sementara
    root.style.scrollBehavior = "auto";

    // Memindahkan halaman ke posisi paling atas secara langsung
    window.scrollTo(0, 0);

    // Mengembalikan pengaturan scroll sebelumnya
    root.style.scrollBehavior = previousBehavior;

  }, [pathname]);

  return null;
}

// Komponen utama aplikasi
function AppContent() {
  return (
    <>
      <ScrollManager />

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

          <Route
            path="/about/:id"
            element={<About />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// Komponen App
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
