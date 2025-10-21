import React from "react";
import {
  Wrap,
  Legend,
  LegendItem,
  Swatch,
  DonutSvg,
  DonutSlice,
} from "./styles";

type SliceDatum = { label: string; percent: number; color: string };

const DATA: SliceDatum[] = [
  { label: "Ecosystem", percent: 45, color: "#bbf68e" },
  { label: "Liquidity provision", percent: 15, color: "#95e466" },
  { label: "Marketing / Airdrop", percent: 13, color: "#78d348" },
  { label: "Initial seed liquidity (Presale)", percent: 10, color: "#5ebe2f" },
  { label: "CEX listings", percent: 7, color: "#3b9a13" },
  { label: "Team", percent: 5, color: "#2a7f08" },
  { label: "Investors & early contributors", percent: 5, color: "#1c5e04" },
];

// no-op helper removed (conic gradient not used in SVG variant)

export const Tokenomics: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  // Geometry
  const size = 120; // viewBox
  const center = size / 2;
  const outerRadius = 50;
  const innerRadius = 28;
  const startAngleDeg = 0; // 0° points to the right

  // Build cumulative starts once
  const arcs = React.useMemo(() => {
    // Compute arcs using precise angles; place largest slice starting at 0°
    const largestIndex = DATA.reduce(
      (maxIdx, s, i, arr) => (s.percent > arr[maxIdx].percent ? i : maxIdx),
      0,
    );
    const reordered = [
      ...DATA.slice(largestIndex),
      ...DATA.slice(0, largestIndex),
    ];

    let currentAngle = startAngleDeg; // in degrees

    function polarToCartesian(r: number, angleDeg: number) {
      const angleRad = (Math.PI / 180) * angleDeg;
      return {
        x: center + r * Math.cos(angleRad),
        y: center + r * Math.sin(angleRad),
      };
    }

    function buildArcPath(startDeg: number, sweepDeg: number) {
      const endDeg = startDeg + sweepDeg;
      const largeArcFlag = sweepDeg > 180 ? 1 : 0;
      const outerStart = polarToCartesian(outerRadius, startDeg);
      const outerEnd = polarToCartesian(outerRadius, endDeg);
      const innerEnd = polarToCartesian(innerRadius, endDeg);
      const innerStart = polarToCartesian(innerRadius, startDeg);
      // Donut slice path (clockwise outer arc, then counter-clockwise inner arc)
      return `M ${outerStart.x} ${outerStart.y}
              A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}
              L ${innerEnd.x} ${innerEnd.y}
              A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}
              Z`;
    }

    return reordered.map((s) => {
      const sweep = (s.percent / 100) * 360;
      const d = buildArcPath(currentAngle, sweep);
      const arc = { d, color: s.color, label: s.label, percent: s.percent };
      currentAngle += sweep;
      return arc;
    });
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: 0 }}>Tokenomics</h3>
      <Wrap onMouseLeave={() => setActiveIndex(null)} onFocus={() => undefined}>
        <DonutSvg
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="Token allocation donut"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {arcs.map((arc, i) => (
            <DonutSlice
              key={arc.label}
              $active={activeIndex === i}
              d={arc.d}
              fill={arc.color}
              tabIndex={0}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
            />
          ))}
        </DonutSvg>
        <Legend onMouseLeave={() => setActiveIndex(null)}>
          {arcs.map((arc, i) => (
            <LegendItem
              key={arc.label}
              $active={activeIndex === i}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
            >
              <Swatch style={{ background: arc.color }} />
              <div>
                <div className="label">{arc.label}</div>
                <div className="sub">{arc.percent}%</div>
              </div>
            </LegendItem>
          ))}
        </Legend>
      </Wrap>
    </>
  );
};
