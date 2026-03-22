import '../styles/Process.css';

const steps = [
  {
    number: '01',
    title: 'Sketch & Maquette',
    desc: 'Every work begins as a small clay maquette — a rapid, tactile exploration of form and proportion before committing to the final material.',
  },
  {
    number: '02',
    title: 'Material Selection',
    desc: 'Stone is chosen personally at the quarry. Each block carries its own internal landscape of veining and grain that informs the final composition.',
  },
  {
    number: '03',
    title: 'Carving',
    desc: 'Working with hand chisels and pneumatic tools, the form emerges over months — a conversation between intention and the resistance of the stone.',
  },
  {
    number: '04',
    title: 'Finishing',
    desc: 'The surface is worked through progressively finer abrasives, culminating in hand-polishing that reveals the mineral depth of the material.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section-inner">
        <header className="section-header">
          <p className="section-label">Studio Practice</p>
          <h2 className="section-title">How Each Piece is Made</h2>
        </header>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-divider" />
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="process-studio">
          {/* Wide SVG placeholder: studio / workshop view */}
          <svg
            viewBox="0 0 1100 420"
            xmlns="http://www.w3.org/2000/svg"
            className="studio-svg"
            aria-label="Studio environment placeholder"
          >
            <rect width="1100" height="420" fill="#111" />
            {/* Walls & floor */}
            <rect x="0" y="280" width="1100" height="140" fill="#161412" />
            <line x1="0" y1="280" x2="1100" y2="280" stroke="#242220" strokeWidth="1" />
            {/* Perspective floor lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1={550} y1={280} x2={i * 220} y2={420} stroke="#1e1c1a" strokeWidth="1" />
            ))}
            {/* Large window light */}
            <rect x="700" y="20" width="280" height="240" rx="4" fill="#1a1a22" stroke="#2a2a36" strokeWidth="2" />
            {/* Window panes */}
            <line x1="840" y1="20" x2="840" y2="260" stroke="#2a2a36" strokeWidth="1.5" />
            <line x1="700" y1="140" x2="980" y2="140" stroke="#2a2a36" strokeWidth="1.5" />
            {/* Work table */}
            <rect x="50" y="240" width="320" height="14" rx="2" fill="#2a2420" />
            <rect x="70" y="254" width="14" height="30" fill="#2a2420" />
            <rect x="340" y="254" width="14" height="30" fill="#2a2420" />
            {/* Sculpture in progress on table */}
            <ellipse cx="200" cy="225" rx="55" ry="70" fill="#3e3632" />
            <ellipse cx="200" cy="155" rx="35" ry="50" fill="#4a4440" transform="rotate(-8 200 155)" />
            {/* Tool rack */}
            <rect x="450" y="100" width="180" height="180" rx="2" fill="#1a1816" stroke="#2a2420" strokeWidth="1" />
            {/* Tools on rack */}
            {[470, 495, 520, 545, 570, 595].map((x) => (
              <line key={x} x1={x} y1="115" x2={x} y2="265" stroke="#3a3430" strokeWidth="3" />
            ))}
            {/* Dust/chips on floor */}
            {[120, 180, 220, 260].map((x) => (
              <ellipse key={x} cx={x} cy={310} rx={12} ry={4} fill="#1e1c1a" />
            ))}
            {/* Light beam from window */}
            <polygon points="700,20 980,20 820,280 640,280" fill="#1c1c22" opacity="0.3" />
          </svg>
          <p className="studio-caption">The Florence studio, 2024</p>
        </div>
      </div>
    </section>
  );
}
