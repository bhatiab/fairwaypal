// GrandstandPicker.tsx
// GrandPrixPal — Template-based Grandstand Picker
// Drop into any race page via: <GrandstandPicker circuitId="shanghai" />
// Requires: grandstandData_all2026.ts + circuitMaps.ts in /data/

import { useState, useRef } from 'react';
import type { CircuitData, Grandstand } from '../data/grandstandData_all2026';
import { useIsMobile } from '@/hooks/use-mobile';
import { CIRCUIT_MAPS } from '../data/circuitMaps';

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const RATING_LABELS: Record<string, string> = {
  view: 'View',
  shade: 'Shade',
  atmosphere: 'Atmosphere',
  overtaking: 'Overtaking',
  comfort: 'Comfort'
};

const FACILITY_ICONS: Record<string, { icon: string; label: string }> = {
  covered: { icon: '☂', label: 'Covered' },
  screen: { icon: '📺', label: 'Big Screen' },
  food: { icon: '🍴', label: 'Food Nearby' },
  accessible: { icon: '♿', label: 'Accessible' },
  cushionNeeded: { icon: '🪑', label: 'Cushion Advised' },
  singleEntry: { icon: '🚫', label: 'Single Entry' }
};

const BADGE_STYLES: Record<string, { bg: string; text: string }> = {
  'PREMIUM': { bg: '#E10600', text: '#fff' },
  'BEST OVERTAKING': { bg: '#FF6B00', text: '#fff' },
  'BEST VALUE': { bg: '#00A651', text: '#fff' },
  'GPP RECOMMENDS': { bg: '#fff', text: '#0a0a0a' },
  'BUDGET PICK': { bg: '#8B5CF6', text: '#fff' },
  'FIRST TIMER': { bg: '#0066CC', text: '#fff' }
};

const PRICE_FILTERS = [
  { label: 'All Prices', value: 'all' },
  { label: 'Budget', value: 'budget' },
  { label: 'Mid-Range', value: 'mid' },
  { label: 'Premium', value: 'premium' }
];

const BEST_FOR_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Overtaking', value: 'overtaking' },
  { label: 'Best View', value: 'view' },
  { label: 'Shade/Cover', value: 'shade' },
  { label: 'First Timer', value: 'first' }
];

// ─── PROPS ────────────────────────────────────────────────────────────────────
interface GrandstandPickerProps {
  circuitData: CircuitData;   // pass the full circuit object from CIRCUIT_MAP[circuitId]
}

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────
function RatingBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <span style={{ fontSize: 10, color: '#888', fontFamily: 'monospace', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {label}
        </span>
        <span style={{ fontSize: 10, color, fontFamily: 'monospace', fontWeight: 700 }}>{value}/5</span>
      </div>
      <div style={{ height: 4, background: '#1a1a1a', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${(value / 5) * 100}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          borderRadius: 2,
          transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }} />
      </div>
    </div>
  );
}

