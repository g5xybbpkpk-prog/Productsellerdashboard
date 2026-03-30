import { Button } from '../components/ui/button';

export default function Campaigns() {
  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Promos & <span className="italic" style={{ color: 'var(--accent)' }}>Offers</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Manage your campaigns · Opt into platform sales · Create brand-specific deals
          </p>
        </div>
        <Button size="sm" style={{ background: 'var(--accent)', color: '#1a1208' }}>
          + New Offer
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {/* Revenue Split */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Revenue split — organic vs promo
          </div>
          <div className="flex gap-5 items-center">
            <svg viewBox="0 0 100 100" width="90" height="90">
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--surface2)" strokeWidth="11" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--teal)" strokeWidth="11" strokeDasharray="139 100" strokeDashoffset="0" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--purple)" strokeWidth="11" strokeDasharray="62 177" strokeDashoffset="-139" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--amber)" strokeWidth="11" strokeDasharray="38 201" strokeDashoffset="-201" transform="rotate(-90 50 50)" />
              <text x="50" y="46" textAnchor="middle" fill="var(--text)" fontFamily="Cormorant Garamond, serif" fontSize="16">
                58%
              </text>
              <text x="50" y="57" textAnchor="middle" fill="var(--muted)" fontFamily="DM Sans, sans-serif" fontSize="7">
                organic
              </text>
            </svg>
            <div className="flex-1 space-y-2">
              {[
                { label: 'Organic sales', pct: '58%', color: 'var(--teal)' },
                { label: 'Platform sale', pct: '26%', color: 'var(--purple)' },
                { label: 'Brand offers', pct: '16%', color: 'var(--amber)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ background: item.color }} />
                  <span className="flex-1 text-xs" style={{ color: 'var(--muted)' }}>
                    {item.label}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                    {item.pct}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Sales */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Platform — Opt-in Sales
          </div>
          <div className="space-y-2">
            {[
              { name: 'Summer Glow Sale', dates: 'Jul 15–20 · 20% off sitewide skincare', active: true },
              { name: 'Akhtar Boost Week', dates: 'Jun 28–Jul 5 · AI-recommended SKUs featured', active: true },
              { name: 'Monsoon Skincare Edit', dates: 'Starts Jul 22 · Curated editorial feature', active: false },
            ].map((promo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
              >
                <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(155, 139, 212, 0.13)', color: 'var(--purple)' }}>
                  Platform
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                    {promo.name}
                  </div>
                  <div className="text-[10.5px] mt-0.5" style={{ color: 'var(--muted)' }}>
                    {promo.dates}
                  </div>
                </div>
                <button
                  className="w-8 h-4.5 rounded-full relative transition-colors flex-shrink-0"
                  style={{ background: promo.active ? 'var(--teal)' : 'var(--faint)' }}
                >
                  <div
                    className="absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full transition-all"
                    style={{ left: promo.active ? 'calc(100% - 16px)' : '2px' }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Offers */}
      <div className="rounded-[13px] p-5 animate-fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', animationDelay: '0.1s' }}>
        <div className="flex items-center justify-between mb-3.5">
          <div className="text-[10.5px] font-medium uppercase tracking-wider" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Your Brand Offers
          </div>
          <div className="text-[11px] cursor-pointer opacity-80 hover:opacity-100" style={{ color: 'var(--accent)' }}>
            + Create new →
          </div>
        </div>
        <div className="space-y-2">
          {[
            { type: 'Brand', name: 'Buy 1 Get 1 — Niacinamide Serum', status: 'Active · Ends Jun 30', stat: '+₹8,400', statLabel: 'revenue lifted', active: true },
            { type: 'Near Expiry', name: '30% off — HA Toner (exp. Aug 2025)', status: '12 units to clear', stat: '12 units', statLabel: 'to clear', active: true },
            { type: 'Brand', name: 'LUMIERE15 — 15% off first order', status: 'Ongoing · 482 redemptions · No cap', stat: '482', statLabel: 'redemptions', active: true },
          ].map((offer, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg transition-colors"
              style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
            >
              <span
                className="text-[9.5px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: offer.type === 'Brand' ? 'rgba(107, 184, 168, 0.12)' : 'rgba(212, 168, 87, 0.11)',
                  color: offer.type === 'Brand' ? 'var(--teal)' : 'var(--amber)',
                }}
              >
                {offer.type}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                  {offer.name}
                </div>
                <div className="text-[10.5px] mt-0.5" style={{ color: 'var(--muted)' }}>
                  {offer.status}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-medium" style={{ color: offer.type === 'Brand' && i === 0 ? 'var(--green)' : 'var(--text)' }}>
                  {offer.stat}
                </div>
                <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                  {offer.statLabel}
                </div>
              </div>
              <button
                className="w-8 h-4.5 rounded-full relative transition-colors flex-shrink-0"
                style={{ background: offer.active ? 'var(--teal)' : 'var(--faint)' }}
              >
                <div
                  className="absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full transition-all"
                  style={{ left: offer.active ? 'calc(100% - 16px)' : '2px' }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
