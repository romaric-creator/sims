import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  Car,
  Plane,
  HardHat,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenConsultant: () => void;
}

const departments = [
  { name: "SafeFlight Language Center", icon: Globe, route: "/safeflight-language" },
  { name: "SafeAuto Ecole", icon: Car, route: "/safeauto" },
  { name: "SafeFlight Consulting", icon: Plane, route: "/safeflight-consulting" },
  { name: "Academie Professionnelle BTP", icon: HardHat, route: "/academie-btp" },
];

const navLinks = [
  { name: "Accueil", route: "/" },
  { name: "Nos Departements", route: "#departments" },
  { name: "Galerie", route: "/galerie" },
  { name: "A propos", route: "/a-propos" },
  { name: "Contact", route: "/contact" },
];

export default function Navbar({ onOpenConsultant }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const isActive = (route: string) => {
    if (route === "/") return location.pathname === "/";
    return location.pathname.startsWith(route);
  };

  const isDepartmentActive = () => {
    return departments.some((dept) => location.pathname.startsWith(dept.route));
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#bcc9c8]/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/image.png"
              alt="SIMS BTP Holdings"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-[#006767]">
                SIMS BTP
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#006767]">
                Holdings
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) =>
              link.name === "Nos Departements" ? (
                <li
                  key={link.name}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`relative flex items-center gap-1 text-sm transition-colors ${
                      isDepartmentActive()
                        ? "text-[#006767] font-bold"
                        : "text-gray-700 hover:text-[#006767]"
                    }`}
                  >
                    Nos Departements
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isDepartmentActive() && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00CED1] rounded-full" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-[#bcc9c8]/30 p-2 min-w-[280px]"
                      >
                        {departments.map((dept) => (
                          <Link
                            key={dept.route}
                            to={dept.route}
                            onClick={() => setIsDropdownOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f0f4f4] transition ${
                              isActive(dept.route)
                                ? "bg-[#f0f4f4] text-[#006767] font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            <dept.icon size={18} className="text-[#006767]" />
                            <span className="flex-1 text-sm">{dept.name}</span>
                            <ChevronRight size={14} className="text-gray-400" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.name} className="relative">
                  <Link
                    to={link.route}
                    className={`relative text-sm transition-colors ${
                      isActive(link.route)
                        ? "text-[#006767] font-bold"
                        : "text-gray-700 hover:text-[#006767]"
                    }`}
                  >
                    {link.name}
                    {isActive(link.route) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00CED1] rounded-full" />
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenConsultant}
              className="flex items-center gap-1.5 px-3 py-2 bg-cyan-50/60 border border-[#00CED1]/30 hover:bg-cyan-100 rounded-lg text-xs font-semibold text-[#006767] transition-colors"
            >
              <Sparkles size={14} className="text-[#00CED1]" />
              Conseil IA
            </button>
            <Link
              to="/contact"
              className="bg-[#006767] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-[#008282] transition-colors"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-[#bcc9c8]/30 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.name === "Nos Departements" ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isDepartmentActive()
                          ? "text-[#006767] font-bold bg-cyan-50/40"
                          : "text-gray-700 hover:bg-[#f0f4f4]"
                      }`}
                    >
                      Nos Departements
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-1 space-y-1">
                            {departments.map((dept) => (
                              <Link
                                key={dept.route}
                                to={dept.route}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                  isActive(dept.route)
                                    ? "text-[#006767] font-semibold bg-cyan-50/40"
                                    : "text-gray-600 hover:bg-[#f0f4f4]"
                                }`}
                              >
                                <dept.icon size={16} className="text-[#006767]" />
                                {dept.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive(link.route)
                        ? "text-[#006767] font-bold bg-cyan-50/40"
                        : "text-gray-700 hover:bg-[#f0f4f4]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* Mobile buttons */}
              <div className="pt-3 mt-3 border-t border-[#bcc9c8]/30 space-y-2">
                <button
                  onClick={() => {
                    onOpenConsultant();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 bg-cyan-50/60 border border-[#00CED1]/30 hover:bg-cyan-100 rounded-lg text-xs font-semibold text-[#006767] transition-colors"
                >
                  <Sparkles size={14} className="text-[#00CED1]" />
                  Conseil IA
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-[#006767] text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:bg-[#008282] transition-colors"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
