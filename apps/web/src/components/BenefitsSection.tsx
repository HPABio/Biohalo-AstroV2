import { useState } from "react";

// ─── Illustrations ────────────────────────────────────────────────────────────

function IllustrationFeedstock() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Dot grid */}
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4,5,6,7].map(col => (
        <circle key={`${row}-${col}`} cx={10 + col * 52} cy={10 + row * 38} r="0.8" fill="rgba(45,212,191,0.08)"/>
      )))}

      {/* Biomass / leaf organic shape */}
      <g transform="translate(30, 50)">
        {/* Leaf silhouette */}
        <path d="M60 140 Q20 100 30 50 Q60 10 100 30 Q140 50 130 100 Q120 140 60 140 Z"
          fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.35)" strokeWidth="1.2"/>
        <path d="M60 140 Q80 90 100 30" stroke="rgba(45,212,191,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
        <path d="M60 140 Q40 100 45 65" stroke="rgba(45,212,191,0.15)" strokeWidth="0.8" strokeDasharray="3,3"/>
        <path d="M60 140 Q90 110 115 75" stroke="rgba(45,212,191,0.15)" strokeWidth="0.8" strokeDasharray="3,3"/>
        {/* Glow at base */}
        <ellipse cx="60" cy="140" rx="20" ry="6" fill="rgba(45,212,191,0.12)"/>
      </g>

      {/* Waste stream pipe / barrel */}
      <g transform="translate(195, 60)">
        {/* Barrel body */}
        <rect x="20" y="30" width="80" height="100" rx="8" fill="rgba(3,18,12,0.9)" stroke="rgba(45,212,191,0.35)" strokeWidth="1.2"/>
        {/* Barrel top ellipse */}
        <ellipse cx="60" cy="30" rx="40" ry="10" fill="rgba(3,18,12,0.95)" stroke="rgba(45,212,191,0.45)" strokeWidth="1.2"/>
        {/* Barrel rings */}
        <line x1="20" y1="60" x2="100" y2="60" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
        <line x1="20" y1="90" x2="100" y2="90" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
        {/* Label lines */}
        <rect x="32" y="100" width="56" height="3" rx="1.5" fill="rgba(45,212,191,0.2)"/>
        <rect x="36" y="108" width="48" height="3" rx="1.5" fill="rgba(45,212,191,0.12)"/>
        {/* Liquid fill suggestion */}
        <ellipse cx="60" cy="90" rx="36" ry="8" fill="rgba(45,212,191,0.07)"/>
        {/* C atom floating */}
        <circle cx="60" cy="68" r="10" fill="none" stroke="rgba(45,212,191,0.4)" strokeWidth="1"/>
        <text x="60" y="73" textAnchor="middle" fill="rgba(45,212,191,0.7)" fontSize="11" fontFamily="'DM Mono',monospace" fontWeight="600">C</text>
      </g>

      {/* Arrow connecting leaf to barrel */}
      <line x1="170" y1="128" x2="198" y2="128" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4,3"/>
      <polygon points="196,124 204,128 196,132" fill="rgba(45,212,191,0.4)"/>

      {/* Small molecule dots floating */}
      {[[100,200],[140,210],[165,195],[120,225]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="rgba(45,212,191,0.2)" stroke="rgba(45,212,191,0.4)" strokeWidth="0.8"/>
      ))}
      <text x="100" y="245" fill="rgba(45,212,191,0.35)" fontSize="9" fontFamily="'DM Mono',monospace">CH₂ · CO₂ · H₂O</text>
    </svg>
  );
}

