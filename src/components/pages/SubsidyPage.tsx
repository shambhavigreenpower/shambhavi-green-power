import * as React from "react";
import { motion } from "motion/react";
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2, Phone, ClipboardCheck, Info, HelpingHand, ListTodo } from "lucide-react";
import { COMPANY_INFO } from "../../lib/constants";
import { Button } from "../ui/Button";
import { useRouter } from "../../lib/router";

export function SubsidyPage() {
  const { navigate } = useRouter();

  const eligibilityCriteria = [
    "Applicant must be an Indian citizen.",
    "Applicant must own a residential house with a structurally stable roof suitable for solar mounting.",
    "The residence must have an active grid electricity connection (PGVCL/DGVCL/MGVCL/UGVCL) registered under the applicant's name.",
    "No prior solar rooftop subsidy should have been claimed for the same consumer account.",
    "Sufficient shadow-free roof space is required (approx 100 sq.ft per kW requested)."
  ];

  const subsidySlabs = [
    { capacity: "1 kW Capacity", rate: "₹30,000 per kW", total: "₹30,000 Subsidy", desc: "Best suited for small apartments or single-appliance households." },
    { capacity: "2 kW Capacity", rate: "₹30,000 per kW", total: "₹60,000 Subsidy", desc: "Most economical per kW rate. Ideal for typical families with general loads." },
    { capacity: "3 kW Capacity", rate: "₹30,000 (up to 2kW) + ₹18,000 (3rd kW)", total: "₹78,000 Subsidy", desc: "Popular selection. Covers double air conditioners and heavy pumps." },
    { capacity: "Above 3 kW", rate: "Flat capped maximum limit", total: "₹78,000 Max Subsidy", desc: "Capped flat amount for larger villas, luxury residences, and estates." }
  ];

  const requiredDocuments = [
    "Latest Grid Electricity Bill (DGVCL / PGVCL etc.)",
    "Aadhar Card of the electricity bill holder",
    "PAN Card or alternative ID proof",
    "A passport-size photo of the owner",
    "Canceled Cheque or Bank Passbook copy (for direct subsidy DBT refund)",
    "Clear photograph of your open shadow-free rooftop structure space"
  ];

  return (
    <div className="bg-brand-surface text-brand-dark pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/30 border border-brand-light/20 text-brand-light font-display text-xs font-bold tracking-widest mb-4">
            <Landmark className="h-4 w-4 text-brand-accent animate-pulse" />
            GOVERNMENT WELFARE DIRECTIVES
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
            National Solar Rooftop Subsidy Scheme
          </h1>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Avail direct financial assistance (DBT) of up to ₹78,000 for your residential solar rooftop. Shambhavi Solar manages 100% of the portal liaisoning and metering approvals.
          </p>
        </div>
      </section>

      {/* 2. What is the Scheme */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block">
              SCHEME OVERVIEW & STATS
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight leading-tight">
              Get Up to 300 Units of Free Electricity Every Month!
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              Launched by the central government, the **National Solar Rooftop Subsidy Scheme** is a revolutionary national initiative designed to provide solar power directly to households. Under this scheme, any qualified homeowner who installs up to 3kW capacity can reduce their utility bill down to nearly zero and receive direct bank credit for surplus exported energy.
            </p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              The program has been fully digitized, allowing citizens to register on a central portal, select a certified installer, submit construction reports, and receive their direct bank refund within 30 days of Net Meter commission.
            </p>
          </div>

          <div className="lg:col-span-5 bg-brand-dark text-white rounded-3xl p-6 md:p-8 border border-brand-primary/10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-xl" />
            <h3 className="font-display font-extrabold text-base md:text-lg text-white mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-brand-accent" />
              Estimated Subsidy Timeline
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed">
              We process approvals swiftly across all active regions. On average, our projects reach live status and receive their final subsidy credits in record time:
            </p>
            <ul className="mt-5 space-y-3 font-display text-xs font-bold text-gray-300">
              <li className="flex justify-between border-b border-brand-primary/20 pb-2">
                <span>Site Survey & Engineering:</span>
                <span className="text-brand-accent">24 Hours</span>
              </li>
              <li className="flex justify-between border-b border-brand-primary/20 pb-2">
                <span>Structural Construction:</span>
                <span className="text-brand-accent">48 Hours</span>
              </li>
              <li className="flex justify-between border-b border-brand-primary/20 pb-2">
                <span>Utility Inspector Audit:</span>
                <span className="text-brand-accent">7 to 10 Days</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>DBT Subsidy Disbursal:</span>
                <span className="text-brand-accent">30 Days</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Subsidy slabs cards */}
      <section className="py-20 px-4 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light block mb-2">
              FINANCIAL BREAKDOWN
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
              Direct Subsidy Slabs
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-400 mt-2">
              The central government has locked down exact rate charts per kilowatt. Review your potential cost refund below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {subsidySlabs.map((slab, idx) => (
              <div
                key={idx}
                className="bg-brand-primary/5 rounded-2xl p-6 border border-brand-primary/10 flex flex-col justify-between hover:border-brand-light/20 transition-all text-center"
              >
                <div>
                  <h3 className="font-display font-extrabold text-white text-base md:text-lg mb-1.5">
                    {slab.capacity}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-normal mb-5">
                    {slab.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-brand-primary/20 pt-4">
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1 font-display">
                    {slab.rate}
                  </div>
                  <span className="font-display font-black text-brand-accent text-sm md:text-base">
                    {slab.total}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Eligibility Checklist & Required Documents */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Eligibility Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-primary/5 shadow-sm space-y-6">
            <h3 className="font-display font-extrabold text-lg md:text-xl text-brand-dark flex items-center gap-2">
              <ClipboardCheck className="h-5.5 w-5.5 text-brand-primary" />
              Eligibility Criteria
            </h3>
            <ul className="space-y-4">
              {eligibilityCriteria.map((crit, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>{crit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents checklist */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-primary/5 shadow-sm space-y-6">
            <h3 className="font-display font-extrabold text-lg md:text-xl text-brand-dark flex items-center gap-2">
              <ListTodo className="h-5.5 w-5.5 text-brand-primary" />
              Documents Required Checklist
            </h3>
            <ul className="space-y-4">
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-xs md:text-sm text-gray-600 font-sans leading-relaxed border-b border-brand-primary/5 pb-2.5 last:border-0 last:pb-0">
                  <span className="h-5.5 w-5.5 rounded-full bg-brand-primary/10 text-brand-primary font-display font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 5. How to Apply with Shambhavi's Help */}
      <section className="py-20 px-4 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="p-4 bg-brand-primary/20 border border-brand-light/20 text-brand-accent rounded-full w-fit mx-auto animate-pulse">
            <HelpingHand className="h-8 w-8" />
          </div>
          
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-tight">
            Apply For Subsidy With Shambhavi
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Bureaucracy can be confusing. Shambhavi Green Power Private Limited acts as your full-service authorized facilitator. We register your roof, upload geo-tagged photos, coordinate regional Discom net metering inspections, and ensure your ₹78,000 DBT credit transfers securely into your bank.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => navigate("/contact")}
            >
              Apply With Our Help
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full font-display font-bold text-sm transition-all shadow-md text-white"
            >
              <Phone className="h-4.5 w-4.5 text-brand-accent animate-bounce" />
              Call Owner: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
