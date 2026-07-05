import * as React from "react";

interface PartnerLogoProps {
  name: string;
  className?: string;
  height?: number;
}

export function PartnerLogo({ name, className = "", height = 32 }: PartnerLogoProps) {
  const brandNameLower = name.toLowerCase();

  // 1. WAAREE ENERGY LOGO
  if (brandNameLower.includes("waaree")) {
    return (
      <svg
        height={height}
        viewBox="0 0 160 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Custom premium typography recreation of WAAREE */}
        <text
          x="10"
          y="30"
          fontFamily="'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#15803D"
          letterSpacing="1"
        >
          WAAREE
        </text>
        <rect x="10" y="36" width="102" height="2" fill="#EF4444" />
        <text
          x="12"
          y="43"
          fontFamily="sans-serif"
          fontWeight="700"
          fontSize="7"
          fill="#475569"
          letterSpacing="1.2"
        >
          ONE WITH THE SUN
        </text>
        {/* Abstract sun icon at the end */}
        <circle cx="132" cy="22" r="10" fill="#EF4444" />
        <circle cx="132" cy="22" r="6" fill="#FBBF24" />
        <path d="M132 8 L132 12 M132 32 L132 36 M118 22 L122 22 M142 22 L146 22" stroke="#EF4444" strokeWidth="2" />
      </svg>
    );
  }

  // 2. ADANI SOLAR LOGO
  if (brandNameLower.includes("adani")) {
    return (
      <svg
        height={height}
        viewBox="0 0 160 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* adani styled wordmark: blue logo font with its signature purple subtext */}
        <text
          x="10"
          y="28"
          fontFamily="'Inter', 'Helvetica Neue', sans-serif"
          fontWeight="900"
          fontSize="24"
          fill="#1E3A8A"
          letterSpacing="-1.2"
        >
          adani
        </text>
        {/* Colored curve over the 'i' */}
        <path d="M60 12 C62 8, 66 8, 68 12" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
        <text
          x="12"
          y="42"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="11"
          fill="#7C3AED"
          letterSpacing="4"
        >
          SOLAR
        </text>
      </svg>
    );
  }

  // 3. GOLDI SOLAR LOGO
  if (brandNameLower.includes("goldi")) {
    return (
      <svg
        height={height}
        viewBox="0 0 160 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* GOLDI wordmark with its iconic central red diamond sparkle */}
        <text
          x="10"
          y="26"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="20"
          fill="#1E40AF"
          letterSpacing="1.5"
        >
          GOLDI
        </text>
        {/* Red diamond sparkle */}
        <path d="M102 18 L106 12 L110 18 L106 24 Z" fill="#EF4444" />
        <text
          x="12"
          y="40"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="10"
          fill="#1E3A8A"
          letterSpacing="5"
        >
          SOLAR
        </text>
      </svg>
    );
  }

  // 4. RAYZON SOLAR LOGO
  if (brandNameLower.includes("rayzon")) {
    return (
      <svg
        height={height}
        viewBox="0 0 160 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* RAYZON with clean corporate lines */}
        <text
          x="10"
          y="28"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="19"
          fill="#0891B2"
          letterSpacing="1"
        >
          RAYZON
        </text>
        <text
          x="12"
          y="41"
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          fontSize="9"
          fill="#64748B"
          letterSpacing="6"
        >
          SOLAR
        </text>
        {/* Cyan Energy Beam Accent Line */}
        <line x1="114" y1="22" x2="148" y2="22" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 5. VIKRAM SOLAR LOGO
  if (brandNameLower.includes("vikram")) {
    return (
      <svg
        height={height}
        viewBox="0 0 180 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Orange flower/star icon */}
        <g transform="translate(10, 10)">
          <path d="M10 0 L15 10 L25 15 L15 20 L10 30 L5 20 L-5 15 L5 10 Z" fill="#EA580C" />
          <circle cx="10" cy="15" r="4" fill="#FFFFFF" />
        </g>
        {/* vikramsolar orange font wordmark */}
        <text
          x="44"
          y="24"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="15"
          fill="#EA580C"
          letterSpacing="0"
        >
          vikramsolar
        </text>
        <text
          x="45"
          y="38"
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          fontSize="7"
          fill="#475569"
          letterSpacing="1.2"
        >
          CREATING CLIMATE FOR CHANGE
        </text>
      </svg>
    );
  }

  // Fallback default solar panel badge
  return (
    <div className="flex items-center gap-2">
      <svg className="h-5 w-5 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
      <span className="font-display font-bold text-brand-dark text-sm">{name}</span>
    </div>
  );
}
