export default function Logistics() {
  const carriers = [
    { name: 'Delhivery', enabled: true },
    { name: 'Bluedart', enabled: true },
    { name: 'Ecom Express', enabled: false },
    { name: 'Shadowfax', enabled: false },
  ];

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-medium tracking-tight">
          Logistics <span className="text-[var(--accent)] italic">Management</span>
        </h1>
        <p className="text-xs text-[var(--muted)] mt-1">Configure shipping carriers and logistics preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Shipping Carriers */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Active Carriers
          </h3>
          <div className="space-y-3">
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                className="flex items-center justify-between p-3 bg-[var(--surface2)] border border-[var(--border)] rounded-lg"
              >
                <span className="text-xs font-medium text-[var(--text)]">{carrier.name}</span>
                <label className="flex items-center gap-2 text-[11px] text-[var(--muted)] cursor-pointer">
                  <input type="checkbox" checked={carrier.enabled} readOnly className="accent-[var(--teal)]" />
                  {carrier.enabled ? 'Enabled' : 'Disabled'}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Preferences */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Shipping Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Default Package Weight
              </label>
              <input
                type="text"
                defaultValue="500g"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">Package Dimensions</label>
              <input
                type="text"
                defaultValue="20 × 15 × 5 cm"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
            <div className="pt-3 border-t border-[var(--border)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[var(--text)]">Enable OTP verification for COD</span>
                <input type="checkbox" defaultChecked className="accent-[var(--teal)]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text)]">Auto-generate shipping labels</span>
                <input type="checkbox" defaultChecked className="accent-[var(--teal)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
