export default function AdWallet() {
  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Ad <span className="italic" style={{ color: 'var(--accent)' }}>Wallet</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Manage your advertising budget and track spend
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        {[
          { label: 'Current Balance', val: '₹6,800', color: 'var(--teal)' },
          { label: 'Spent This Month', val: '₹8,450', color: 'var(--amber)' },
          { label: 'Avg. CPC', val: '₹18.00', color: 'var(--text)' },
        ].map((stat, i) => (
          <div key={i} className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="text-[10px] mb-2" style={{ color: 'var(--muted)' }}>
              {stat.label}
            </div>
            <div className="font-serif text-3xl font-medium" style={{ color: stat.color }}>
              {stat.val}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-16">
        <div className="text-5xl mb-4">💳</div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Ad Wallet management interface coming soon
        </p>
      </div>
    </div>
  );
}
