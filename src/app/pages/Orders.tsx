import { useState, useEffect } from 'react';
import { Download, Printer, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { mockOrders } from '../data/mockData';
import { cn } from '../components/ui/utils';

const filterTabs = [
  { id: 'all', label: 'All Orders' },
  { id: 'urgent', label: '🚨 Urgent' },
  { id: 'confirmed', label: 'Confirmed' },
  { id: 'transit', label: 'In Transit' },
  { id: 'delivered', label: 'Delivered' },
  { id: 'cod', label: 'Pending COD' },
];

export default function Orders() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [slaTimer, setSlaTimer] = useState(6480); // 1h 48m in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSlaTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const filteredOrders = mockOrders.filter((order) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'urgent' && order.sla === 'breach') ||
      order.status === activeFilter;

    const matchesSearch =
      !searchQuery ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.city.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const urgentCount = mockOrders.filter((o) => o.sla === 'breach').length;

  return (
    <div className="max-w-[1400px]">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Orders <span className="italic" style={{ color: 'var(--accent)' }}>Management</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            June 2025 · {mockOrders.length} total orders · {urgentCount} require urgent action
          </p>
        </div>
        <div className="flex gap-2.5">
          <Button variant="outline" size="sm" className="text-xs">
            <Download size={14} className="mr-1.5" />
            Export CSV
          </Button>
          <Button size="sm" className="text-xs" style={{ background: 'var(--accent)', color: '#1a1208' }}>
            <Printer size={14} className="mr-1.5" />
            Bulk Print Labels
          </Button>
        </div>
      </div>

      {/* Urgency Bar */}
      {urgentCount > 0 && (
        <div
          className="rounded-[10px] p-3 md:p-4 mb-3.5 flex flex-col md:flex-row items-start md:items-center gap-3.5 animate-fade-up"
          style={{ background: 'rgba(201, 96, 96, 0.07)', border: '1px solid rgba(201, 96, 96, 0.15)' }}
        >
          <div className="text-lg">🚨</div>
          <div className="flex-1 text-xs" style={{ color: 'var(--red)' }}>
            <strong className="font-medium">{urgentCount} orders will breach SLA</strong> — dispatch required within the next window to avoid penalties
          </div>
          <div className="font-serif text-[22px] font-medium animate-pulse-slow" style={{ color: 'var(--red)' }}>
            {formatTimer(slaTimer)}
          </div>
          <Button size="sm" variant="destructive" className="text-xs">
            Print Urgent Labels
          </Button>
        </div>
      )}

      {/* Orders KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-4.5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {[
          { val: '847', lbl: 'Total this month', color: 'var(--text)' },
          { val: '3', lbl: 'SLA breach risk', color: 'var(--amber)' },
          { val: '440', lbl: 'Confirmed', color: 'var(--teal)' },
          { val: '237', lbl: 'In transit', color: 'var(--blue)' },
          { val: '102', lbl: 'Delivered', color: 'var(--green)' },
        ].map((kpi, i) => (
          <div key={i} className="rounded-[10px] p-3 transition-colors" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="font-serif text-[22px] font-medium leading-none" style={{ color: kpi.color }}>
              {kpi.val}
            </div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--muted)' }}>
              {kpi.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-2.5 mb-4.5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {/* Search */}
        <div className="flex-1 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted)' }} />
          <Input
            placeholder="Search order ID, customer name, product…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 text-xs h-9"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={cn('text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all whitespace-nowrap', activeFilter === tab.id ? '' : '')}
              style={{
                background: activeFilter === tab.id ? 'rgba(232, 196, 160, 0.08)' : 'var(--surface)',
                border: activeFilter === tab.id ? '1px solid rgba(232, 196, 160, 0.25)' : '1px solid var(--border)',
                color: activeFilter === tab.id ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-[13px] overflow-hidden animate-fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', animationDelay: '0.15s' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Order ID
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Customer
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Product
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Amount
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Status
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  SLA
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-white/[0.015]" style={{ borderColor: 'var(--border)' }}>
                  <td className="px-4 py-3 align-middle">
                    <div className="font-serif text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      #{order.id}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {order.date}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                      {order.customer}
                    </div>
                    <div className="text-[10.5px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {order.city}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-[11.5px]" style={{ color: 'var(--text)' }}>
                      {order.product}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {order.sku}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-[13px] font-medium font-serif" style={{ color: 'var(--text)' }}>
                      {order.amount}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {order.type}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <span
                      className="text-[10px] font-medium px-2 py-1 rounded-full inline-block"
                      style={{
                        background:
                          order.status === 'confirmed'
                            ? 'rgba(212, 168, 87, 0.11)'
                            : order.status === 'transit'
                            ? 'rgba(106, 159, 212, 0.11)'
                            : order.status === 'delivered'
                            ? 'rgba(122, 184, 122, 0.11)'
                            : order.status === 'cod'
                            ? 'rgba(155, 139, 212, 0.11)'
                            : 'rgba(201, 96, 96, 0.11)',
                        color:
                          order.status === 'confirmed'
                            ? 'var(--amber)'
                            : order.status === 'transit'
                            ? 'var(--blue)'
                            : order.status === 'delivered'
                            ? 'var(--green)'
                            : order.status === 'cod'
                            ? 'var(--purple)'
                            : 'var(--red)',
                      }}
                    >
                      {order.status === 'confirmed' ? 'Confirmed' : order.status === 'transit' ? 'In Transit' : order.status === 'delivered' ? 'Delivered' : order.status === 'cod' ? 'Pending COD' : 'Return'}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div
                      className={cn('text-[10.5px]', order.sla === 'breach' ? 'font-medium animate-pulse-slow' : '')}
                      style={{
                        color: order.sla === 'breach' ? 'var(--red)' : order.sla === 'warn' ? 'var(--amber)' : 'var(--green)',
                      }}
                    >
                      {order.sla === 'breach' ? '🔴 ' : order.sla === 'warn' ? '⚠ ' : '✓ '}
                      {order.slaText}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex gap-1.5">
                      {order.sla === 'breach' ? (
                        <Button size="sm" variant="destructive" className="text-[10px] h-7">
                          Print Label
                        </Button>
                      ) : order.status === 'transit' ? (
                        <Button size="sm" variant="outline" className="text-[10px] h-7">
                          Track
                        </Button>
                      ) : order.status === 'return' ? (
                        <Button size="sm" className="text-[10px] h-7" style={{ background: 'rgba(212, 168, 87, 0.12)', color: 'var(--amber)', border: '1px solid rgba(212, 168, 87, 0.2)' }}>
                          Dispute
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="text-[10px] h-7">
                          Details
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">📦</div>
            <div className="text-sm" style={{ color: 'var(--muted)' }}>
              No orders found matching your filters
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
