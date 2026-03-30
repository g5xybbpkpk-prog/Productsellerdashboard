import { useState } from 'react';
import { revenueData, periodLabels } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';

const periods = ['7d', '30d', '90d', 'ytd'] as const;
type Period = typeof periods[number];

export default function Analytics() {
  const [activePeriod, setActivePeriod] = useState<Period>('30d');

  const data = revenueData[activePeriod];
  const maxValue = Math.max(...data);

  return (
    <div className="max-w-[1400px]">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Analytics <span className="italic" style={{ color: 'var(--accent)' }}>Deep Dive</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Lumière Botanics · Performance intelligence · June 2025
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          {/* Period Toggle */}
          <div className="flex gap-1 rounded-lg p-1" style={{ background: 'var(--surface2)' }}>
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setActivePeriod(period)}
                className="text-[10.5px] font-medium px-2.5 py-1 rounded-md transition-all"
                style={{
                  background: activePeriod === period ? 'var(--surface)' : 'transparent',
                  color: activePeriod === period ? 'var(--text)' : 'var(--muted)',
                  boxShadow: activePeriod === period ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
                }}
              >
                {period.toUpperCase()}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            <Download size={14} className="mr-1.5" />
            Export
          </Button>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-4 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        <div className="lg:col-span-2 rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-3.5">
            <div className="text-[10.5px] font-medium uppercase tracking-wider" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
              Revenue Breakdown
            </div>
            <div className="text-[11px]" style={{ color: 'var(--muted)' }}>
              {periodLabels[activePeriod]}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-2.5 mb-3.5">
            <div>
              <div className="text-[10px] mb-1" style={{ color: 'var(--muted)' }}>
                Total Revenue
              </div>
              <div className="font-serif text-2xl font-medium" style={{ color: 'var(--text)' }}>
                ₹2,40,250
              </div>
              <div className="text-[10px]" style={{ color: 'var(--green)' }}>
                ↑ 18.3% vs last month
              </div>
            </div>
            <div>
              <div className="text-[10px] mb-1" style={{ color: 'var(--muted)' }}>
                Prepaid
              </div>
              <div className="font-serif text-2xl font-medium" style={{ color: 'var(--teal)' }}>
                ₹1,55,860
              </div>
              <div className="text-[10px]" style={{ color: 'var(--muted)' }}>
                64.9% of revenue
              </div>
            </div>
            <div>
              <div className="text-[10px] mb-1" style={{ color: 'var(--muted)' }}>
                COD
              </div>
              <div className="font-serif text-2xl font-medium" style={{ color: 'var(--amber)' }}>
                ₹84,390
              </div>
              <div className="text-[10px]" style={{ color: 'var(--muted)' }}>
                35.1% of revenue
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="flex items-end gap-1 h-[200px]">
            {data.map((value, i) => {
              const heightPercent = (value / maxValue) * 100;
              const isPeak = value === maxValue;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col justify-end" style={{ height: '100%' }}>
                    <div
                      className="w-full rounded-t transition-all duration-500"
                      style={{
                        height: `${heightPercent}%`,
                        background: isPeak ? 'var(--accent)' : 'rgba(107, 184, 168, 0.5)',
                        opacity: isPeak ? 1 : 0.8,
                      }}
                    />
                  </div>
                  <div className="text-[8.5px]" style={{ color: 'var(--muted)' }}>
                    {i % 5 === 0 || i === data.length - 1 ? i + 1 : ''}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Conversion Funnel
          </div>
          <div className="space-y-2">
            {[
              { label: 'Akhtar Impressions', count: '2,841', pct: 100, color: 'rgba(232, 196, 160, 0.25)' },
              { label: 'Product Page Views', count: '1,704', pct: 60, color: 'rgba(107, 184, 168, 0.3)' },
              { label: 'Add to Cart', count: '682', pct: 40, color: 'rgba(155, 139, 212, 0.3)' },
              { label: 'Purchased', count: '966', pct: 34, color: 'rgba(122, 184, 122, 0.35)' },
            ].map((stage, i) => (
              <div key={i}>
                <div className="flex justify-between text-[11px] mb-1" style={{ color: 'var(--text)' }}>
                  <span>{stage.label}</span>
                  <span style={{ color: 'var(--muted)' }}>{stage.count}</span>
                </div>
                <div className="h-7 rounded-md flex items-center px-2.5 text-[10.5px] font-medium transition-all duration-500" style={{ width: `${stage.pct}%`, background: stage.color, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {stage.count}
                </div>
                {i < 3 && (
                  <div className="text-[9.5px] text-right mt-0.5" style={{ color: 'var(--muted)' }}>
                    {stage.pct}% pass-through
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Performance & Geo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {/* Channel Performance */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Revenue by Channel
          </div>
          <div className="space-y-3">
            {[
              { icon: '✦', name: 'Akhtar AI Recommendations', sub: 'AI skin match → direct purchase', val: '₹97,200', delta: '↑ 28%', up: true, bg: 'rgba(232, 196, 160, 0.1)', color: 'var(--accent)' },
              { icon: '◈', name: 'Organic Search', sub: 'Browse & search on platform', val: '₹79,400', delta: '↑ 12%', up: true, bg: 'rgba(107, 184, 168, 0.1)', color: 'var(--teal)' },
              { icon: '◻', name: 'Platform Sale Events', sub: 'Summer Glow + Akhtar Boost Week', val: '₹38,650', delta: '↑ 44%', up: true, bg: 'rgba(155, 139, 212, 0.1)', color: 'var(--purple)' },
              { icon: '❋', name: 'Brand Coupon Codes', sub: 'LUMIERE15 · BOGO', val: '₹25,000', delta: '↓ 3%', up: false, bg: 'rgba(212, 168, 87, 0.1)', color: 'var(--amber)' },
            ].map((channel, i) => (
              <div key={i}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: channel.bg, color: channel.color }}>
                    {channel.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                      {channel.name}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {channel.sub}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-serif text-base font-medium" style={{ color: 'var(--text)' }}>
                      {channel.val}
                    </div>
                    <div className="text-[10px] font-medium" style={{ color: channel.up ? 'var(--green)' : 'var(--red)' }}>
                      {channel.delta}
                    </div>
                  </div>
                </div>
                {i < 3 && <div className="h-px my-2.5" style={{ background: 'var(--border)' }} />}
              </div>
            ))}
          </div>
        </div>

        {/* Geography */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Revenue by City
          </div>
          <div className="space-y-2">
            {[
              { flag: '🏙', city: 'Mumbai', pct: 88, rev: '₹52,800' },
              { flag: '🌆', city: 'Bengaluru', pct: 72, rev: '₹43,200' },
              { flag: '🏛', city: 'Delhi NCR', pct: 63, rev: '₹38,400' },
              { flag: '🌇', city: 'Hyderabad', pct: 44, rev: '₹26,400' },
              { flag: '🏘', city: 'Pune', pct: 36, rev: '₹21,600' },
              { flag: '🌃', city: 'Chennai', pct: 28, rev: '₹16,800' },
            ].map((geo, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="text-sm w-5.5 text-center">{geo.flag}</div>
                <div className="flex-1 text-xs" style={{ color: 'var(--text)' }}>
                  {geo.city}
                </div>
                <div className="w-20 h-1 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${geo.pct}%`, background: 'var(--teal)' }} />
                </div>
                <div className="text-[11px] w-8 text-right" style={{ color: 'var(--muted)' }}>
                  {Math.round((geo.pct / 88) * 22)}%
                </div>
                <div className="font-serif text-sm w-[52px] text-right" style={{ color: 'var(--text)' }}>
                  {geo.rev}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="rounded-[13px] p-5 animate-fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', animationDelay: '0.15s' }}>
        <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
          AI Insights
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {[
            { icon: '📈', title: 'Niacinamide driving 61% repeat purchase', body: 'Highest LTV product. Consider a bundle with HA Toner to increase AOV on first purchase — Akhtar match rate supports cross-sell.', type: 'positive' },
            { icon: '⚠️', title: 'Vitamin C SPF return rate rising (4.2%)', body: '3 pump-related reviews flagged. Investigate LB-VTC-50 packaging quality with supplier before next restock.', type: 'warning' },
            { icon: '📦', title: '2 OOS SKUs costing ~₹18K in lost revenue', body: 'Retinol Night Repair and Ceramide Repair Cream are hidden from Akhtar. Estimated monthly revenue loss based on previous velocity.', type: 'warning' },
            { icon: '🌆', title: 'Bengaluru growing fastest (+34% MoM)', body: 'Consider targeted Akhtar Boost campaigns for Bengaluru skin concern profile (pigmentation + humidity-related concerns).', type: 'info' },
          ].map((insight, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg"
              style={{
                background: insight.type === 'positive' ? 'rgba(122, 184, 122, 0.04)' : insight.type === 'warning' ? 'rgba(212, 168, 87, 0.04)' : 'rgba(106, 159, 212, 0.04)',
                border: insight.type === 'positive' ? '1px solid rgba(122, 184, 122, 0.2)' : insight.type === 'warning' ? '1px solid rgba(212, 168, 87, 0.2)' : '1px solid rgba(106, 159, 212, 0.2)',
              }}
            >
              <div className="text-[15px] mb-1">{insight.icon}</div>
              <div className="text-[11.5px] font-medium mb-1" style={{ color: 'var(--text)' }}>
                {insight.title}
              </div>
              <div className="text-[11px] leading-snug" style={{ color: 'var(--muted)' }}>
                {insight.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
