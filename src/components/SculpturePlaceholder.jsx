// SVG placeholder images that mimic sculptural forms

export function SculpturePlaceholderAbstract({ width = 400, height = 500 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Abstract sculpture placeholder"
    >
      <rect width="400" height="500" fill="#1a1a1a" />
      {/* Base */}
      <rect x="120" y="440" width="160" height="20" rx="2" fill="#4a4a4a" />
      {/* Pedestal */}
      <rect x="160" y="390" width="80" height="55" fill="#3a3a3a" />
      {/* Abstract form */}
      <ellipse cx="200" cy="320" rx="60" ry="90" fill="#5a5a5a" />
      <ellipse cx="200" cy="220" rx="40" ry="70" fill="#6a6a6a" transform="rotate(-10 200 220)" />
      <ellipse cx="215" cy="140" rx="25" ry="45" fill="#7a7a7a" transform="rotate(15 215 140)" />
      {/* Highlight */}
      <ellipse cx="185" cy="290" rx="10" ry="25" fill="#9a9a9a" opacity="0.5" />
      <text x="200" y="490" textAnchor="middle" fill="#666" fontSize="11" fontFamily="sans-serif">
        Abstract Form No. 1
      </text>
    </svg>
  );
}

export function SculpturePlaceholderFigure({ width = 400, height = 500 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Figure sculpture placeholder"
    >
      <rect width="400" height="500" fill="#1c1a18" />
      {/* Base */}
      <rect x="110" y="440" width="180" height="22" rx="3" fill="#3d3530" />
      {/* Pedestal */}
      <rect x="155" y="395" width="90" height="50" fill="#2e2a26" />
      {/* Torso */}
      <rect x="170" y="280" width="60" height="120" rx="10" fill="#6b5a4e" />
      {/* Head */}
      <ellipse cx="200" cy="255" rx="28" ry="32" fill="#7a6a5e" />
      {/* Left arm */}
      <rect x="138" y="285" width="35" height="12" rx="6" fill="#6b5a4e" transform="rotate(20 138 285)" />
      {/* Right arm raised */}
      <rect x="228" y="270" width="40" height="12" rx="6" fill="#6b5a4e" transform="rotate(-35 228 270)" />
      {/* Legs */}
      <rect x="172" y="398" width="22" height="5" rx="2" fill="#5a4a3e" />
      <rect x="206" y="398" width="22" height="5" rx="2" fill="#5a4a3e" />
      {/* Light highlight */}
      <ellipse cx="188" cy="300" rx="6" ry="20" fill="#9a8a7e" opacity="0.4" />
      <text x="200" y="490" textAnchor="middle" fill="#665a50" fontSize="11" fontFamily="sans-serif">
        Standing Figure
      </text>
    </svg>
  );
}

export function SculpturePlaceholderBust({ width = 400, height = 500 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bust sculpture placeholder"
    >
      <rect width="400" height="500" fill="#18181c" />
      {/* Base */}
      <rect x="130" y="438" width="140" height="24" rx="3" fill="#38384a" />
      {/* Pedestal */}
      <rect x="165" y="370" width="70" height="72" fill="#2a2a38" />
      {/* Shoulders/chest */}
      <ellipse cx="200" cy="360" rx="75" ry="30" fill="#4a4a65" />
      {/* Neck */}
      <rect x="186" y="305" width="28" height="60" rx="8" fill="#5a5a78" />
      {/* Head */}
      <ellipse cx="200" cy="275" rx="50" ry="58" fill="#6a6a88" />
      {/* Eyes */}
      <ellipse cx="183" cy="265" rx="8" ry="6" fill="#2a2a3a" />
      <ellipse cx="217" cy="265" rx="8" ry="6" fill="#2a2a3a" />
      {/* Nose */}
      <path d="M196 278 Q200 295 204 278" stroke="#4a4a62" strokeWidth="2" fill="none" />
      {/* Highlights */}
      <ellipse cx="178" cy="255" rx="4" ry="6" fill="#8a8aaa" opacity="0.5" />
      <text x="200" y="490" textAnchor="middle" fill="#60607a" fontSize="11" fontFamily="sans-serif">
        Portrait Bust
      </text>
    </svg>
  );
}

