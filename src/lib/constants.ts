import imgResidential1 from "../../images/20250804_121026.jpg.jpeg";
import imgTechnician1 from "../../images/20250804_121038.jpg.jpeg";
import imgTechnician2 from "../../images/20250815_120051.jpg.jpeg";
import imgCommercial1 from "../../images/20250815_120100.jpg.jpeg";
import imgCustomerGujarat from "../../images/IMG-20250623-WA0068.jpg.jpeg";
import imgGroundMounted1 from "../../images/IMG-20250807-WA0042.jpg.jpeg";
import imgGroundMounted2 from "../../images/IMG-20250807-WA0046.jpg (1).jpeg";
import imgCommercial2 from "../../images/IMG-20250815-WA0002.jpg.jpeg";

export const COMPANY_INFO = {
  name: "Shambhavi Green Power Private Limited",
  shortName: "Shambhavi Green Power",
  tagline: "Green Energy. Bright Future.",
  subTagline: "Solar Energy For Every Roof",
  owner: "Dr. Krushik Sheladiya",
  phone: "+91 96629 87211",
  phoneRaw: "919662987211",
  whatsapp: "https://wa.me/919662987211?text=Hello%20Shambhavi%20Green%20Power%2C%20I%20am%20interested%20in%20your%20solar%20services.%20Please%20provide%20more%20details.",
  email: "info@shambhavigreenpower.com",
  address: "38, Ratnmani Industrial Estate, Singarva Kathwada Road, Kathwada, Ahmedabad",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9168925203874!2d72.67878837588147!3d23.026859316131372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8706fb50c777%3A0x892a06593a623bfd!2sRatnamani%20Industrial%20Estate%2C%20Ahmedabad%2C%20Gujarat%20382348!5e0!3m2!1sen!2sin!4v1719688190000!5m2!1sen!2sin",
  hours: "",
};

export const PARTNER_BRANDS = [
  { name: "Waaree Energies", description: "India's largest solar panel manufacturer with tier-1 rating." },
  { name: "Adani Solar", description: "Vertically integrated solar cell and module manufacturer." },
  { name: "Goldi Solar", description: "Leading MNC solar brand known for high efficiency modules." },
  { name: "Rayzon Solar", description: "State-of-the-art automatic manufacturing facility with international standards." },
  { name: "Vikram Solar", description: "Globally acclaimed solar manufacturer with 25+ years expertise." },
];

export const STATIC_IMAGES = {
  wirePolycab: imgGroundMounted2,
  technicianWork: imgTechnician1,
  rooftopResidential: imgResidential1,
  junctionBox: imgCommercial2,
  commercialElevated: imgCommercial1,
  agriculturalFarm: imgGroundMounted1,
};

export const PROJECT_GALLERY = [
  {
    id: "proj1",
    title: "Residential Rooftop Solar System",
    description: "8.8 kW high-efficiency residential array on an elevated structure to preserve roof space.",
    caption: "Elevated Residential Setup — 8.8 kW",
    location: "Kathwada, Ahmedabad",
    type: "residential",
    size: "8.8 kW",
    date: "August 2025",
    image: imgResidential1,
  },
  {
    id: "proj2",
    title: "Expert Structural Mounting & Mechanical Fit",
    description: "Our certified technician executing final structural adjustments and mechanical panel alignment.",
    caption: "Precision Engineering & Mounting",
    location: "Singarva, Ahmedabad",
    type: "residential",
    size: "6 kW",
    date: "August 2025",
    image: imgTechnician1,
  },
  {
    id: "proj3",
    title: "High-Rise Elevated Structural Rooftop Installation",
    description: "Advanced mechanical installation at high heights by our trained team, featuring robust elevated metal frames.",
    caption: "High-Altitude Structure Adjustment",
    location: "Nikol, Ahmedabad",
    type: "commercial",
    size: "25 kW",
    date: "August 2025",
    image: imgTechnician2,
  },
  {
    id: "proj4",
    title: "Large Commercial Elevated Rooftop Solar Array",
    description: "A high-capacity elevated rooftop installation over commercial building terrace, designed for maximum solar exposure.",
    caption: "Commercial Rooftop Solar Grid — 30 kW",
    location: "Vastral, Ahmedabad",
    type: "commercial",
    size: "30 kW",
    date: "August 2025",
    image: imgCommercial1,
  },
  {
    id: "proj5",
    title: "Successful Residential Subsidy Setup in Khamba",
    description: "Fully operational domestic rooftop solar system under the National Subsidy Scheme, delivering 90% savings.",
    caption: "Residential Installation — 3 kW System",
    location: "Khamba, Gujarat",
    type: "residential",
    size: "3 kW",
    date: "June 2025",
    image: imgCustomerGujarat,
  },
  {
    id: "proj6",
    title: "Ground-Mounted Solar Park Installation",
    description: "Utility-scale ground mounted solar array with high wind resistance and optimized sun tracking angle.",
    caption: "Ground-Mounted Agri-Solar Grid — 100 kW",
    location: "Singarva, Ahmedabad",
    type: "agricultural",
    size: "100 kW",
    date: "August 2025",
    image: imgGroundMounted1,
  },
  {
    id: "proj7",
    title: "Utility Scale Ground Solar Array",
    description: "Ground-mounted solar infrastructure designed for large-scale agricultural feeds or industrial zones.",
    caption: "Multi-Row Ground Mount Park",
    location: "Kathwada, Ahmedabad",
    type: "agricultural",
    size: "150 kW",
    date: "August 2025",
    image: imgGroundMounted2,
  },
  {
    id: "proj8",
    title: "Elevated Residential Terrace Solar Infrastructure",
    description: "Close-up view of structural steel frames supporting high-efficiency mono PERC half-cut modules.",
    caption: "Elevated Terrace System — 15 kW",
    location: "Nikol, Ahmedabad",
    type: "residential",
    size: "15 kW",
    date: "August 2025",
    image: imgCommercial2,
  },
];