function IllustrationMicrobes() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4,5,6,7].map(col => (
        <circle key={`${row}-${col}`} cx={10 + col * 52} cy={10 + row * 38} r="0.8" fill="rgba(45,212,191,0.07)"/>
      )))}

      {/* Central large microbe cell */}
      <ellipse cx="190" cy="130" rx="62" ry="50" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.5)" strokeWidth="1.4"/>
      {/* Cell membrane double layer */}
      <ellipse cx="190" cy="130" rx="55" ry="43" fill="none" stroke="rgba(45,212,191,0.2)" strokeWidth="0.8" strokeDasharray="3,4"/>
      {/* Nucleus */}
      <ellipse cx="190" cy="125" rx="22" ry="18" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.45)" strokeWidth="1.1"/>
      {/* DNA helix suggestion inside nucleus */}
      <path d="M178 120 Q184 115 190 120 Q196 125 202 120" stroke="rgba(45,212,191,0.6)" strokeWidth="1" fill="none"/>
      <path d="M178 126 Q184 121 190 126 Q196 131 202 126" stroke="rgba(45,212,191,0.4)" strokeWidth="1" fill="none"/>
      {/* Cell organelles */}
      <ellipse cx="162" cy="145" rx="10" ry="6" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.3)" strokeWidth="0.8"/>
      <ellipse cx="218" cy="140" rx="8" ry="5" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.3)" strokeWidth="0.8"/>
      <ellipse cx="185" cy="155" rx="9" ry="5" fill="rgba(45,212,191,0.08)" stroke="rgba(45,212,191,0.25)" strokeWidth="0.8"/>
      {/* Flagella */}
      <path d="M252 115 Q270 100 265 85 Q260 70 278 65" stroke="rgba(45,212,191,0.3)" strokeWidth="1" fill="none"/>
      <path d="M252 145 Q272 150 268 168 Q264 186 280 190" stroke="rgba(45,212,191,0.2)" strokeWidth="1" fill="none"/>

      {/* Small satellite microbes */}
      <ellipse cx="90" cy="90" rx="28" ry="22" fill="rgba(45,212,191,0.04)" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
      <ellipse cx="90" cy="87" rx="10" ry="8" fill="rgba(45,212,191,0.08)" stroke="rgba(45,212,191,0.35)" strokeWidth="0.9"/>
      <path d="M70 85 Q62 75 58 60" stroke="rgba(45,212,191,0.2)" strokeWidth="0.9" fill="none"/>

      <ellipse cx="100" cy="195" rx="24" ry="18" fill="rgba(45,212,191,0.04)" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
      <ellipse cx="100" cy="193" rx="9" ry="7" fill="rgba(45,212,191,0.07)" stroke="rgba(45,212,191,0.3)" strokeWidth="0.8"/>

      {/* F atom — fluorine highlight */}
      <circle cx="300" cy="90" r="16" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.6)" strokeWidth="1.2"/>
      <text x="300" y="96" textAnchor="middle" fill="rgba(45,212,191,0.95)" fontSize="14" fontFamily="'DM Mono',monospace" fontWeight="700">F</text>
      <text x="300" y="116" textAnchor="middle" fill="rgba(45,212,191,0.4)" fontSize="8" fontFamily="'DM Mono',monospace">fluorine</text>

      {/* Glow under main cell */}
      <ellipse cx="190" cy="178" rx="50" ry="8" fill="rgba(45,212,191,0.08)"/>
    </svg>
  );
}

