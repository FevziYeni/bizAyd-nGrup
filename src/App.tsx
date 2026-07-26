import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import FloatingContactButtons from "./components/FloatingContactButtons";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/project"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const GungorenAkincilarProject = lazy(
  () => import("./pages/GungorenAkincilarProject")
);
const IstanbulServicesPage = lazy(
  () => import("./pages/IstanbulServicesPage")
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#f8f7f3] text-slate-950">
          <ScrollToTop />
          <Navbar />
          <Suspense
            fallback={
              <div className="flex min-h-[55vh] items-center justify-center bg-[#f8f7f3]">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-gold" />
                <span className="sr-only">Sayfa yükleniyor</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Project />} />
              <Route
                path="/istanbul-kentsel-donusum"
                element={<IstanbulServicesPage />}
              />
              <Route
                path="/projeler/gungoren-akincilar-projesi"
                element={<GungorenAkincilarProject />}
              />
              <Route
                path="/projeler/:projectSlug"
                element={<ProjectDetailPage />}
              />
              <Route
                path="/sikca-sorulan-sorular"
                element={<FaqPage />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
          <FloatingContactButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