export const SERVICE_DATA = {
  residential: {
    title: "Residential Solar Systems",
    subTitle: "Home Solar Solutions",
    description: "Reduce your monthly house electricity bills by up to 90% and secure your family's future with direct government subsidy.",
    detailedDescription: "Transform your home into an independent clean power station with Shambhavi's residential solar installation. Under the Government's National Rooftop Solar Subsidy Scheme, homeowners can avail a direct financial subsidy of up to ₹78,000, bringing down the capital cost drastically. We manage the entire end-to-end flow: from rooftop structure design to government liaisoning, net meter integration, and 25-year panel performance guarantees.",
    heroImage: STATIC_IMAGES.rooftopResidential,
    subsidyBadge: "₹30,000/kW subsidy up to 2kW",
    features: [
      "Custom Rooftop Installation (1kW to 10kW+)",
      "Grid-Tied (On-Grid) net metering system",
      "Robust elevated structural options to preserve roof space",
      "Direct National Rooftop Solar Subsidy approval and handling",
      "25+ Year Performance Warranty on Tier-1 Solar Panels",
      "Full lifetime support, free cleaning training, and safety checks",
    ],
    pricingOptions: [
      { size: "2 kW System", subsidy: "₹60,000 Gov. Subsidy", savings: "₹1,500 - 1,800 / Month", description: "Ideal for small homes with 1 AC and general appliances." },
      { size: "3 kW System", subsidy: "₹78,000 Gov. Subsidy", savings: "₹2,500 - 3,000 / Month", description: "Most popular. Ideal for medium families with 2 ACs." },
      { size: "5 kW System", subsidy: "₹78,000 Gov. Subsidy", savings: "₹4,500 - 5,000 / Month", description: "For large homes with multiple ACs, water heaters, and EV charger." },
    ],
    specs: [
      { name: "Solar Panel Brands", value: "Waaree / Adani / Goldi / Rayzon" },
      { name: "Panel Technology", value: "Mono PERC Half-Cut / Bifacial (DCR Certified)" },
      { name: "Inverter Type", value: "Grid-Tied String Inverter (Growatt / Solis / Polycab)" },
      { name: "System Lifetime", value: "25 to 30 Years" },
      { name: "Warranty", value: "25-year panel performance, 5-year inverter warranty" },
      { name: "Average ROI", value: "3.5 - 4 Years" },
    ],
    steps: [
      { num: 1, title: "Phone/WhatsApp Inquiry", text: "Contact Dr. Krushik Sheladiya at +91 96629 87211 to share your latest utility bill." },
      { num: 2, title: "Free Engineering Site Visit", text: "Our solar engineer visits your house to assess shadow-free roof area, structure requirements, and orientation." },
      { num: 3, title: "Government Subsidy Registration", text: "We register your home profile on the National Portal for Rooftop Solar to secure your subsidy." },
      { num: 4, title: "Professional Setup & Safety Check", text: "Within 2-3 days, our certified installers complete structural mounting, high-efficiency wiring, and earthing." },
      { num: 5, title: "Net Metering & Handover", text: "Utility inspectors install the bi-directional Net Meter, system goes live, and subsidy is directly credited to your bank." },
    ],
    faqs: [
      { q: "What is the National Rooftop Solar Subsidy Scheme?", a: "It is an ambitious central government scheme providing a direct subsidy of up to ₹78,000 for installing solar systems on residential houses, aiming to provide substantial units of free electricity monthly." },
      { q: "How much shadow-free space is required?", a: "Approximately 100 square feet of flat, shadow-free roof area is required per 1 kW of solar system capacity." },
      { q: "What happens on rainy or cloudy days?", a: "On cloudy days, solar panels still generate electricity from diffused sunlight, though at a reduced rate. Because the system is 'Grid-Tied', your home automatically draws power from the regular grid seamlessly, so you face zero outages." },
      { q: "How long is the panel warranty?", a: "The panels come with a 10-year manufacturing defect warranty and a 25-year linear power output performance warranty (minimum 80% generation guaranteed at Year 25)." },
      { q: "Who handles the government paperwork for the subsidy?", a: "Shambhavi Green Power handles 100% of the document uploads, utility approvals, installation reports, and portal sync so you don't have to worry about any bureaucratic processes." }
    ]
  },
  commercial: {
    title: "Commercial & Industrial Solar",
    subTitle: "Business Energy Solutions",
    description: "Substantially lower your business operational expenses, enjoy heavy tax benefits, and project a carbon-neutral brand image.",
    detailedDescription: "For factories, schools, cold storages, hospitals, and commercial buildings, electricity forms a major portion of monthly overheads. Commercial solar panels pay for themselves within 4 to 5 years, after which they provide free energy for over two decades. Shambhavi designs highly customized commercial arrays with premium structural load engineering, accelerated tax depreciation advisory, and active real-time software monitoring dashboards.",
    heroImage: STATIC_IMAGES.commercialElevated,
    subsidyBadge: "Accelerated Depreciation & Tax Benefits",
    features: [
      "System Capacities from 10kW to 1MW+ designs",
      "Specialized elevated industrial structures engineered for high-velocity winds",
      "40% Accelerated Depreciation tax benefits for corporations",
      "Saves significantly in monthly power tariff under commercial utility brackets",
      "Real-time mobile/desktop telemetry dashboard for generation tracking",
      "Dedicated preventive maintenance, monthly chemical panel washing, and thermal audits",
    ],
    pricingOptions: [
      { size: "10 kW System", subsidy: "40% Accelerated Depreciation Eligible", savings: "₹10,000 - 12,000 / Month", description: "Excellent for small commercial shops, schools, and offices." },
      { size: "25 kW System", subsidy: "40% Accelerated Depreciation Eligible", savings: "₹26,000 - 30,000 / Month", description: "Perfect for larger office blocks, showrooms, and small hospitals." },
      { size: "100 kW System", subsidy: "Tax Rebates & Incentives Apply", savings: "₹1,10,000 - 1,30,000 / Month", description: "Engineered for medium manufacturing plants, massive cold storages, and mills." },
    ],
    specs: [
      { name: "Solar Panel Brands", value: "Waaree / Vikram Solar / Adani (Bifacial)" },
      { name: "Inverter Brands", value: "Sungrow / Kehua / Polycab High-Cap" },
      { name: "Mounting Structure", value: "HDG (Hot Dip Galvanized) Iron or Premium Aluminum Profile" },
      { name: "Tax Incentives", value: "Section 32 of IT Act (40% depreciation) + GST tax credits" },
      { name: "Monitoring System", value: "GPRS/Wi-Fi connected cloud dashboard with automated daily reports" },
      { name: "Structural Safety", value: "Certified up to 150 km/h wind load velocity" },
    ],
    steps: [
      { num: 1, title: "Load Profile Analysis", text: "We analyze your 12-month commercial energy billing cycle and peak active demand loads (MD) to optimize system capacity." },
      { num: 2, title: "Structural Load Testing", text: "Our mechanical engineers evaluate your roof slab or industrial metal sheet structures to ensure it can support 15kg/sq.m safely." },
      { num: 3, title: "Detailed 3D Design Layout", text: "We prepare detailed CAD/3D layouts showing panel placements, angle optimization, cable routes, and maintenance walkways." },
      { num: 4, title: "Fast-Track Turnkey Installation", text: "Our commercial construction team deploys high-volume panel arrays, safety walkways, heavy-duty DCDB/ACDB, and robust lightning protection." },
      { num: 5, title: "Liaisoning & SCADA Integration", text: "We complete CEIG (Electrical Inspector) approvals, net-metering commissioning, and hook the system up to your SCADA/cloud monitoring software." },
    ],
    faqs: [
      { q: "Can my business claim tax benefits on solar installation?", a: "Yes! Commercial and industrial entities can claim 40% Accelerated Depreciation in the first year under relevant tax regulations, plus claim input GST tax credits, substantially reducing net cost." },
      { q: "What is the typical Return on Investment (ROI)?", a: "Commercial systems typically have an ROI period of 3 to 4.5 years, depending on your current utility tariff bracket. Beyond this, electricity is virtually free for 20+ years." },
      { q: "How are panels cleaned on high industrial roofs?", a: "We install custom metallic maintenance pathways (walkways) and robust high-pressure water pipelines across the roof. We also offer automated sprinkler washing systems or customized robotic cleaning services." },
      { q: "Do you provide safety certifications?", a: "Yes, all structures are designed and stamped by structural engineers to withstand severe high-velocity coastal wind loads (up to 150-180 km/h), with certified standard hot-dip galvanized steel." },
      { q: "Can we install solar panels on curved or slanted metal sheets?", a: "Absolutely. We utilize special non-penetrating aluminum clamps that securely hold solar panels on standing-seam, trapezoidal, or curved industrial roofs without causing any water leakage or structural drilling." }
    ]
  },
  agricultural: {
    title: "Agricultural Solar Pumps",
    subTitle: "Farming Irrigation Solutions",
    description: "Eliminate expensive diesel costs, gain day-time farm irrigation independence, and dramatically boost your crop yield.",
    detailedDescription: "Irrigation is the lifeblood of farming. Relying on erratic grid electricity during cold night shifts, or expensive diesel generators, hurts agricultural yield and income. Shambhavi provides robust solar water pumps and grid-interactive solar systems tailored for farmers across the region. We support Solar Pump subsidy programs and design systems fully compatible with national grid networks.",
    heroImage: STATIC_IMAGES.agriculturalFarm,
    subsidyBadge: "Agricultural Subsidy eligible — saves 90% fuel costs",
    features: [
      "Solar Water Pump setups from 1HP to 10HP (Submersible & Monoblock)",
      "Highly durable tracking mounting structures to capture maximum sun",
      "Direct integration with advanced drip and sprinkler irrigation lines",
      "Saves on diesel fuel and grid generator costs substantially",
      "Consistent day-time power allows safe crop watering without night shifts",
      "Fully compatible with all major national grid networks",
    ],
    pricingOptions: [
      { size: "3 HP Solar Pump", subsidy: "Govt Slabs Apply (Saves ~90%)", savings: "₹4,000 - 5,000 / Month", description: "Best for small farms with shallow water levels." },
      { size: "5 HP Solar Pump", subsidy: "Govt Slabs Apply (Saves ~90%)", savings: "₹6,000 - 8,000 / Month", description: "Most popular. For medium farms and deep wells." },
      { size: "7.5 / 10 HP Pump", subsidy: "Govt Slabs Apply (Saves ~90%)", savings: "₹10,000+ / Month", description: "Heavy-duty irrigation for vast farms or shared neighborhood water wells." },
    ],
    specs: [
      { name: "Pump Motor Types", value: "High-Efficiency AC/DC Submersible and Monoblock" },
      { name: "Solar Controller/Drive", value: "MPPT Smart Variable Frequency Drive (VFD) with remote app" },
      { name: "Structure Quality", value: "Dual-axis manual/auto-tilt galvanized structure for maximum yield" },
      { name: "National Grid Sync", value: "Fully utility-grid compliant" },
      { name: "Dry Run Protection", value: "Automated sensor-based safety to prevent pump damage" },
      { name: "Average Lifespan", value: "20+ Years for pump controller, 25 Years for panels" },
    ],
    steps: [
      { num: 1, title: "Water Source Evaluation", text: "We check your open well, borewell depth, water yield rate, and daily water volume requirement to match the HP rating." },
      { num: 2, title: "Sizing and Controller Selection", text: "We pick the right high-performance DC Submersible pump and matching MPPT Solar Controller for maximum discharge." },
      { num: 3, title: "Robust Ground Mounting", text: "We construct sturdy concrete ground foundations and install heavy-gauge galvanized iron frame structures that stand strong against high winds." },
      { num: 4, title: "Pump Lowering & MPPT Wiring", text: "Our technicians lower the pump, complete safe underground cabling, and connect high-power solar controller drives." },
      { num: 5, title: "Activation & Farm Training", text: "The pump starts discharging water immediately during daylight hours. We guide you on simple filter cleaning and mobile control app use." },
    ],
    faqs: [
      { q: "How does a solar water pump work?", a: "Solar panels absorb sunlight and convert it into DC electricity. This power goes to a Variable Frequency Drive (VFD) controller which operates a submersible AC or DC pump directly without needing a grid connection or batteries." },
      { q: "Is a battery required to run the pump?", a: "No! The system runs 'direct-on-sun' without expensive batteries. This reduces maintenance costs to nearly zero. The water is simply pumped directly into your farm pond or overhead tanks during the day." },
      { q: "Are these systems eligible for government subsidy schemes?", a: "Yes, we facilitate registrations under various central and state agricultural schemes, which vary by season. We provide all the necessary paperwork, bills, and certifications required to apply." },
      { q: "What is dry run protection?", a: "Our MPPT controllers have built-in sensor intelligence. If water in your borewell drops below critical levels, the controller automatically stops the pump to prevent overheating and motor burnout." },
      { q: "Can a solar farm pump feed excess power back to the grid?", a: "Yes, under specific solar feeder schemes, grid-connected farm solar pumps can export surplus electricity back to utility providers, generating extra income for farmers." }
    ]
  }
};