function IllustrationBiofluorination() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4,5,6,7].map(col => (
        <circle key={`${row}-${col}`} cx={10 + col * 52} cy={10 + row * 38} r="0.8" fill="rgba(45,212,191,0.07)"/>
      )))}

      {/* Enzyme / reaction vessel — hexagon */}
      <g transform="translate(130, 50)">
        <path d="M60 0 L120 30 L120 90 L60 120 L0 90 L0 30 Z"
          fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.45)" strokeWidth="1.3"/>
        {/* Inner hex */}
        <path d="M60 18 L102 40 L102 80 L60 102 L18 80 L18 40 Z"
          fill="none" stroke="rgba(45,212,191,0.18)" strokeWidth="0.8" strokeDasharray="3,3"/>
        {/* Reaction arrows inside */}
        <text x="60" y="56" textAnchor="middle" fill="rgba(45,212,191,0.5)" fontSize="9" fontFamily="'DM Mono',monospace">C–H</text>
        <path d="M48 62 L72 62" stroke="rgba(45,212,191,0.5)" strokeWidth="1" markerEnd="url(#arr)"/>
        <text x="60" y="78" textAnchor="middle" fill="rgba(45,212,191,0.9)" fontSize="9" fontFamily="'DM Mono',monospace">C–F</text>
        {/* Ambient temp label */}
        <text x="60" y="96" textAnchor="middle" fill="rgba(45,212,191,0.35)" fontSize="8" fontFamily="'DM Mono',monospace">25°C</text>
      </g>

      {/* Input molecule (left) */}
      <g transform="translate(22, 95)">
        <circle cx="30" cy="40" r="18" fill="rgba(45,212,191,0.05)" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
        <circle cx="18" cy="28" r="8" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="0.9"/>
        <circle cx="42" cy="28" r="8" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="0.9"/>
        <circle cx="30" cy="52" r="8" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="0.9"/>
        <text x="18" y="32" textAnchor="middle" fill="rgba(45,212,191,0.45)" fontSize="7" fontFamily="'DM Mono',monospace">C</text>
        <text x="42" y="32" textAnchor="middle" fill="rgba(45,212,191,0.45)" fontSize="7" fontFamily="'DM Mono',monospace">H</text>
        <text x="30" y="56" textAnchor="middle" fill="rgba(45,212,191,0.45)" fontSize="7" fontFamily="'DM Mono',monospace">O</text>
      </g>
      <line x1="80" y1="135" x2="130" y2="115" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Output molecule (right) — C–F bond highlighted */}
      <g transform="translate(278, 95)">
        <circle cx="30" cy="40" r="18" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.55)" strokeWidth="1.2"/>
        <circle cx="18" cy="28" r="8" fill="none" stroke="rgba(45,212,191,0.4)" strokeWidth="0.9"/>
        <circle cx="42" cy="28" r="10" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.7)" strokeWidth="1.1"/>
        <circle cx="30" cy="52" r="8" fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="0.9"/>
        <text x="18" y="32" textAnchor="middle" fill="rgba(45,212,191,0.5)" fontSize="7" fontFamily="'DM Mono',monospace">C</text>
        <text x="42" y="32" textAnchor="middle" fill="rgba(45,212,191,1)" fontSize="8" fontFamily="'DM Mono',monospace" fontWeight="700">F</text>
        <text x="30" y="56" textAnchor="middle" fill="rgba(45,212,191,0.45)" fontSize="7" fontFamily="'DM Mono',monospace">O</text>
      </g>
      <line x1="252" y1="115" x2="280" y2="133" stroke="rgba(45,212,191,0.3)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Low energy badge */}
      <rect x="148" y="188" width="84" height="22" rx="11" fill="rgba(45,212,191,0.08)" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
      <text x="190" y="204" textAnchor="middle" fill="rgba(45,212,191,0.7)" fontSize="9" fontFamily="'DM Mono',monospace">low energy</text>

      {/* Glow under hex */}
      <ellipse cx="190" cy="175" rx="45" ry="7" fill="rgba(45,212,191,0.1)"/>
    </svg>
  );
}

