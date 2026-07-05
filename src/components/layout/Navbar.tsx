import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { useRouter } from "../../lib/router";
import { COMPANY_INFO } from "../../lib/constants";
import { Button } from "../ui/Button";
import { ShambhaviLogo } from "../ui/ShambhaviLogo";

export function Navbar() {
  const { path, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);

  // Monitor page scrolling for glassy transition
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [path]);

  const navLinks = [
    { label: "Home", path: "/" },
    {
      label: "Solutions",
      dropdown: [
        { label: "Residential Solar", path: "/services/residential" },
        { label: "Commercial Solar", path: "/services/commercial" },
        { label: "Agricultural Solar", path: "/services/agricultural" },
      ],
    },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
    { label: "Government Subsidy", path: "/subsidy" },
  ];

  const handleLinkClick = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? "bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
            : "bg-brand-dark/40 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo Frame */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <ShambhaviLogo size={60} className="group-hover:scale-105" />
            
            <div className="flex flex-col">
              <span className="font-display font-black text-white text-lg md:text-xl leading-none tracking-tight">
                SHAMBHAVI
              </span>
              <span className="font-sans text-[10px] md:text-[11px] font-black text-brand-light tracking-widest mt-1 uppercase">
                GREEN POWER
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors py-2 cursor-pointer">
                      {link.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-1.5 w-52 bg-brand-dark/95 backdrop-blur-md border border-white/10 rounded-xl p-2.5 shadow-xl flex flex-col gap-1"
                        >
                          {link.dropdown.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleLinkClick(sub.path)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-white/80 hover:text-white hover:bg-brand-primary/20 transition-all ${
                                path === sub.path ? "bg-brand-primary/30 text-brand-accent" : ""
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.path!)}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative py-2 ${
                    path === link.path
                      ? "text-brand-accent font-extrabold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {path === link.path && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[10px] text-brand-light font-bold bg-brand-primary/20 border border-brand-light/20 px-2.5 py-1 rounded-full flex items-center gap-1 select-none">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-accent" />
              Utility Approved Installer
            </span>

            <Button
              variant="accent"
              size="sm"
              onClick={() => navigate("/contact")}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu Overlays */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 top-[60px] bg-brand-dark/95 backdrop-blur-lg z-40 lg:hidden p-6 flex flex-col justify-between overflow-y-auto font-sans"
          >
            <div className="space-y-6">
              {navLinks.map((link, idx) => {
                if (link.dropdown) {
                  return (
                    <div key={idx} className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-light/50 block">
                        {link.label}
                      </span>
                      <div className="pl-4 flex flex-col gap-3.5">
                        {link.dropdown.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleLinkClick(sub.path)}
                            className={`text-left text-base font-bold transition-all ${
                              path === sub.path ? "text-brand-accent" : "text-white"
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.path!)}
                    className={`w-full text-left text-lg font-black tracking-tight ${
                      path === link.path ? "text-brand-accent" : "text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact Helplines Panel */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <span className="text-[10px] text-brand-light font-bold bg-brand-primary/25 border border-brand-light/25 px-3 py-1 rounded-full inline-block">
                Registered Central Rooftop Installer
              </span>
              
              <div className="flex gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-brand-primary hover:bg-brand-light text-white font-display text-xs font-bold rounded-xl transition-all"
                >
                  <Phone className="h-4 w-4" /> Call Helpline
                </a>
                
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-[#25D366] text-white font-display text-xs font-bold rounded-xl transition-all"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
