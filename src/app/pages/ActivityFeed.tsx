import { useState } from 'react';
import { activityFeed, mockNotifications } from '../data/mockData';
import { Button } from '../components/ui/button';
import { cn } from '../components/ui/utils';

const filterPills = [
  { id: 'all', label: 'All Activity' },
  { id: 'order', label: '📦 Orders' },
  { id: 'finance', label: '💳 Finance' },
  { id: 'review', label: '⭐ Reviews' },
  { id: 'return', label: '↩ Returns' },
  { id: 'ai', label: '✦ Akhtar AI' },
  { id: 'promo', label: '◁ Campaigns' },
  { id: 'system', label: '⚙ System' },
];

export default function ActivityFeed() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredFeed = activityFeed.map((group) => ({
    ...group,
    items: activeFilter === 'all' ? group.items : group.items.filter((item) => item.type === activeFilter),
  })).filter(group => group.items.length > 0);

  return (
    <div className="max-w-[1400px]">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Activity <span className="italic" style={{ color: 'var(--accent)' }}>Feed</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            All events across orders, finance, reviews, and Akhtar AI · Real-time
          </p>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          ✓ Mark all read
        </Button>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-1.5 mb-4 flex-wrap animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {filterPills.map((pill) => (
          <button
            key={pill.id}
            onClick={() => setActiveFilter(pill.id)}
            className={cn('text-[11px] font-medium px-3 py-1.5 rounded-full transition-all whitespace-nowrap')}
            style={{
              background: activeFilter === pill.id ? 'rgba(232, 196, 160, 0.06)' : 'var(--surface)',
              border: activeFilter === pill.id ? '1px solid rgba(232, 196, 160, 0.3)' : '1px solid var(--border)',
              color: activeFilter === pill.id ? 'var(--accent)' : 'var(--muted)',
            }}
          >
            {pill.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {/* Timeline */}
        <div>
          {filteredFeed.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-4.5">
              <div
                className="text-[10px] font-medium uppercase tracking-wide py-1.5 mb-1.5 border-b opacity-50"
                style={{ color: 'var(--muted)', borderColor: 'var(--border)', letterSpacing: '0.8px' }}
              >
                {group.date}
              </div>
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex gap-3.5 py-2.5 relative">
                  {itemIdx < group.items.length - 1 && (
                    <div className="absolute left-[15px] top-9 bottom-0 w-px" style={{ background: 'var(--border)' }} />
                  )}
                  <div
                    className="w-7.5 h-7.5 rounded-lg flex items-center justify-center text-[13px] flex-shrink-0 z-10"
                    style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--text)' }}>
                      {item.title.replace(/<em>/g, '').replace(/<\/em>/g, '')}
                      <span
                        className="text-[9.5px] font-medium px-2 py-0.5 rounded-full ml-1.5 align-middle"
                        style={{
                          background:
                            item.type === 'order'
                              ? 'rgba(107, 184, 168, 0.1)'
                              : item.type === 'return'
                              ? 'rgba(201, 96, 96, 0.1)'
                              : item.type === 'finance'
                              ? 'rgba(155, 139, 212, 0.1)'
                              : item.type === 'promo'
                              ? 'rgba(212, 168, 87, 0.1)'
                              : item.type === 'review'
                              ? 'rgba(122, 184, 122, 0.1)'
                              : item.type === 'ai'
                              ? 'rgba(232, 196, 160, 0.1)'
                              : 'rgba(255, 255, 255, 0.06)',
                          color:
                            item.type === 'order'
                              ? 'var(--teal)'
                              : item.type === 'return'
                              ? 'var(--red)'
                              : item.type === 'finance'
                              ? 'var(--purple)'
                              : item.type === 'promo'
                              ? 'var(--amber)'
                              : item.type === 'review'
                              ? 'var(--green)'
                              : item.type === 'ai'
                              ? 'var(--accent)'
                              : 'var(--muted)',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-[11px] mb-1" style={{ color: 'var(--muted)' }}>
                      {item.detail}
                    </div>
                    <div className="text-[10px] opacity-60" style={{ color: 'var(--muted)' }}>
                      {item.time}
                    </div>
                    {item.expandable && (
                      <div className="text-[10.5px] mt-1 cursor-pointer opacity-70 hover:opacity-100" style={{ color: 'var(--accent)' }}>
                        View affected orders →
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Notifications Panel */}
        <div className="space-y-3">
          <div>
            <div className="text-[9.5px] uppercase tracking-wide mb-2 opacity-60" style={{ color: 'var(--muted)', letterSpacing: '0.8px' }}>
              Unread Notifications
            </div>
            <div className="space-y-2">
              {mockNotifications.map((notif, i) => (
                <div
                  key={i}
                  className={cn('p-3.5 rounded-[11px] transition-colors', notif.unread ? 'border-l-2' : '')}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderLeftColor: notif.unread ? 'var(--accent)' : undefined,
                    borderRadius: notif.unread ? '0 11px 11px 0' : undefined,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm">{notif.icon}</span>
                    <span className="flex-1 text-xs font-medium" style={{ color: 'var(--text)' }}>
                      {notif.title}
                    </span>
                    <span className="text-[10px] flex-shrink-0" style={{ color: 'var(--muted)' }}>
                      {notif.time}
                    </span>
                  </div>
                  <div className="text-[11.5px] leading-snug mb-1.5" style={{ color: 'var(--muted)' }}>
                    {notif.body}
                  </div>
                  <div className="text-[11px] cursor-pointer inline-block" style={{ color: 'var(--accent)' }}>
                    {notif.action} →
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9.5px] uppercase tracking-wide mb-2 opacity-60 mt-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.8px' }}>
              Today's Summary
            </div>
            <div className="rounded-[11px] p-3.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {[
                { label: 'New orders', val: '34' },
                { label: 'Dispatched', val: '31' },
                { label: 'Delivered', val: '28' },
                { label: 'Revenue today', val: '₹14,820' },
                { label: 'New reviews', val: '4' },
                { label: 'Return requests', val: '2' },
              ].map((stat, i, arr) => (
                <div
                  key={i}
                  className={cn('flex justify-between items-baseline py-1.5', i < arr.length - 1 ? 'border-b' : '')}
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="text-[11.5px]" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </span>
                  <span className="font-serif text-[17px]" style={{ color: 'var(--text)' }}>
                    {stat.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
