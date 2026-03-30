import { Link } from 'react-router';
import { Download, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { mockInventory, mockLeakage } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="max-w-[1400px]">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Brand <span className="italic" style={{ color: 'var(--accent)' }}>Overview</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            June 2025 · Lumière Botanics · Last updated 2 min ago
          </p>
        </div>
        <div className="flex gap-2.5">
          <Button variant="outline" size="sm" className="text-xs">
            <Download size={14} className="mr-1.5" />
            Export Report
          </Button>
          <Button size="sm" className="text-xs" style={{ background: 'var(--accent)', color: '#1a1208' }}>
            <Plus size={14} className="mr-1.5" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Action Bar */}
      <div
        className="rounded-[13px] p-4 md:p-5 mb-5 animate-fade-up"
        style={{
          background: 'linear-gradient(135deg, rgba(201, 96, 96, 0.07) 0%, rgba(212, 168, 87, 0.05) 100%)',
          border: '1px solid rgba(201, 96, 96, 0.18)',
        }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="text-[11px] font-medium tracking-wide uppercase opacity-90" style={{ color: 'var(--red)', letterSpacing: '0.8px' }}>
            ⚡ Action Required — 3 urgent items
          </div>
          <div className="text-[11px]" style={{ color: 'var(--muted)' }}>
            Must resolve today to avoid penalties
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {/* Action Item 1 */}
          <div
            className="flex items-center gap-3 p-2.5 md:p-3.5 rounded-[9px] transition-colors cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '2px solid var(--red)', borderRadius: '0 9px 9px 0' }}
          >
            <div className="text-base flex-shrink-0 w-5.5 text-center">🚨</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium leading-snug" style={{ color: 'var(--text)' }}>
                3 orders breaching 24h SLA — dispatch window closing soon
              </div>
              <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>
                #RNR-88430 · #RNR-88427 · #RNR-88419 — all require packing + label print
              </div>
            </div>
            <div className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(201, 96, 96, 0.15)', color: 'var(--red)' }}>
              1h 48m left
            </div>
            <Link to="/orders">
              <Button size="sm" variant="destructive" className="text-[11px] flex-shrink-0">
                View Orders →
              </Button>
            </Link>
          </div>

          {/* Action Item 2 */}
          <div
            className="flex items-center gap-3 p-2.5 md:p-3.5 rounded-[9px] transition-colors cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '2px solid var(--amber)', borderRadius: '0 9px 9px 0' }}
          >
            <div className="text-base flex-shrink-0 w-5.5 text-center">⚠️</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium leading-snug" style={{ color: 'var(--text)' }}>
                1 return dispute requires your packing video upload — deadline today
              </div>
              <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>
                Order #RNR-88304 · Vitamin C Brightening SPF · customer claims damaged
              </div>
            </div>
            <Link to="/returns">
              <Button size="sm" className="text-[11px]" style={{ background: 'rgba(212, 168, 87, 0.13)', color: 'var(--amber)', border: '1px solid rgba(212, 168, 87, 0.22)' }}>
                Upload Proof →
              </Button>
            </Link>
          </div>

          {/* Action Item 3 */}
          <div
            className="flex items-center gap-3 p-2.5 md:p-3.5 rounded-[9px] transition-colors cursor-pointer"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '2px solid var(--blue)', borderRadius: '0 9px 9px 0' }}
          >
            <div className="text-base flex-shrink-0 w-5.5 text-center">📦</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium leading-snug" style={{ color: 'var(--text)' }}>
                2 products out of stock — currently hidden from Akhtar recommendations
              </div>
              <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>
                Retinol Night Repair (LB-RET-30) · Ceramide Repair Cream (LB-CER-50)
              </div>
            </div>
            <Link to="/inventory">
              <Button size="sm" className="text-[11px]" style={{ background: 'rgba(106, 159, 212, 0.12)', color: 'var(--blue)', border: '1px solid rgba(106, 159, 212, 0.2)' }}>
                Update Stock →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4.5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {[
          { label: 'Revenue (MTD)', value: '₹2.4L', delta: '↑ 18.3%', up: true, color: 'var(--green)' },
          { label: 'Orders Fulfilled', value: '847', delta: '↑ 12.1%', up: true, color: 'var(--teal)' },
          { label: 'Return Rate', value: '3.2%', delta: '↑ 0.4%', up: false, color: 'var(--rose)' },
          { label: 'Avg. Dispatch', value: '14h', delta: '↓ 3h faster', up: true, color: 'var(--amber)' },
        ].map((kpi, i) => (
          <div
            key={i}
            className="rounded-xl p-4 transition-colors"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="text-[10.5px] mb-2" style={{ color: 'var(--muted)', letterSpacing: '0.3px' }}>
              {kpi.label}
            </div>
            <div className="font-serif text-[28px] font-medium leading-none" style={{ color: 'var(--text)' }}>
              {kpi.value}
            </div>
            <div
              className="inline-flex items-center gap-1 text-[10.5px] font-medium mt-1.5 px-2 py-0.5 rounded-full"
              style={{
                background: kpi.up ? 'rgba(122, 184, 122, 0.11)' : 'rgba(201, 96, 96, 0.11)',
                color: kpi.up ? 'var(--green)' : 'var(--red)',
              }}
            >
              {kpi.delta}
            </div>
            {/* Sparkline */}
            <div className="mt-2.5 h-[30px]">
              <svg width="100%" height="30" viewBox="0 0 120 30">
                <path
                  d={i === 0 ? 'M0 26C15 20,25 24,40 16C55 8,70 12,85 6C100 0,110 4,120 2' : i === 1 ? 'M0 22C20 16,35 18,55 12C70 6,90 10,120 4' : i === 2 ? 'M0 14C25 10,40 18,60 16C80 14,100 20,120 18' : 'M0 18C20 22,40 14,60 12C80 10,100 6,120 4'}
                  stroke={kpi.color}
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Akhtar Banner */}
      <div
        className="rounded-[13px] p-4 md:p-4.5 flex flex-col md:flex-row items-start md:items-center gap-4.5 mb-4.5 animate-fade-up"
        style={{
          background: 'linear-gradient(135deg, rgba(232, 196, 160, 0.07) 0%, rgba(155, 139, 212, 0.05) 100%)',
          border: '1px solid rgba(232, 196, 160, 0.14)',
          animationDelay: '0.1s',
        }}
      >
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: 'rgba(232, 196, 160, 0.1)', border: '1px solid rgba(232, 196, 160, 0.18)' }}
        >
          ✦
        </div>
        <div className="flex-1">
          <h3 className="text-[12.5px] font-medium mb-0.5" style={{ color: 'var(--accent)' }}>
            Akhtar AI — Skin Match Insights
          </h3>
          <p className="text-[11.5px] leading-snug" style={{ color: 'var(--muted)' }}>
            Your products are matched to <strong style={{ color: 'var(--accent)' }}>2,841 users</strong> this month. Avg CPC:{' '}
            <strong style={{ color: 'var(--text)' }}>₹18.00</strong> ·{' '}
            <a href="#" className="underline decoration-1" style={{ color: 'var(--accent)' }}>
              View Pricing Details
            </a>
          </p>
        </div>
        <div className="flex gap-5.5 flex-shrink-0">
          {[
            { val: '2,841', lbl: 'AI impressions' },
            { val: '34%', lbl: 'Conversion' },
            { val: '4.7★', lbl: 'Avg. rating' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-[22px] font-medium leading-none" style={{ color: 'var(--text)' }}>
                {stat.val}
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                {stat.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        {/* Monthly Revenue Chart */}
        <div className="lg:col-span-2 rounded-[13px] p-5 transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-3.5">
            <div className="text-[10.5px] font-medium uppercase tracking-wider" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
              Monthly Revenue
            </div>
            <Link to="/analytics" className="text-[11px] opacity-80 hover:opacity-100 cursor-pointer" style={{ color: 'var(--accent)' }}>
              Deep Dive →
            </Link>
          </div>
          {/* Simple bar chart visualization */}
          <div className="flex items-end gap-1.5 h-[140px] mt-4">
            {[56, 50, 60, 63, 57, 64].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end" style={{ height: `${height}%` }}>
                  <div className="w-full rounded-t" style={{ height: '100%', background: i === 5 ? 'var(--accent)' : 'var(--teal)', opacity: i === 5 ? 0.88 : 0.7 }} />
                </div>
                <div className="text-[9px]" style={{ color: i === 5 ? 'var(--accent)' : 'var(--muted)' }}>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3.5 mt-3">
            <div className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--muted)' }}>
              <div className="w-2 h-2 rounded-sm" style={{ background: 'var(--teal)' }} />
              Prepaid
            </div>
            <div className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--muted)' }}>
              <div className="w-2 h-2 rounded-sm" style={{ background: 'rgba(107, 184, 168, 0.3)' }} />
              COD
            </div>
          </div>
        </div>

        {/* Order Status Donut */}
        <div className="rounded-[13px] p-5 transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Order Status
          </div>
          <div className="flex justify-center mb-3.5">
            <svg viewBox="0 0 120 120" width="100" height="100">
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--surface2)" strokeWidth="13" />
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--teal)" strokeWidth="13" strokeDasharray="143 133" strokeDashoffset="0" transform="rotate(-90 60 60)" />
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--amber)" strokeWidth="13" strokeDasharray="77 199" strokeDashoffset="-143" transform="rotate(-90 60 60)" />
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--green)" strokeWidth="13" strokeDasharray="33 243" strokeDashoffset="-220" transform="rotate(-90 60 60)" />
              <circle cx="60" cy="60" r="44" fill="none" stroke="var(--rose)" strokeWidth="13" strokeDasharray="22 254" strokeDashoffset="-253" transform="rotate(-90 60 60)" />
              <text x="60" y="55" textAnchor="middle" fill="var(--text)" fontFamily="Cormorant Garamond, serif" fontSize="19" fontWeight="500">
                847
              </text>
              <text x="60" y="67" textAnchor="middle" fill="var(--muted)" fontFamily="DM Sans, sans-serif" fontSize="8">
                orders
              </text>
            </svg>
          </div>
          <div className="space-y-1.5">
            {[
              { dot: 'var(--teal)', name: 'Confirmed', count: 440, pct: '52%' },
              { dot: 'var(--amber)', name: 'In transit', count: 237, pct: '28%' },
              { dot: 'var(--green)', name: 'Delivered', count: 102, pct: '12%' },
              { dot: 'var(--rose)', name: 'Pending COD', count: 68, pct: '8%' },
            ].map((status, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: status.dot }} />
                <div className="flex-1 text-xs" style={{ color: 'var(--text)' }}>
                  {status.name}
                </div>
                <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                  {status.count}
                </div>
                <div className="text-[10.5px] w-8 text-right" style={{ color: 'var(--muted)' }}>
                  {status.pct}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory & Financial Leakage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        {/* Inventory Status */}
        <div className="rounded-[13px] p-5 transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-3.5">
            <div className="text-[10.5px] font-medium uppercase tracking-wider" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
              Inventory Status
            </div>
            <Link to="/inventory" className="text-[11px] opacity-80 hover:opacity-100 cursor-pointer" style={{ color: 'var(--accent)' }}>
              Manage →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                  <th className="text-left py-2.5 font-medium text-[9.5px] uppercase tracking-wide opacity-65" style={{ color: 'var(--muted)' }}>
                    Product
                  </th>
                  <th className="text-left py-2.5 font-medium text-[9.5px] uppercase tracking-wide opacity-65" style={{ color: 'var(--muted)' }}>
                    Stock
                  </th>
                  <th className="text-left py-2.5 font-medium text-[9.5px] uppercase tracking-wide opacity-65" style={{ color: 'var(--muted)' }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockInventory.slice(0, 5).map((item) => (
                  <tr key={item.id} className="border-b" style={{ borderColor: 'var(--border)' }}>
                    <td className="py-2.5 font-medium" style={{ color: 'var(--text)' }}>
                      {item.name}
                    </td>
                    <td className="py-2.5" style={{ color: 'var(--text)' }}>
                      {item.stock}
                    </td>
                    <td className="py-2.5">
                      <span
                        className="text-[9.5px] font-medium px-2 py-0.5 rounded-full inline-block"
                        style={{
                          background:
                            item.status === 'Low'
                              ? 'rgba(212, 168, 87, 0.11)'
                              : item.status === 'Out of stock'
                              ? 'rgba(201, 96, 96, 0.11)'
                              : 'rgba(122, 184, 122, 0.11)',
                          color:
                            item.status === 'Low'
                              ? 'var(--amber)'
                              : item.status === 'Out of stock'
                              ? 'var(--red)'
                              : 'var(--green)',
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Leakage */}
        <div className="rounded-[13px] p-5 transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Financial Leakage — June
          </div>
          <div className="space-y-2.5">
            {mockLeakage.chart.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="text-[11.5px] w-[120px] flex-shrink-0" style={{ color: 'var(--text)' }}>
                  {item.label}
                </div>
                <div className="flex-1 h-5.5 rounded-md overflow-hidden relative" style={{ background: 'var(--surface2)' }}>
                  <div
                    className="h-full flex items-center px-2 text-[10.5px] font-medium transition-all duration-500"
                    style={{
                      width: `${item.pct}%`,
                      background: item.color,
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {item.amount}
                  </div>
                </div>
                {item.dispute && (
                  <Button size="sm" variant="outline" className="text-[9px] h-6 px-2 flex-shrink-0">
                    Dispute
                  </Button>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {mockLeakage.summary.map((stat, i) => (
              <div key={i} className="p-2.5 rounded-lg" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                <div className="font-serif text-xl font-medium" style={{ color: stat.color }}>
                  {stat.val}
                </div>
                <div className="text-[10px] mt-0.5 leading-snug" style={{ color: 'var(--muted)' }}>
                  {stat.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