export function SculpturePlaceholderOrganic({ width = 400, height = 500 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Organic sculpture placeholder"
    >
      <rect width="400" height="500" fill="#141a16" />
      {/* Base */}
      <rect x="100" y="438" width="200" height="24" rx="3" fill="#2a3a2c" />
      {/* Pedestal */}
      <rect x="160" y="385" width="80" height="58" fill="#1e2e20" />
      {/* Organic flowing form */}
      <path
        d="M200 370 C160 350 140 310 155 270 C170 230 145 195 160 160 C175 125 210 110 230 140 C250 170 245 210 255 245 C265 280 250 320 240 355 Z"
        fill="#4a6a4e"
      />
      <path
        d="M200 370 C220 355 245 330 240 295 C235 260 255 235 248 200 C241 165 218 148 200 160 C182 172 178 205 172 238 C166 271 155 308 165 345 Z"
        fill="#5a7a5e"
      />
      {/* Highlight vein */}
      <path
        d="M195 340 C188 310 182 275 190 240 C198 205 205 180 200 160"
        stroke="#7a9a7e"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <text x="200" y="490" textAnchor="middle" fill="#50705a" fontSize="11" fontFamily="sans-serif">
        Organic Form
      </text>
    </svg>
  );
}

export function SculpturePlaceholderRelief({ width = 500, height = 380 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Relief sculpture placeholder"
    >
      <rect width="500" height="380" fill="#1a1614" />
      {/* Stone slab background */}
      <rect x="30" y="30" width="440" height="300" rx="4" fill="#2e2820" />
      {/* Relief scene - landscape with figures */}
      {/* Mountains */}
      <polygon points="60,280 160,120 260,280" fill="#3e3228" />
      <polygon points="180,280 300,100 420,280" fill="#362a22" />
      <polygon points="300,280 390,160 480,280" fill="#3a2e26" />
      {/* Trees */}
      <rect x="80" y="240" width="8" height="45" fill="#2a2218" />
      <ellipse cx="84" cy="232" rx="18" ry="22" fill="#3a3028" />
      <rect x="420" y="235" width="8" height="50" fill="#2a2218" />
      <ellipse cx="424" cy="227" rx="20" ry="24" fill="#332a22" />
      {/* Figures */}
      <ellipse cx="210" cy="238" rx="10" ry="12" fill="#524438" />
      <rect x="204" y="248" width="12" height="30" rx="4" fill="#4a3c30" />
      <ellipse cx="260" cy="232" rx="10" ry="12" fill="#524438" />
      <rect x="254" y="242" width="12" height="35" rx="4" fill="#4a3c30" />
      {/* Sun */}
      <circle cx="380" cy="80" r="28" fill="#5a4e3e" opacity="0.7" />
      {/* Ground line */}
      <rect x="30" y="280" width="440" height="6" fill="#3a2e24" />
      {/* Border detail */}
      <rect x="30" y="30" width="440" height="300" rx="4" fill="none" stroke="#4a3e34" strokeWidth="3" />
      <text x="250" y="360" textAnchor="middle" fill="#6a5a4e" fontSize="11" fontFamily="sans-serif">
        Low Relief Panel
      </text>
    </svg>
  );
}

