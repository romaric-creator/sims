import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ConsultantAI from "./components/ConsultantAI";
import WhatsAppButton from "./components/shared/WhatsAppButton";

const HoldingHome = lazy(() => import("./components/pages/HoldingHome"));
const AboutGroup = lazy(() => import("./components/pages/AboutGroup"));
const LanguageCenter = lazy(() => import("./components/pages/LanguageCenter"));
const DrivingSchool = lazy(() => import("./components/pages/DrivingSchool"));
const Consulting = lazy(() => import("./components/pages/Consulting"));
const BTPAcademy = lazy(() => import("./components/pages/BTPAcademy"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Gallery = lazy(() => import("./components/pages/Gallery"));

function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center py-32">
      <div className="w-12 h-12 border-4 border-[#00CED1] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  const [consultantOpen, setConsultantOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFA] font-sans antialiased selection:bg-[#00CED1]/30 text-[#171d1c]">
      <Navbar onOpenConsultant={() => setConsultantOpen(true)} />
      <main className="flex-1 w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HoldingHome />} />
            <Route path="/a-propos" element={<AboutGroup />} />
            <Route path="/safeflight-language" element={<LanguageCenter />} />
            <Route path="/safeauto" element={<DrivingSchool />} />
            <Route path="/safeflight-consulting" element={<Consulting />} />
            <Route path="/academie-btp" element={<BTPAcademy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galerie" element={<Gallery />} />
          </Routes>
        </Suspense>
      </main>
      <ConsultantAI isOpen={consultantOpen} onClose={() => setConsultantOpen(false)} />
      <Footer onOpenConsultant={() => setConsultantOpen(true)} />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
