export default function Benchmarking() {
  const metrics = [
    { name: 'Return Rate', you: '3.4%', categoryAvg: '3.5%', topPerformer: '2.1%', status: 'better' },
    { name: 'Dispatch Rate', you: '94%', categoryAvg: '91%', topPerformer: '93%', status: 'better' },
    { name: 'Avg Rating', you: '4.7★', categoryAvg: '4.4★', topPerformer: '4.6★', status: 'better' },
    { name: 'Repeat Purchase', you: '38%', categoryAvg: '29%', topPerformer: '34%', status: 'better' },
    { name: 'AOV', you: '₹1,050', categoryAvg: '₹840', topPerformer: '₹1,200', status: 'worse' },
    { name: 'Conversion Rate', you: '3.8%', categoryAvg: '4.2%', topPerformer: '5.1%', status: 'worse' },
  ];

  const insights = [
    {
      icon: '🏆',
      type: 'positive',
      title: 'Above-average AOV and repeat purchase',
      body: '₹1,050 AOV and 38% repeat rate both beat category. Strong LTV signals — invest in AI Boosts to acquire more of this customer profile.',
    },
    {
      icon: '📦',
      type: 'warning',
      title: 'Return rate 1.1% above skincare avg',
      body: 'Driven by Vitamin C SPF pump issue (4.2% return rate on that SKU alone). Fix packaging to bring overall rate to ~2.3%.',
    },
    {
      icon: '🎯',
      type: 'info',
      title: 'Conversion rate gap is closeable',
      body: 'At 3.8% vs 4.2% avg, adding more ingredient tags and Akhtar Boosts could close the gap and add ~80 orders/month.',
    },
  ];

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-medium tracking-tight">
          Performance <span className="text-[var(--accent)] italic">Benchmarking</span>
        </h1>
        <p className="text-xs text-[var(--muted)] mt-1">Compare your metrics against category averages and top performers</p>
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors mb-4">
        <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
          Skincare Category Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                  Metric
                </th>
                <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                  You
                </th>
                <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                  Category Avg
                </th>
                <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                  Top Performer
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric) => (
                <tr key={metric.name}>
                  <td className="py-2.5 border-b border-[var(--border)] text-xs text-[var(--text)]">{metric.name}</td>
                  <td
                    className={`py-2.5 border-b border-[var(--border)] text-xs font-medium ${
                      metric.status === 'better' ? 'text-[var(--green)]' : 'text-[var(--red)]'
                    }`}
                  >
                    {metric.you}
                  </td>
                  <td className="py-2.5 border-b border-[var(--border)] text-[11.5px] text-[var(--muted)]">
                    {metric.categoryAvg}
                  </td>
                  <td className="py-2.5 border-b border-[var(--border)] text-[11.5px] text-[var(--muted)]">
                    {metric.topPerformer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
        <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">Key Insights</h3>
        <div className="space-y-3">
          {insights.map((insight, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-lg border ${
                insight.type === 'positive'
                  ? 'bg-[rgba(122,184,122,0.05)] border-[rgba(122,184,122,0.15)]'
                  : insight.type === 'warning'
                  ? 'bg-[rgba(212,168,87,0.05)] border-[rgba(212,168,87,0.15)]'
                  : 'bg-[rgba(106,159,212,0.05)] border-[rgba(106,159,212,0.15)]'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-lg">{insight.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-[var(--text)] mb-1">{insight.title}</div>
                  <div className="text-[11px] text-[var(--muted)] leading-relaxed">{insight.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