export function SculpturePlaceholderInstallation({ width = 500, height = 380 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Installation sculpture placeholder"
    >
      <rect width="500" height="380" fill="#0e0e12" />
      {/* Floor */}
      <rect x="0" y="290" width="500" height="90" fill="#16161e" />
      {/* Wall lines suggesting gallery space */}
      <line x1="0" y1="290" x2="500" y2="290" stroke="#2a2a36" strokeWidth="1" />
      {/* Installation: suspended elements */}
      {/* Wires */}
      <line x1="150" y1="20" x2="150" y2="200" stroke="#3a3a4a" strokeWidth="1" />
      <line x1="220" y1="20" x2="195" y2="180" stroke="#3a3a4a" strokeWidth="1" />
      <line x1="300" y1="20" x2="280" y2="220" stroke="#3a3a4a" strokeWidth="1" />
      <line x1="370" y1="20" x2="355" y2="170" stroke="#3a3a4a" strokeWidth="1" />
      {/* Suspended forms */}
      <ellipse cx="150" cy="205" rx="22" ry="28" fill="#4a4a62" />
      <ellipse cx="195" cy="185" rx="15" ry="20" fill="#5a5a78" />
      <ellipse cx="280" cy="225" rx="30" ry="18" fill="#4e4e68" />
      <ellipse cx="355" cy="175" rx="18" ry="25" fill="#545470" />
      {/* Floor shadow */}
      <ellipse cx="150" cy="298" rx="22" ry="5" fill="#1e1e28" />
      <ellipse cx="195" cy="298" rx="15" ry="4" fill="#1e1e28" />
      <ellipse cx="280" cy="298" rx="30" ry="5" fill="#1e1e28" />
      <ellipse cx="355" cy="298" rx="18" ry="4" fill="#1e1e28" />
      {/* Reflection on floor */}
      <ellipse cx="150" cy="305" rx="22" ry="15" fill="#2e2e40" opacity="0.4" />
      <ellipse cx="280" cy="308" rx="30" ry="12" fill="#2e2e40" opacity="0.4" />
      <text x="250" y="360" textAnchor="middle" fill="#50506a" fontSize="11" fontFamily="sans-serif">
        Installation View
      </text>
    </svg>
  );
}

export function ArtistPortraitPlaceholder({ width = 400, height = 450 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 450"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Artist portrait placeholder"
    >
      <rect width="400" height="450" fill="#1a1614" />
      {/* Background texture lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={i} x1="0" y1={i * 60} x2="400" y2={i * 60 + 30} stroke="#201e1c" strokeWidth="20" />
      ))}
      {/* Body/shoulders */}
      <ellipse cx="200" cy="400" rx="130" ry="60" fill="#2a2420" />
      <rect x="100" y="340" width="200" height="80" fill="#2a2420" />
      {/* Collar/shirt */}
      <path d="M160 340 L200 360 L240 340 L250 360 L200 380 L150 360 Z" fill="#1e1a18" />
      {/* Neck */}
      <rect x="182" y="290" width="36" height="55" rx="10" fill="#5a4a40" />
      {/* Head */}
      <ellipse cx="200" cy="260" rx="65" ry="72" fill="#6a5a50" />
      {/* Hair */}
      <ellipse cx="200" cy="196" rx="65" ry="38" fill="#2a2018" />
      <path d="M135 220 Q125 260 130 290 Q140 250 145 230 Z" fill="#2a2018" />
      <path d="M265 220 Q275 260 270 290 Q260 250 255 230 Z" fill="#2a2018" />
      {/* Eyes */}
      <ellipse cx="178" cy="255" rx="11" ry="9" fill="#1a1410" />
      <ellipse cx="222" cy="255" rx="11" ry="9" fill="#1a1410" />
      <ellipse cx="175" cy="252" rx="3" ry="3" fill="#6a6a8a" opacity="0.6" />
      <ellipse cx="219" cy="252" rx="3" ry="3" fill="#6a6a8a" opacity="0.6" />
      {/* Eyebrows */}
      <path d="M165 241 Q178 236 192 241" stroke="#1e1810" strokeWidth="3" fill="none" />
      <path d="M208 241 Q222 236 235 241" stroke="#1e1810" strokeWidth="3" fill="none" />
      {/* Nose */}
      <path d="M195 265 Q192 282 196 288 Q200 292 204 288 Q208 282 205 265" stroke="#5a4a40" strokeWidth="2" fill="none" />
      {/* Mouth */}
      <path d="M183 302 Q200 314 217 302" stroke="#4a3a30" strokeWidth="2.5" fill="none" />
      {/* Highlight */}
      <ellipse cx="185" cy="245" rx="6" ry="8" fill="#8a7a70" opacity="0.3" />
    </svg>
  );
}
