export default function AkhtarAI() {
  const skinTypes = [
    { name: 'Oily', match: 72, color: 'var(--rose)' },
    { name: 'Combination', match: 63, color: 'var(--amber)' },
    { name: 'Dry', match: 58, color: 'var(--teal)' },
    { name: 'Sensitive', match: 45, color: 'var(--purple)' },
  ];

  const concerns = [
    { name: 'Acne-prone', match: 72, color: 'var(--rose)' },
    { name: 'Pigmentation', match: 58, color: 'var(--amber)' },
    { name: 'Dehydrated', match: 49, color: 'var(--teal)' },
    { name: 'Anti-ageing', match: 28, color: 'var(--blue)' },
  ];

  const recommendations = [
    {
      icon: '✦',
      title: 'Boost Niacinamide Serum in Bengaluru + Hyderabad',
      detail: 'High acne-prone match rate in these cities · Est. +₹12,000 incremental revenue at ₹1,500 boost spend (8× ROI)',
      color: 'accent',
      buttonText: 'Activate Boost',
      buttonClass: 'btn-primary',
    },
    {
      icon: '◈',
      title: 'Target "Dehydration" segment with HA Toner',
      detail: '49% match rate can reach 65%+ with targeted boost in monsoon season · Est. 320 incremental impressions/day',
      color: 'teal',
      buttonText: 'Plan Boost',
      buttonClass: 'btn-teal',
    },
    {
      icon: '❋',
      title: 'Add "fragrance-free" tags to Ceramide Repair Cream',
      detail: 'Will unlock matching to 38,000 sensitive-skin users currently not seeing your SKU · Free action, no spend required',
      color: 'text',
      buttonText: 'Add Tags',
      buttonClass: 'btn-ghost',
    },
  ];

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-medium tracking-tight">
          Akhtar <span className="text-[var(--accent)] italic">AI Insights</span>
        </h1>
        <p className="text-xs text-[var(--muted)] mt-1">
          Optimise your Akhtar match rates, ingredient tagging, and skin-type targeting
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Match Performance by Skin Type */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Match Performance by Skin Type
          </h3>
          <div className="space-y-2">
            {skinTypes.map((type) => (
              <div key={type.name} className="flex items-center gap-2.5">
                <div className="w-22 text-[11.5px] text-[var(--text)] flex-shrink-0">{type.name}</div>
                <div className="flex-1 h-1 bg-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden">
                  <div className="h-full rounded-sm" style={{ width: `${type.match}%`, background: type.color }} />
                </div>
                <div className="w-9 text-[11px] font-medium text-right" style={{ color: type.color }}>
                  {type.match}%
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3.5 p-3 bg-[rgba(155,139,212,0.06)] border border-[rgba(155,139,212,0.15)] rounded-lg text-[11px] text-[var(--muted)]">
            ✦ Sensitive skin match rate (45%) is below platform avg of 54%. Add "fragrance-free" and "hypoallergenic" tags to eligible SKUs to improve score.
          </div>
        </div>

        {/* Match Performance by Concern */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Match Performance by Concern
          </h3>
          <div className="space-y-2">
            {concerns.map((concern) => (
              <div key={concern.name} className="flex items-center gap-2.5">
                <div className="w-22 text-[11.5px] text-[var(--text)] flex-shrink-0">{concern.name}</div>
                <div className="flex-1 h-1 bg-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden">
                  <div className="h-full rounded-sm" style={{ width: `${concern.match}%`, background: concern.color }} />
                </div>
                <div className="w-9 text-[11px] font-medium text-right" style={{ color: concern.color }}>
                  {concern.match}%
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3.5 p-3 bg-[rgba(106,159,212,0.06)] border border-[rgba(106,159,212,0.15)] rounded-lg text-[11px] text-[var(--muted)]">
            📈 Anti-ageing match rate is low. Add "Retinol", "Peptides", "Collagen-support" tags where applicable to capture this high-intent segment.
          </div>
        </div>
      </div>

      {/* Akhtar Boost Recommendations */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
        <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
          Akhtar Boost Recommendations
        </h3>
        <div className="space-y-2.5">
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 p-3.5 rounded-lg border ${
                rec.color === 'accent'
                  ? 'bg-[rgba(232,196,160,0.05)] border-[rgba(232,196,160,0.13)]'
                  : rec.color === 'teal'
                  ? 'bg-[rgba(107,184,168,0.04)] border-[rgba(107,184,168,0.12)]'
                  : 'bg-[var(--surface2)] border-[var(--border)]'
              }`}
            >
              <div className="text-lg">{rec.icon}</div>
              <div className="flex-1">
                <div
                  className={`text-xs font-medium mb-0.5 ${
                    rec.color === 'accent'
                      ? 'text-[var(--accent)]'
                      : rec.color === 'teal'
                      ? 'text-[var(--teal)]'
                      : 'text-[var(--text)]'
                  }`}
                >
                  {rec.title}
                </div>
                <div className="text-[11px] text-[var(--muted)] leading-relaxed">{rec.detail}</div>
              </div>
              <button
                className={`text-[10px] px-3 py-1.5 rounded font-medium transition-all whitespace-nowrap ${
                  rec.buttonClass === 'btn-primary'
                    ? 'bg-[var(--accent)] text-[#1a1208] hover:bg-[var(--accent2)]'
                    : rec.buttonClass === 'btn-teal'
                    ? 'bg-[rgba(107,184,168,0.12)] text-[var(--teal)] border border-[rgba(107,184,168,0.2)] hover:bg-[rgba(107,184,168,0.2)]'
                    : 'bg-transparent text-[var(--muted)] border border-[var(--border)] hover:border-[var(--border-h)] hover:text-[var(--text)]'
                }`}
              >
                {rec.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
