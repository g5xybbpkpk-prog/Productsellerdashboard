import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Finance() {
  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Finance & <span className="italic" style={{ color: 'var(--accent)' }}>Payouts</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Settlement history · GST reports · Shipping reserve tracker
          </p>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          <Download size={14} className="mr-1.5" />
          Download GSTR-8
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {/* Next Payout */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Next Payout
          </div>
          <div className="flex items-baseline gap-1.5 mb-3.5">
            <span className="text-[15px]" style={{ color: 'var(--muted)' }}>₹</span>
            <div className="font-serif text-[38px] font-medium leading-none" style={{ color: 'var(--text)' }}>98,346</div>
          </div>
          <div className="space-y-1.5 mb-3">
            {[
              { label: 'Gross sales', val: '₹1,04,800', isPos: false },
              { label: 'Logistics fees', val: '−₹1,840', isNeg: true },
              { label: 'Return penalties & RTO', val: '−₹950', isNeg: true },
              { label: 'Weight discrepancy', val: '−₹520', isNeg: true },
              { label: 'Shipping reserve (refundable)', val: '−₹2,096', isHold: true },
              { label: 'TDS (1%)', val: '−₹1,048', isNeg: true },
            ].map((row, i) => (
              <div key={i} className="flex justify-between text-[11.5px]">
                <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                <span
                  style={{
                    color: row.isNeg ? 'var(--red)' : row.isHold ? 'var(--amber)' : 'var(--text)',
                    fontWeight: 500,
                  }}
                >
                  {row.val}
                </span>
              </div>
            ))}
          </div>
          <div className="h-px my-2" style={{ background: 'var(--border)' }} />
          <div className="flex justify-between text-[11.5px] mb-3">
            <span style={{ color: 'var(--text)', fontWeight: 500 }}>Net payout</span>
            <span style={{ color: 'var(--teal)', fontWeight: 500 }}>₹98,346</span>
          </div>
          <div className="p-2.5 rounded-lg text-[11px] mb-2" style={{ background: 'var(--surface2)' }}>
            <span style={{ color: 'var(--muted)' }}>Escrow:</span> <strong style={{ color: 'var(--teal)' }}>July 9</strong> · Reserve:{' '}
            <strong style={{ color: 'var(--teal)' }}>July 16</strong>
          </div>
          <div className="text-[10px] leading-snug p-2 rounded" style={{ background: 'rgba(255, 255, 255, 0.03)', color: 'var(--muted)' }}>
            Ad spend of <strong>₹8,450</strong> deducted directly from prepaid Ad Wallet.
          </div>
        </div>

        {/* Settlement History */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Settlement History
          </div>
          <div className="space-y-2">
            {[
              { period: 'Jun 1–7', gross: '₹38,200', net: '₹35,900', status: 'Paid' },
              { period: 'Jun 8–14', gross: '₹41,600', net: '₹39,100', status: 'Paid' },
              { period: 'Jun 15–21', gross: '₹45,100', net: '₹42,400', status: 'Paid' },
              { period: 'Jun 22–28', gross: '₹44,900', net: '₹42,200', status: 'Processing' },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-lg"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
              >
                <div className="flex-1">
                  <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                    {row.period}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                    Gross: {row.gross}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium" style={{ color: 'var(--green)' }}>
                    {row.net}
                  </div>
                  <div className="text-[9.5px] mt-0.5 font-medium px-1.5 py-0.5 rounded-full inline-block" style={{ background: row.status === 'Paid' ? 'rgba(122, 184, 122, 0.11)' : 'rgba(212, 168, 87, 0.11)', color: row.status === 'Paid' ? 'var(--green)' : 'var(--amber)' }}>
                    {row.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shipping Reserve */}
      <div className="rounded-[13px] p-5 mt-3.5 animate-fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', animationDelay: '0.1s' }}>
        <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
          Shipping Reserve Tracker
        </div>
        <div className="space-y-2">
          {[
            { period: 'Jun 15–21 reserve', amount: '₹902', status: 'Releases July 16 · No discrepancy received', color: 'var(--green)', hasIssue: false },
            { period: 'Jun 22–28 reserve', amount: '₹2,096', status: 'Releases July 22 · Holding period active', color: 'var(--amber)', hasIssue: false },
            { period: 'May 28 — weight discrepancy', amount: '−₹520', status: 'Shiprocket charge · Deducted from reserve', color: 'var(--red)', hasIssue: true },
          ].map((row, i) => (
            <div
              key={i}
              className="p-3 rounded-lg"
              style={{
                background: row.hasIssue ? 'rgba(201, 96, 96, 0.06)' : 'var(--surface2)',
                border: row.hasIssue ? '1px solid rgba(201, 96, 96, 0.14)' : '1px solid var(--border)',
              }}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-[11.5px] font-medium" style={{ color: 'var(--text)' }}>
                  {row.period}
                </span>
                <span className="text-[11.5px] font-medium" style={{ color: row.color }}>
                  {row.amount}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px]" style={{ color: 'var(--muted)' }}>
                <span>{row.status}</span>
                {row.hasIssue && (
                  <Button size="sm" variant="outline" className="text-[9px] h-6 px-2">
                    Dispute
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
