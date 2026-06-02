import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/project";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import FloatingContactButtons from "./components/FloatingContactButtons";

import bgImage from "./assets/bgimage.jpg";
import { HelmetProvider } from "react-helmet-async";
import PageLoader from "./components/pageLoader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minimumLoaderTime = 900;
    const fallbackTime = 5000;
    const startedAt = Date.now();
    let finished = false;
    let releaseTimer: ReturnType<typeof setTimeout>;

    const releaseLoader = () => {
      if (finished) return;
      finished = true;

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, minimumLoaderTime - elapsed);
      releaseTimer = setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      releaseLoader();
    } else {
      window.addEventListener("load", releaseLoader, { once: true });
    }

    const fallbackTimer = setTimeout(releaseLoader, fallbackTime);

    return () => {
      window.removeEventListener("load", releaseLoader);
      clearTimeout(fallbackTimer);
      clearTimeout(releaseTimer);
    };
  }, []);

  if (loading) return <PageLoader />;

  return (
    <HelmetProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f7f7f2]">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full select-none object-cover opacity-70"
          />
        </div>
        <div className="pointer-events-none fixed inset-0 z-0 bg-white/20" />
        <Router>
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Project />} />
            </Routes>
            <Footer />
            <FloatingContactButtons />
          </div>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
