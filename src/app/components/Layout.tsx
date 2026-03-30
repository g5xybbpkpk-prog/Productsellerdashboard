import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { cn } from '../components/ui/utils';

const navSections = [
  {
    label: 'Overview',
    items: [
      { path: '/', label: 'Dashboard', icon: '◈' },
      { path: '/activity', label: 'Activity Feed', icon: '◷', badge: { text: '14 new', type: 'blue' } },
    ],
  },
  {
    label: 'Growth Engine (Ads)',
    items: [
      { path: '/campaigns', label: 'Campaigns', icon: '◁' },
      { path: '/mishti-ai', label: 'Mishti AI Boosts', icon: '✦' },
      { path: '/ad-wallet', label: 'Ad Wallet', icon: '◻' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { path: '/orders', label: 'Orders', icon: '◷', badge: { text: '3 urgent', type: 'red' } },
      { path: '/returns', label: 'Returns & RTO', icon: '◁' },
      { path: '/inventory', label: 'Inventory', icon: '◈' },
    ],
  },
  {
    label: 'Analytics',
    items: [
      { path: '/analytics', label: 'Deep Dive', icon: '◻' },
      { path: '/benchmarking', label: 'Benchmarking', icon: '◻' },
      { path: '/finance', label: 'Payouts', icon: '◻' },
      { path: '/gst-reports', label: 'GST Reports', icon: '◻' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { path: '/payout-simulator', label: 'Payout Simulator', icon: '◈' },
      { path: '/logistics', label: 'Logistics', icon: '◷' },
      { path: '/support', label: 'Customer Support', icon: '◻', badge: { text: '2 open', type: 'amber' } },
    ],
  },
  {
    label: 'Intelligence',
    items: [
      { path: '/akhtar-ai', label: 'Akhtar AI Insights', icon: '✦' },
    ],
  },
  {
    label: 'Content',
    items: [
      { path: '/reviews', label: 'Reviews', icon: '⭐', badge: { text: '2 new', type: 'amber' } },
    ],
  },
  {
    label: 'Settings',
    items: [
      { path: '/storefront', label: 'Brand Profile', icon: '◻' },
      { path: '/compliance', label: 'Compliance Vault', icon: '◻' },
      { path: '/bank-kyc', label: 'Bank & KYC', icon: '◻' },
      { path: '/team-access', label: 'Team Access', icon: '◻' },
    ],
  },
];

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="show-mobile fixed top-4 left-4 z-50 p-2 rounded-lg"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen w-[230px] overflow-y-auto transition-transform duration-300 z-40',
          'lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ background: 'var(--surface)', borderRight: '1px solid var(--border)' }}
      >
        {/* Brand Mark */}
        <div className="px-5 py-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="font-serif text-[17px] font-medium mb-0.5" style={{ color: 'var(--accent)', letterSpacing: '0.4px', lineHeight: 1.2 }}>
            Relaxed &<br />Refresh
          </div>
          <div className="text-[9px] mt-0.5" style={{ color: 'var(--muted)', letterSpacing: '1.8px', textTransform: 'uppercase' }}>
            Brand Portal
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-2">
          {navSections.map((section) => (
            <div key={section.label} className="py-2.5">
              <div
                className="text-[9px] px-5 py-1.5 opacity-50"
                style={{
                  color: 'var(--muted)',
                  letterSpacing: '1.6px',
                  textTransform: 'uppercase',
                }}
              >
                {section.label}
              </div>
              {section.items.map((item) => {
                const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      'flex items-center gap-2.5 px-5 py-2 text-[12.5px] transition-all border-l-2',
                      isActive
                        ? 'font-medium'
                        : 'border-transparent'
                    )}
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--muted)',
                      borderLeftColor: isActive ? 'var(--accent)' : 'transparent',
                      background: isActive ? 'rgba(232, 196, 160, 0.055)' : 'transparent',
                    }}
                  >
                    <span className="text-xs w-3.5 opacity-65 flex-shrink-0">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span
                        className="text-[9px] font-medium px-1.5 py-0.5 rounded-full ml-auto"
                        style={{
                          background: item.badge.type === 'red' ? 'rgba(201, 96, 96, 0.18)' : item.badge.type === 'amber' ? 'rgba(212, 168, 87, 0.18)' : 'rgba(106, 159, 212, 0.15)',
                          color: item.badge.type === 'red' ? 'var(--red)' : item.badge.type === 'amber' ? 'var(--amber)' : 'var(--blue)',
                        }}
                      >
                        {item.badge.text}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Commission Badge */}
        <div className="mx-3.5 mt-auto mb-5 p-3.5 rounded-[10px]" style={{ background: 'rgba(122, 184, 122, 0.08)', border: '1px solid rgba(122, 184, 122, 0.2)' }}>
          <div className="text-[11.5px] font-medium mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--green)' }}>
            ✓ 0% Commission Tier
          </div>
          <div className="text-[10px] leading-snug" style={{ color: 'var(--muted)' }}>
            You keep 100% of your margins. Invest your savings into Ads to grow faster!
          </div>
          <a href="#" className="text-[9.5px] underline inline-block mt-2 opacity-80 hover:opacity-100" style={{ color: 'var(--text)' }}>
            How we make money →
          </a>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="show-mobile fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-[230px] p-7 md:p-8 overflow-y-auto relative z-10">
        <Outlet />
      </main>
    </div>
  );
}