function CircuitSVG({
  circuitId,
  grandstands,
  activeId,
  onSelect
}: {
  circuitId: string;
  grandstands: Grandstand[];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  const mapData = CIRCUIT_MAPS[circuitId];

  // Fallback to generic oval if no map data
  if (!mapData) {
    return (
      <div style={{ textAlign: 'center', color: '#555', padding: 40, fontFamily: 'monospace', fontSize: 11 }}>
        Circuit map not available
      </div>
    );
  }

  return (
    <svg viewBox="0 0 280 180" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Dark background */}
      <rect width="280" height="180" fill="#0d0d0d" rx="10" />

      {/* Circuit asphalt (wide stroke) */}
      <path d={mapData.path} fill="none" stroke="#2a2a2a" strokeWidth="20"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* Inner track surface */}
      <path d={mapData.path} fill="none" stroke="#1a1a1a" strokeWidth="14"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* Track centre-line dashes */}
      <path d={mapData.path} fill="none" stroke="#333" strokeWidth="1"
        strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="6 4" />

      {/* Start/Finish line */}
      <line
        x1={mapData.startFinish.x1} y1={mapData.startFinish.y1}
        x2={mapData.startFinish.x2} y2={mapData.startFinish.y2}
        stroke="#E10600" strokeWidth="3"
      />

      {/* Circuit name */}
      <text x={mapData.label.x} y={mapData.label.y}
        fill="#1f1f1f" fontSize="16" fontFamily="monospace"
        textAnchor="middle" fontWeight="bold">
        {circuitId.toUpperCase()}
      </text>

      {/* Grandstand dots */}
      {grandstands.map(gs => {
        const isActive = activeId === gs.id;
        return (
          <g key={gs.id} onClick={() => onSelect(gs.id)} style={{ cursor: 'pointer' }}>
            {/* Invisible hit area for touch targets */}
            <circle cx={gs.mapDot.x} cy={gs.mapDot.y} r={20} fill="transparent" />
            {/* Pulse ring for active */}
            {isActive && (
              <circle cx={gs.mapDot.x} cy={gs.mapDot.y} r={22}
                fill="none" stroke={gs.color} strokeWidth="1" opacity="0.3" />
            )}
            <circle
              cx={gs.mapDot.x} cy={gs.mapDot.y}
              r={isActive ? 14 : 10}
              fill={isActive ? gs.color : '#1e1e1e'}
              stroke={gs.color}
              strokeWidth={isActive ? 2.5 : 1.5}
              style={{ transition: 'all 0.2s ease' }}
            />
            <text
              x={gs.mapDot.x} y={gs.mapDot.y + 3}
              fill={isActive ? '#fff' : gs.color}
              fontSize={isActive ? 6 : 5}
              fontFamily="monospace"
              textAnchor="middle"
              fontWeight="bold"
            >
              {gs.shortName.slice(0, 6)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ComparePanel({
  grandstands,
  ids,
  onClose,
}: {
  grandstands: Grandstand[];
  ids: [string, string];
  onClose: () => void;
}) {
  const [a, b] = ids.map(id => grandstands.find(g => g.id === id)!);
  if (!a || !b) return null;

  return (
    <div style={{
      background: '#0d0d0d', border: '1px solid #2a2a2a',
      borderRadius: 16, padding: '24px 20px', marginTop: 8, marginBottom: 24,
      scrollMarginTop: 16
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ margin: 0, color: '#fff', fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.08em' }}>
          SIDE-BY-SIDE COMPARISON
        </h3>
        <button
          onClick={onClose}
          style={{ background: 'none', border: '1px solid #333', color: '#888', borderRadius: 6, padding: '6px 14px', cursor: 'pointer', fontFamily: 'monospace', fontSize: 11 }}
        >
          ✕ CLEAR
        </button>
      </div>

      {/* Header cards — always 2 columns on desktop, stack on narrow */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24 }}>
        {[a, b].map(gs => (
          <div key={gs.id} style={{
            background: '#141414', borderRadius: 10, padding: 16,
            borderTop: `3px solid ${gs.color}`
          }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{gs.name}</div>
            <div style={{ fontSize: 11, color: gs.color, fontFamily: 'monospace' }}>{gs.priceUSD}</div>
            <div style={{ fontSize: 10, color: '#666', fontFamily: 'monospace', marginTop: 2 }}>{gs.location}</div>
          </div>
        ))}
      </div>

      {/* Ratings — label spans full width, bars side by side */}
      {(Object.entries(RATING_LABELS) as [keyof Grandstand['ratings'], string][]).map(([key, label]) => (
        <div key={key} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 9, color: '#555', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 6 }}>
            {label.toUpperCase()}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[a, b].map(gs => (
              <div key={gs.id} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <span style={{ fontSize: 9, color: '#555', fontFamily: 'monospace', width: 80, flexShrink: 0 }}>
                  {gs.shortName}
                </span>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[1, 2, 3, 4, 5].map(n => (
                    <div key={n} style={{
                      width: 14, height: 14, borderRadius: 2,
                      background: n <= gs.ratings[key] ? gs.color : '#1e1e1e'
                    }} />
                  ))}
                </div>
                <span style={{
                  fontSize: 11, marginLeft: 6, fontFamily: 'monospace',
                  color: gs.ratings[key] >= 4 ? '#4ade80' : gs.ratings[key] >= 3 ? '#facc15' : '#f87171'
                }}>
                  {gs.ratings[key]}/5
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Facilities */}
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #1a1a1a', marginBottom: 20 }}>
        <div style={{ fontSize: 9, color: '#555', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 12 }}>
          FACILITIES
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[a, b].map(gs => (
            <div key={gs.id}>
              <div style={{ fontSize: 9, color: '#555', fontFamily: 'monospace', marginBottom: 8 }}>{gs.shortName}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {(Object.entries(gs.facilities) as [keyof Grandstand['facilities'], boolean][]).map(([k, v]) => {
                  const f = FACILITY_ICONS[k];
                  if (!f) return null;
                  return (
                    <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ color: v ? '#4ade80' : '#3a3a3a', fontSize: 13, width: 16 }}>
                        {v ? '✓' : '✗'}
                      </span>
                      <span style={{ fontSize: 11, color: v ? '#bbb' : '#444', fontFamily: 'monospace' }}>
                        {f.icon} {f.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ─── GRANDSTAND CARD ──────────────────────────────────────────────────────────
function GrandstandCard({
  gs, isActive, isCompared, showCompareBtn,
  onSelect, onCompare
}: {
  gs: Grandstand;
  isActive: boolean;
  isCompared: boolean;
  showCompareBtn: boolean;
  onSelect: (id: string) => void;
  onCompare: (id: string) => void;
}) {
  const badge = gs.badge ? BADGE_STYLES[gs.badge] : null;

  return (
    <div
      onClick={() => onSelect(gs.id)}
      style={{
        background: isActive ? 'linear-gradient(160deg,#141414 0%,#0d0d0d 100%)' : '#0d0d0d',
        border: `1px solid ${isActive ? gs.color : isCompared ? '#ffffff33' : '#1f1f1f'}`,
        borderRadius: 12,
        padding: 20,
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isActive
          ? `0 0 28px ${gs.color}22, 0 8px 32px #00000060`
          : '0 2px 12px #00000040'
      }}
    >
      {/* Active top accent line */}
      {isActive && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${gs.color}, transparent)`
        }} />
      )}

      {/* Badge + Price row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        {badge && gs.badge ? (
          <span style={{
            background: badge.bg, color: badge.text,
            fontSize: 9, fontFamily: 'monospace', fontWeight: 700,
            letterSpacing: '0.1em', padding: '3px 8px', borderRadius: 3,
            textTransform: 'uppercase'
          }}>
            {gs.badge}
          </span>
        ) : <span />}
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', fontFamily: 'monospace' }}>
            {gs.priceRange}
          </div>
          <div style={{ fontSize: 10, color: '#666', fontFamily: 'monospace' }}>{gs.priceUSD}</div>
        </div>
      </div>

      {/* Name + Location */}
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {gs.name}
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: 11, color: gs.color, fontFamily: 'monospace', letterSpacing: '0.04em' }}>
          📍 {gs.location}
        </p>
      </div>

      {/* Track % + top tags (always visible) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: isActive ? 12 : 0, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, color: '#aaa', fontFamily: 'monospace', background: '#161616', borderRadius: 6, padding: '3px 9px' }}>
          👁 {gs.trackVisible}% track
        </span>
        {gs.tags.slice(0, 2).map(t => (
          <span key={t} style={{
            fontSize: 9, color: '#999', border: '1px solid #2a2a2a',
            borderRadius: 4, padding: '2px 7px', fontFamily: 'monospace'
          }}>{t}</span>
        ))}
      </div>

      {/* Expanded content */}
      {isActive && (
        <div>
          <div style={{ height: 1, background: '#1f1f1f', margin: '14px 0' }} />

          {/* Rating bars (expanded only) */}
          <div style={{ marginBottom: 14 }}>
            {(Object.entries(RATING_LABELS) as [keyof Grandstand['ratings'], string][]).map(([key, label]) => (
              <RatingBar key={key} label={label} value={gs.ratings[key]} color={gs.color} />
            ))}
          </div>

          {/* Facilities (expanded only) */}
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 14 }}>
            {(Object.entries(gs.facilities) as [keyof Grandstand['facilities'], boolean][]).map(([key, val]) => {
              const f = FACILITY_ICONS[key];
              if (!f) return null;
              const warn = key === 'singleEntry' && val;
              const show = val === true;
              if (!show && !warn) return null;
              return (
                <span key={key} style={{
                  fontSize: 10, padding: '3px 7px', borderRadius: 4,
                  background: warn ? '#E1060015' : '#ffffff0d',
                  color: warn ? '#E10600' : '#ccc',
                  border: `1px solid ${warn ? '#E1060030' : '#ffffff12'}`,
                  fontFamily: 'monospace'
                }}>
                  {f.icon} {f.label}
                </span>
              );
            })}
          </div>

          {/* Key facts */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 9, color: '#555', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 8 }}>
              KEY FACTS
            </div>
            {gs.keyFacts.map((fact, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: gs.color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: '#ccc', lineHeight: 1.55 }}>{fact}</span>
              </div>
            ))}
          </div>

          {/* Watch out */}
          {gs.watchOut && (
            <div style={{
              background: '#FFA50010', border: '1px solid #FFA50028',
              borderRadius: 6, padding: '10px 12px', marginBottom: 14,
              display: 'flex', gap: 10, alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: 14, flexShrink: 0 }}>⚠️</span>
              <span style={{ fontSize: 12, color: '#FFA500', lineHeight: 1.5 }}>{gs.watchOut}</span>
            </div>
          )}

          {/* Fan quote */}
          <div style={{
            background: '#ffffff05', borderLeft: `3px solid ${gs.color}`,
            borderRadius: '0 6px 6px 0', padding: '10px 14px', marginBottom: 14
          }}>
            <div style={{ fontSize: 9, color: '#555', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 4 }}>
              FAN REVIEW
            </div>
            <p style={{ margin: 0, fontSize: 12, color: '#ccc', lineHeight: 1.6, fontStyle: 'italic' }}>
              "{gs.fanQuote}"
            </p>
          </div>

          {/* Best seats */}
          {gs.bestSeats && (
            <div style={{
              background: `${gs.color}0f`, border: `1px solid ${gs.color}28`,
              borderRadius: 6, padding: '10px 12px', marginBottom: 18
            }}>
              <div style={{ fontSize: 9, color: gs.color, fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: 4 }}>
                💺 BEST SEATS
              </div>
              <p style={{ margin: 0, fontSize: 12, color: '#ddd', lineHeight: 1.5 }}>{gs.bestSeats}</p>
            </div>
          )}

        </div>
      )}

      {/* Compare button (shown on hover via JS, always shown if compared) */}
      {showCompareBtn && (
        <button
          onClick={e => { e.stopPropagation(); onCompare(gs.id); }}
          style={{
            position: 'absolute', bottom: 14, right: 14,
            background: isCompared ? '#fff' : '#1a1a1a',
            border: `1px solid ${isCompared ? '#fff' : '#333'}`,
            color: isCompared ? '#000' : '#888',
            borderRadius: 4, padding: '3px 9px',
            fontSize: 9, fontFamily: 'monospace',
            cursor: 'pointer', letterSpacing: '0.06em'
          }}
        >
          {isCompared ? '✓ COMPARING' : '+ COMPARE'}
        </button>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function GrandstandPicker({ circuitData }: GrandstandPickerProps) {
  const { grandstands, circuitId, circuitName, singleEntryWarning, singleEntryNote } = circuitData;

  const isMobile = useIsMobile();
  const [activeId, setActiveId] = useState<string | null>(grandstands[0]?.id ?? null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState('all');
  const [bestForFilter, setBestForFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const comparePanelRef = useRef<HTMLDivElement | null>(null);

  function handleSelect(id: string) {
    setActiveId(prev => (prev === id ? null : id));
    setTimeout(() => {
      cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  }

  function handleCompare(id: string) {
    setCompareIds(prev => {
      const next = prev.includes(id)
        ? prev.filter(i => i !== id)
        : prev.length >= 2 ? [prev[1], id] : [...prev, id];
      if (next.length === 2) {
        setTimeout(() => comparePanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
      }
      return next;
    });
  }

  // ── Filtering ──
  function filterStands(gs: Grandstand): boolean {
    if (priceFilter === 'budget') {
      const num = parseInt(gs.priceUSD.replace(/[^0-9]/g, '').slice(0, 3));
      if (num > 150) return false;
    }
    if (priceFilter === 'premium') {
      const num = parseInt(gs.priceUSD.replace(/[^0-9]/g, '').slice(0, 3));
      if (num < 250) return false;
    }
    if (bestForFilter === 'overtaking' && gs.ratings.overtaking < 4) return false;
    if (bestForFilter === 'view' && gs.ratings.view < 4) return false;
    if (bestForFilter === 'shade' && !gs.facilities.covered) return false;
    if (bestForFilter === 'first' && !['FIRST TIMER', 'GPP RECOMMENDS', 'BEST VALUE'].includes(gs.badge ?? '')) return false;
    return true;
  }

  const filtered = grandstands.filter(filterStands);

  // ── Styles ──
  const chipStyle = (active: boolean, accent = '#E10600') => ({
    padding: '6px 13px', borderRadius: 20,
    border: `1px solid ${active ? accent : '#2a2a2a'}`,
    background: active ? `${accent}1a` : 'transparent',
    color: active ? accent : '#666',
    fontSize: 11, fontFamily: 'monospace',
    cursor: 'pointer', transition: 'all 0.15s',
    letterSpacing: '0.03em', whiteSpace: 'nowrap' as const
  });

  return (
    <div id="grandstands" style={{ background: '#080808', color: '#fff', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg,#0d0d0d 0%,#080808 100%)',
        borderBottom: '1px solid #1a1a1a',
        padding: '28px 24px 20px',
        position: 'relative', overflow: 'hidden'
      }}>
        <p style={{ fontSize: 9, color: '#E10600', fontFamily: 'monospace', letterSpacing: '0.2em', margin: '0 0 4px', textTransform: 'uppercase' }}>
          {circuitName}
        </p>
        <h2 id="grandstands-heading" style={{ fontSize: 26, fontWeight: 900, margin: '0 0 6px', letterSpacing: '-0.03em' }}>
          Grandstand Picker
        </h2>
        <p style={{ fontSize: 13, color: '#888', margin: '0 0 12px' }}>
          {grandstands.length} grandstands — view, shade, overtaking, price and more
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E1060012', border: '1px solid #E1060035', borderRadius: 8, padding: '7px 12px' }}>
          <span style={{ fontSize: 14 }}>⚖️</span>
          <span style={{ fontSize: 11, color: '#E10600', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.04em' }}>
            COMPARE ANY 2
          </span>
          <span style={{ fontSize: 11, color: '#888' }}>
            — expand a card and tap <span style={{ color: '#ccc', fontWeight: 600 }}>+ Compare</span> to compare side-by-side
          </span>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg,transparent,#E10600 30%,#E10600 70%,transparent)'
        }} />
      </div>

      <div style={{ padding: '0 16px 60px' }}>

        {/* Single entry warning */}
        {singleEntryWarning && (
          <div style={{
            background: '#E1060010', border: '1px solid #E1060030',
            borderRadius: 8, padding: '12px 16px', margin: '18px 0',
            display: 'flex', gap: 12, alignItems: 'flex-start'
          }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>🚫</span>
            <div>
              <span style={{ fontSize: 12, color: '#E10600', fontWeight: 700, fontFamily: 'monospace' }}>
                SINGLE ENTRY WARNING · &nbsp;
              </span>
              <span style={{ fontSize: 12, color: '#ccc' }}>
                {singleEntryNote ?? 'One or more grandstands at this circuit are single-entry only.'}
              </span>
            </div>
          </div>
        )}

        {/* Filters */}
        <div style={{ margin: '18px 0', display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 9, color: '#444', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 6 }}>PRICE</div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {PRICE_FILTERS.map(f => (
                <button key={f.value} onClick={() => setPriceFilter(f.value)} style={chipStyle(priceFilter === f.value)}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: '#444', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 6 }}>BEST FOR</div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              {BEST_FOR_FILTERS.map(f => (
                <button key={f.value} onClick={() => setBestForFilter(f.value)} style={chipStyle(bestForFilter === f.value, '#0066CC')}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          {compareIds.length > 0 && (
            <div style={{ marginLeft: 'auto', alignSelf: 'flex-end' }}>
              <button
                onClick={() => comparePanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                disabled={compareIds.length < 2}
                style={{
                  background: compareIds.length === 2 ? '#E10600' : '#1a1a1a',
                  color: compareIds.length === 2 ? '#fff' : '#555',
                  border: `1px solid ${compareIds.length === 2 ? '#E10600' : '#2a2a2a'}`,
                  borderRadius: 8, padding: '8px 18px',
                  fontFamily: 'monospace', fontSize: 11, fontWeight: 700,
                  cursor: compareIds.length === 2 ? 'pointer' : 'default',
                  letterSpacing: '0.05em', opacity: compareIds.length === 2 ? 1 : 0.5
                }}
              >
                {compareIds.length === 2
                  ? 'SEE COMPARISON ↓'
                  : `SELECT ${2 - compareIds.length} MORE`}
              </button>
            </div>
          )}
        </div>

        {/* Mobile circuit map strip (above cards, no legend) */}
        {isMobile && (
          <div style={{
            background: '#0d0d0d', border: '1px solid #1a1a1a',
            borderRadius: 12, padding: 14, marginBottom: 16
          }}>
            <div style={{ fontSize: 9, color: '#444', fontFamily: 'monospace', letterSpacing: '0.12em', marginBottom: 10 }}>
              CIRCUIT MAP — TAP TO SELECT
            </div>
            <CircuitSVG
              circuitId={circuitId}
              grandstands={grandstands}
              activeId={activeId}
              onSelect={handleSelect}
            />
          </div>
        )}

        {/* Layout: circuit map + cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)',
          gap: isMobile ? 16 : 24
        }}>

          {/* Left: circuit map (desktop only) */}
          <div style={{ position: 'sticky', top: 16, alignSelf: 'start', display: isMobile ? 'none' : undefined }}>
            <div style={{
              background: '#0d0d0d', border: '1px solid #1a1a1a',
              borderRadius: 12, padding: 18
            }}>
              <div style={{ fontSize: 9, color: '#444', fontFamily: 'monospace', letterSpacing: '0.12em', marginBottom: 12 }}>
                CIRCUIT MAP — TAP TO SELECT
              </div>

              <CircuitSVG
                circuitId={circuitId}
                grandstands={grandstands}
                activeId={activeId}
                onSelect={handleSelect}
              />

              {/* Legend list */}
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {grandstands.map(gs => {
                  const badge = gs.badge ? BADGE_STYLES[gs.badge] : null;
                  return (
                    <button
                      key={gs.id}
                      onClick={() => handleSelect(gs.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 9,
                        background: activeId === gs.id ? '#141414' : 'transparent',
                        border: `1px solid ${activeId === gs.id ? gs.color : 'transparent'}`,
                        borderRadius: 6, padding: '6px 10px',
                        cursor: 'pointer', width: '100%', textAlign: 'left'
                      }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: gs.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: activeId === gs.id ? '#fff' : '#888', fontFamily: 'monospace', flex: 1 }}>
                        {gs.name}
                      </span>
                      <span style={{ fontSize: 10, color: '#555', fontFamily: 'monospace' }}>{gs.priceUSD.split('–')[0]}</span>
                      {badge && gs.badge && (
                        <span style={{
                          fontSize: 7, padding: '1px 5px', borderRadius: 3,
                          background: badge.bg, color: badge.text,
                          fontFamily: 'monospace', letterSpacing: '0.04em',
                          whiteSpace: 'nowrap'
                        }}>
                          {gs.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Usage tip */}
              <div style={{ marginTop: 14, padding: '10px 12px', background: '#0a0a0a', borderRadius: 8, border: '1px solid #151515' }}>
                <p style={{ margin: 0, fontSize: 10, color: '#444', fontFamily: 'monospace', lineHeight: 1.55 }}>
                  💡 Tap a card to expand. Select 2 stands to compare side-by-side. Filters narrow by price or priority.
                </p>
              </div>
            </div>
          </div>

          {/* Right: cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.length === 0 ? (
              <div style={{ padding: 48, textAlign: 'center', color: '#555', fontFamily: 'monospace' }}>
                No grandstands match your filters.
                <br />
                <button
                  onClick={() => { setPriceFilter('all'); setBestForFilter('all'); }}
                  style={{
                    marginTop: 12, background: 'none',
                    border: '1px solid #2a2a2a', color: '#888',
                    borderRadius: 6, padding: '6px 14px',
                    cursor: 'pointer', fontFamily: 'monospace', fontSize: 11
                  }}
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              filtered.map(gs => (
                <div
                  key={gs.id}
                  ref={el => { cardRefs.current[gs.id] = el; }}
                  onMouseEnter={() => setHoveredId(gs.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <GrandstandCard
                    gs={gs}
                    isActive={activeId === gs.id}
                    isCompared={compareIds.includes(gs.id)}
                    showCompareBtn={
                      isMobile ||
                      hoveredId === gs.id ||
                      compareIds.includes(gs.id)
                    }
                    onSelect={handleSelect}
                    onCompare={handleCompare}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Inline compare panel */}
      {compareIds.length === 2 && (
        <div ref={comparePanelRef} style={{ padding: '0 16px' }}>
          <ComparePanel
            grandstands={grandstands}
            ids={compareIds as [string, string]}
            onClose={() => setCompareIds([])}
          />
        </div>
      )}
    </div>
  );
}