export const REVIEWS = [
  {
    name: "Rajesh Patel",
    location: "Central District",
    service: "Residential — 5kW System",
    stars: 5,
    text: "Shambhavi Solar installed our 5kW system in just 2 days. Our electricity bill dropped significantly. Dr. Krushik and team are extremely professional and handled all the utility net metering paperwork.",
  },
  {
    name: "Farmer Bhavesh Jadav",
    location: "Regional Suburb",
    service: "Agricultural — 5HP Solar Pump",
    stars: 5,
    text: "Our diesel pump cost us a lot of money every month. After installing Shambhavi's 5HP solar water pump, our cost is nearly zero. Irrigation is now during the safe daytime, no more night shifts. Best investment!",
  },
  {
    name: "Manish Shah",
    location: "Metro Industrial Zone",
    service: "Commercial — 50kW Rooftop Array",
    stars: 5,
    text: "Extremely happy with the financial return on our factory solar system. We will achieve absolute ROI in under 4 years, and then pure energy savings. Shambhavi Solar is by far the most reliable solar vendor in the region.",
  },
];

export const WHY_CHOOSE_US_CARDS = [
  { icon: "DollarSign", title: "90% Bill Savings", desc: "Reduce your household or commercial electricity bills drastically from the first month." },
  { icon: "FileText", title: "Govt. Subsidy Help", desc: "We handle 100% of the portal registration, utility documents, and subsidy release paperwork." },
  { icon: "Wrench", title: "Expert Installation", desc: "Our certified in-house engineering team ensures flawless mechanical structures and wiring." },
  { icon: "Award", title: "Premium Brands", desc: "Authorized installation partner for the best brands: Waaree, Adani, Goldi, and Vikram Solar." },
  { icon: "ShieldCheck", title: "25+ Year Warranty", desc: "Long-term peace of mind with 10-year product and 25-year linear performance warranties." },
  { icon: "PhoneCall", title: "24/7 Service Support", desc: "Always available. Direct phone access to Dr. Krushik Sheladiya and team for rapid diagnostic support." },
];

export const FAQS_HOME = [
  { q: "What is the National Rooftop Solar Subsidy Scheme?", a: "It is the central government's direct subsidy scheme for residential solar power. It offers ₹30,000 per kW up to 2kW, and ₹18,000 for the 3rd kW, capping out at a maximum subsidy of ₹78,000." },
  { q: "How can I get a quote for a solar rooftop?", a: "Each home and roof structure is unique. Contact us for a free site engineering visit and customized quotation. As an authorized channel partner, we handle 100% of the flat government subsidy processing (up to ₹78,000 direct bank transfer) and Net Metering approvals to make the transition stress-free." },
  { q: "How long does the installation take?", a: "Residential setups are completed in 1 to 3 days. Commercial setups depend on structure complexity and average 1 to 2 weeks." },
  { q: "Does Shambhavi operate in my area?", a: "Yes, we install premium solar systems across all major districts and regions. Contact us to confirm operations in your precise neighborhood." },
];