function IllustrationProducts() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4,5,6,7].map(col => (
        <circle key={`${row}-${col}`} cx={10 + col * 52} cy={10 + row * 38} r="0.8" fill="rgba(45,212,191,0.07)"/>
      )))}

      {/* Main product vial / flask */}
      <g transform="translate(130, 30)">
        {/* Flask neck */}
        <rect x="42" y="0" width="36" height="40" rx="4" fill="rgba(3,18,12,0.9)" stroke="rgba(45,212,191,0.4)" strokeWidth="1.1"/>
        {/* Flask body */}
        <path d="M20 40 L100 40 L115 140 L5 140 Z" fill="rgba(45,212,191,0.07)" stroke="rgba(45,212,191,0.45)" strokeWidth="1.2"/>
        {/* Liquid level */}
        <path d="M12 100 Q60 90 108 100 L115 140 L5 140 Z" fill="rgba(45,212,191,0.15)"/>
        {/* Liquid surface shimmer */}
        <path d="M12 100 Q60 90 108 100" stroke="rgba(45,212,191,0.6)" strokeWidth="1" fill="none"/>
        {/* Molecule floating in liquid */}
        <circle cx="40" cy="120" r="6" fill="none" stroke="rgba(45,212,191,0.5)" strokeWidth="1"/>
        <circle cx="80" cy="115" r="5" fill="none" stroke="rgba(45,212,191,0.4)" strokeWidth="1"/>
        <line x1="46" y1="120" x2="75" y2="115" stroke="rgba(45,212,191,0.3)" strokeWidth="0.8"/>
        {/* Stopper */}
        <rect x="38" y="-8" width="44" height="12" rx="3" fill="rgba(45,212,191,0.2)" stroke="rgba(45,212,191,0.5)" strokeWidth="1"/>
        {/* Purity label */}
        <rect x="22" y="55" width="76" height="26" rx="4" fill="rgba(3,18,12,0.8)" stroke="rgba(45,212,191,0.25)" strokeWidth="0.8"/>
        <text x="60" y="67" textAnchor="middle" fill="rgba(45,212,191,0.8)" fontSize="9" fontFamily="'DM Mono',monospace">2-FMA</text>
        <text x="60" y="78" textAnchor="middle" fill="rgba(45,212,191,0.45)" fontSize="8" fontFamily="'DM Mono',monospace">high-purity</text>
      </g>

      {/* Small vials right side */}
      <g transform="translate(265, 80)">
        <rect x="10" y="20" width="26" height="70" rx="5" fill="rgba(45,212,191,0.05)" stroke="rgba(45,212,191,0.3)" strokeWidth="1"/>
        <path d="M10 60 L36 60 L38 90 L8 90 Z" fill="rgba(45,212,191,0.1)"/>
        <rect x="8" y="14" width="30" height="10" rx="3" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.4)" strokeWidth="0.8"/>
        <rect x="14" y="65" width="18" height="2.5" rx="1.25" fill="rgba(45,212,191,0.3)"/>
        <rect x="14" y="71" width="12" height="2.5" rx="1.25" fill="rgba(45,212,191,0.2)"/>
      </g>
      <g transform="translate(298, 95)">
        <rect x="10" y="20" width="24" height="60" rx="5" fill="rgba(45,212,191,0.04)" stroke="rgba(45,212,191,0.22)" strokeWidth="1"/>
        <path d="M10 55 L34 55 L36 80 L8 80 Z" fill="rgba(45,212,191,0.07)"/>
        <rect x="8" y="14" width="28" height="9" rx="3" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.3)" strokeWidth="0.8"/>
      </g>

      {/* Coating / surface application icon */}
      <g transform="translate(30, 150)">
        <rect x="0" y="0" width="90" height="50" rx="6" fill="rgba(3,18,12,0.8)" stroke="rgba(45,212,191,0.25)" strokeWidth="1"/>
        {/* Coating layers */}
        <rect x="8" y="8" width="74" height="8" rx="2" fill="rgba(45,212,191,0.2)" stroke="rgba(45,212,191,0.4)" strokeWidth="0.8"/>
        <rect x="8" y="20" width="74" height="6" rx="2" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.25)" strokeWidth="0.8"/>
        <rect x="8" y="30" width="74" height="4" rx="2" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.2)" strokeWidth="0.8"/>
        <text x="45" y="47" textAnchor="middle" fill="rgba(45,212,191,0.4)" fontSize="8" fontFamily="'DM Mono',monospace">coating layer</text>
      </g>

      {/* Arrow from flask to coating */}
      <line x1="138" y1="195" x2="124" y2="200" stroke="rgba(45,212,191,0.25)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* Glow */}
      <ellipse cx="190" cy="185" rx="50" ry="7" fill="rgba(45,212,191,0.08)"/>
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const cards = [
  {
    step: "01",
    badge: "Technology",
    title: "Microbial Biofluorination",
    description: "A breakthrough platform that uses microorganisms to perform controlled mono-fluorination — producing compounds previously impossible to synthesize.",
    bullets: null,
    isHero: true,
    illustrationLeft: true,
    Illustration: IllustrationFeedstock,
  },
  {
    step: "01",
    badge: "Feedstock",
    title: "Renewable carbon at the source",
    description: "Renewable or waste-derived carbon sources serve as the starting material for our bioprocess.",
    bullets: ["Agricultural & industrial waste streams", "CO₂-neutral carbon input", "Scalable feedstock supply"],
    illustrationLeft: true,
    Illustration: IllustrationFeedstock,
  },
  {
    step: "02",
    badge: "Engineered Microbes",
    title: "Precision-engineered strains",
    description: "Proprietary microbial strains with optimized metabolic pathways perform controlled fluorination.",
    bullets: ["Optimized metabolic pathway design", "Proprietary strain library", "Stable across fermentation cycles"],
    illustrationLeft: false,
    Illustration: IllustrationMicrobes,
  },
  {
    step: "03",
    badge: "Biofluorination",
    title: "Enzymatic C–F bond formation",
    description: "Enzymatic mono-fluorination at ambient conditions — low energy, minimal by-products.",
    bullets: ["Ambient temperature fermentation", "Selective mono-fluorination", "Minimal chemical by-products"],
    illustrationLeft: true,
    Illustration: IllustrationBiofluorination,
  },
  {
    step: "04",
    badge: "Products",
    title: "High-purity fluorinated compounds",
    description: "High-purity 2-FMA and related compounds ready for integration into coating formulations.",
    bullets: ["2-FMA and derivative compounds", "Ready for coating integration", "Consistent batch quality"],
    illustrationLeft: false,
    Illustration: IllustrationProducts,
  },
];

