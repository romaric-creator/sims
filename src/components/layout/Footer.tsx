import { Link } from "react-router-dom";
import { Facebook, Linkedin, MapPin, Mail, Phone, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenConsultant: () => void;
}

export default function Footer({ onOpenConsultant }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#DFE3E3] border-t border-[#bcc9c8]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/image.png"
                alt="SIMS BTP Holdings"
                className="h-14 w-14 rounded-full"
              />
              <div>
                <span className="font-display font-bold text-lg text-[#006767]">
                  SIMS BTP Holdings
                </span>
                <p className="text-[9px] font-mono tracking-widest uppercase text-[#3D4949]">
                  L'Excellence Pluridisciplinaire
                </p>
              </div>
            </div>
            <p className="text-sm text-[#3D4949]">
              SIMS BTP Holdings reunit formation linguistique, auto-ecole, conseil en immigration et formation professionnelle BTP pour construire votre avenir.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/50 border border-[#bcc9c8]/30 text-[#006767] hover:bg-[#006767] hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/50 border border-[#bcc9c8]/30 text-[#006767] hover:bg-[#006767] hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Nos Departements */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#006767] uppercase tracking-wider mb-6">
              Nos Departements
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/safeflight-language"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  SafeFlight Language Center
                </Link>
              </li>
              <li>
                <Link
                  to="/safeauto"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  SafeAuto Ecole
                </Link>
              </li>
              <li>
                <Link
                  to="/safeflight-consulting"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  SafeFlight Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/academie-btp"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  Academie BTP
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Liens Rapides */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#006767] uppercase tracking-wider mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  to="/galerie"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenConsultant}
                  className="text-[#3D4949] hover:text-[#006767] hover:font-semibold transition"
                >
                  Assistant IA
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#006767] uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#006767] shrink-0 mt-0.5" />
                <span className="text-sm text-[#3D4949]">
                  Pharmacie de la Logpom, Douala, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#006767] shrink-0" />
                <a
                  href="mailto:contact@sims-btp.com"
                  className="text-sm text-[#3D4949] hover:text-[#006767] transition"
                >
                  contact@sims-btp.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#006767] shrink-0" />
                <a
                  href="tel:+237693010342"
                  className="text-sm text-[#3D4949] hover:text-[#006767] transition font-mono font-semibold"
                >
                  +237 693 01 03 42
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#bcc9c8]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex justify-between items-center">
          <p className="text-sm text-[#3D4949]">
            &copy; 2026 SIMS BTP Holdings. Tous droits reserves.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#006767] text-white hover:bg-[#00CED1] hover:scale-105 transition"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
