import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter, RouterProvider } from "./lib/router";

// Layout elements
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Home section modules
import { HeroSection } from "./components/home/HeroSection";
import { BrandLogos } from "./components/home/BrandLogos";
import { ServicesSection } from "./components/home/ServicesSection";
import { SubsidyBanner } from "./components/home/SubsidyBanner";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { ProjectGallery } from "./components/home/ProjectGallery";
import { HowItWorks } from "./components/home/HowItWorks";
import { Testimonials } from "./components/home/Testimonials";
import { EnvironmentalImpact } from "./components/home/EnvironmentalImpact";
import { ContactSection } from "./components/home/ContactSection";

// Pages
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { AboutPage } from "./components/pages/AboutPage";
import { SubsidyPage } from "./components/pages/SubsidyPage";
import { ServicePageTemplate } from "./components/services/ServicePageTemplate";

export function AppContent() {
  const { path } = useRouter();

  // Route Scroll to Top on Page Changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [path]);

  // Set Shambhavi Logo as favicon dynamically
  React.useEffect(() => {
    const updateFavicon = () => {
      // Find the navbar logo or any Shambhavi logo SVG in the DOM
      const svgEl = document.querySelector("nav svg") || document.querySelector("svg");
      if (svgEl) {
        const clone = svgEl.cloneNode(true) as SVGGraphicsElement;
        clone.removeAttribute("class");
        // Ensure standard namespace is set
        clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        clone.setAttribute("width", "32");
        clone.setAttribute("height", "50"); // aspect ratio matching size * 1.57
        
        const svgString = new XMLSerializer().serializeToString(clone);
        const base64 = btoa(unescape(encodeURIComponent(svgString)));
        
        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.type = "image/svg+xml";
        link.href = `data:image/svg+xml;base64,${base64}`;
        return true;
      }
      return false;
    };

    // Try immediately
    if (!updateFavicon()) {
      // Retrying if not found immediately (e.g. initial render lag)
      const interval = setInterval(() => {
        if (updateFavicon()) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  // Route Switcher
  const renderContent = () => {
    switch (path) {
      case "/":
        return (
          <div className="space-y-0">
            <HeroSection />
            <BrandLogos />
            <ServicesSection />
            <SubsidyBanner />
            <WhyChooseUs />
            <ProjectGallery limit={5} />
            <HowItWorks />
            <Testimonials />
            <EnvironmentalImpact />
            <ContactSection />
          </div>
        );
      case "/services/residential":
        return (
          <div className="space-y-0">
            <ServicePageTemplate serviceKey="residential" />
            <ContactSection />
          </div>
        );
      case "/services/commercial":
        return (
          <div className="space-y-0">
            <ServicePageTemplate serviceKey="commercial" />
            <ContactSection />
          </div>
        );
      case "/services/agricultural":
        return (
          <div className="space-y-0">
            <ServicePageTemplate serviceKey="agricultural" />
            <ContactSection />
          </div>
        );
      case "/projects":
        return (
          <div className="space-y-0">
            <ProjectsPage />
            <ContactSection />
          </div>
        );
      case "/about":
        return (
          <div className="space-y-0">
            <AboutPage />
            <ContactSection />
          </div>
        );
      case "/subsidy":
        return (
          <div className="space-y-0">
            <SubsidyPage />
            <ContactSection />
          </div>
        );
      case "/contact":
        return (
          <div className="pt-20">
            <ContactSection />
          </div>
        );
      default:
        // Fallback or 404
        return (
          <div className="min-h-screen pt-32 pb-24 px-4 bg-brand-surface text-center flex flex-col items-center justify-center">
            <h1 className="font-display font-black text-4xl text-brand-dark">404</h1>
            <p className="text-gray-500 mt-2">Route not found</p>
            <button
              onClick={() => window.location.hash = "/"}
              className="mt-6 px-6 py-2.5 bg-brand-primary text-white rounded-full font-display text-xs uppercase font-bold"
            >
              Go Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      {/* Dynamic Header Sticky Navigation */}
      <Navbar />

      {/* Main Container Switch Route Animation */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footnote and certified information block */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