const stats = [
  { label: "Low Energy Demand", value: "Ambient fermentation" },
  { label: "GHG Reduction", value: ">50% vs traditional" },
  { label: "Feedstock", value: "Renewable / waste" },
  { label: "By-products", value: "Minimal" },
];

// ─── Components ───────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#2DD4BF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M1.5 6L4.5 9.5L10.5 2.5" stroke="#000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Card({ card }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: card.illustrationLeft ? "row" : "row-reverse",
        borderRadius: 24,
        overflow: "hidden",
        background: "transparent",
        transition: "box-shadow 0.3s",
        minHeight: 240,
      }}
    >
      {/* Illustration panel */}
      <div style={{
        flex: "0 0 52%",
        position: "relative",
        overflow: "hidden",
        background: "rgba(2,10,6,0.97)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px 8px",
        borderRadius: card.illustrationLeft ? "24px 0 0 24px" : "0 24px 24px 0",
      }}>
        {/* dot grid via pattern */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} aria-hidden>
          <defs>
            <pattern id={`dots-${card.step}-${card.badge}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.85" fill="rgba(45,212,191,0.13)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${card.step}-${card.badge})`}/>
        </svg>
        {/* Glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: card.illustrationLeft
            ? "radial-gradient(ellipse at 60% 50%, rgba(45,212,191,0.06) 0%, transparent 65%)"
            : "radial-gradient(ellipse at 40% 50%, rgba(45,212,191,0.06) 0%, transparent 65%)",
        }}/>
        <div style={{ position: "relative", width: "100%", maxWidth: 380 }}>
          <card.Illustration />
        </div>
      </div>

      {/* Content panel */}
      <div style={{
        flex: 1, padding: "44px 48px",
        display: "flex", flexDirection: "column", justifyContent: "center", gap: 20,
        background: "transparent",
      }}>
        {/* Step + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: "'DM Mono',monospace", fontSize: 11,
            color: "rgba(45,212,191,0.45)", letterSpacing: "0.06em",
          }}>{card.step}</span>
          <span style={{
            display: "inline-block", padding: "4px 14px",
            borderRadius: 100,
            fontSize: 11, color: "rgba(45,212,191,0.88)",
            fontFamily: "'DM Mono',monospace", letterSpacing: "0.01em",
          }}>{card.badge}</span>
        </div>

        {/* Title */}
        <h3 style={{
          margin: 0,
          fontFamily: "'Fraunces','Playfair Display',Georgia,serif",
          fontSize: "clamp(24px, 2.4vw, 34px)",
          fontWeight: 700, lineHeight: 1.15,
          color: "rgba(255,255,255,0.97)", letterSpacing: "-0.025em",
        }}>
          {card.title}
        </h3>

        {/* Description */}
        <p style={{
          margin: 0, fontFamily: "'DM Sans',sans-serif",
          fontSize: 14, lineHeight: 1.7,
          color: "rgba(255,255,255,0.44)", maxWidth: 340,
        }}>
          {card.description}
        </p>

        {/* Bullets */}
        {card.bullets && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
            {card.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckIcon/>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Connector({ fromLeft }) {
  return (
    <div style={{ width: "75%", margin: "0 auto" }}>
      <svg width="100%" height="56" viewBox="0 0 1100 56" preserveAspectRatio="none" fill="none">
        {fromLeft
          ? <path d="M1100 0 Q1100 28 1060 28 L40 28 Q0 28 0 56" stroke="rgba(45,212,191,0.22)" strokeWidth="1" strokeDasharray="6,5" fill="none" vectorEffect="non-scaling-stroke"/>
          : <path d="M0 0 Q0 28 40 28 L1060 28 Q1100 28 1100 56" stroke="rgba(45,212,191,0.22)" strokeWidth="1" strokeDasharray="6,5" fill="none" vectorEffect="non-scaling-stroke"/>
        }
      </svg>
    </div>
  );
}

function StatsBar() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      gap: 1, marginTop: 16,
      borderRadius: 16,
      overflow: "hidden",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: "28px 32px",
          background: "rgba(4,16,10,0.6)",
          borderRight: i < stats.length - 1 ? "1px solid rgba(45,212,191,0.12)" : "none",
        }}>
          <div style={{
            fontFamily: "'DM Mono',monospace", fontSize: 11,
            color: "rgba(45,212,191,0.45)", letterSpacing: "0.06em",
            marginBottom: 10, textTransform: "uppercase",
          }}>{s.label}</div>
          <div style={{
            fontFamily: "'Fraunces',Georgia,serif", fontSize: 20,
            fontWeight: 700, color: "rgba(45,212,191,0.92)", lineHeight: 1.2,
          }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader() {
  return (
    <div style={{ marginBottom: 56 }}>
      <span style={{
        display: "inline-block", padding: "4px 14px",
        borderRadius: 100,
        fontSize: 11, color: "rgba(45,212,191,0.75)",
        fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em",
        marginBottom: 20,
      }}>Technology</span>
      <h2 style={{
        margin: 0,
        fontFamily: "'Fraunces',Georgia,serif",
        fontSize: "clamp(32px,4vw,52px)",
        fontWeight: 700, lineHeight: 1.1,
        color: "rgba(255,255,255,0.97)", letterSpacing: "-0.03em",
      }}>
        Microbial{" "}
        <span style={{ color: "rgba(45,212,191,0.9)" }}>Biofluorination</span>
      </h2>
      <p style={{
        margin: "16px 0 0", fontFamily: "'DM Sans',sans-serif",
        fontSize: 15, lineHeight: 1.7,
        color: "rgba(255,255,255,0.42)", maxWidth: 540,
      }}>
        A breakthrough platform that uses microorganisms to perform controlled mono-fluorination — producing compounds previously impossible to synthesize.
      </p>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function BiofluorinationSection() {
  // Skip the hero card (index 0) — that becomes the section header
  const processCards = cards.filter(c => !c.isHero);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap');
        *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #020c07; }
        .vb-section { background: #020c07; padding: 72px 36px 88px; font-family: 'DM Sans', sans-serif; }
        .vb-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
        @media (max-width: 700px) {
          .vb-section { padding: 40px 16px 60px; }
          .vb-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .vb-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <section className="vb-section">
        <div className="vb-inner">
          <SectionHeader />
          {processCards.map((card, i) => (
            <div key={i}>
              <Card card={card} />
              {i < processCards.length - 1 && <Connector fromLeft={card.illustrationLeft} />}
            </div>
          ))}
          <StatsBar />
        </div>
      </section>
    </>
  );
}
