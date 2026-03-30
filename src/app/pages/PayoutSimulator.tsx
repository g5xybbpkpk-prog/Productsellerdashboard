import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const shippingZones = { local: 25, zonal: 35, national: 45 };

export default function PayoutSimulator() {
  const [price, setPrice] = useState(1000);
  const [weight, setWeight] = useState(500);
  const [zone, setZone] = useState<'local' | 'zonal' | 'national'>('national');
  const [orderType, setOrderType] = useState('prepaid');
  const [rtoPenalty, setRtoPenalty] = useState(false);
  const [returnPenalty, setReturnPenalty] = useState(false);
  const [campaignAd, setCampaignAd] = useState(0);
  const [aiBoost, setAiBoost] = useState(0);

  const [calculations, setCalculations] = useState({
    logistics: 45,
    reserve: 20,
    tcs: 10,
    tds: 10,
    net: 915,
    margin: 91.5,
  });

  useEffect(() => {
    const baseFee = shippingZones[zone];
    const extra = Math.max(0, Math.ceil((weight - 500) / 250)) * 10;
    const logistics = baseFee + extra;
    const reserve = Math.min(price * 0.02, 100);
    const tcs = price * 0.01;
    const tds = price * 0.01;
    let net = price - logistics - reserve - tcs - tds;

    if (rtoPenalty) net -= 70;
    if (returnPenalty) net -= 50;

    const margin = price > 0 ? (net / price) * 100 : 0;

    setCalculations({ logistics, reserve, tcs, tds, net, margin });
  }, [price, weight, zone, rtoPenalty, returnPenalty]);

  const handleReset = () => {
    setPrice(1000);
    setWeight(500);
    setZone('national');
    setOrderType('prepaid');
    setRtoPenalty(false);
    setReturnPenalty(false);
    setCampaignAd(0);
    setAiBoost(0);
  };

  const incrementalRevenue = campaignAd * 5 + aiBoost * 8;

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight">
            Payout <span className="text-[var(--accent)] italic">Simulator</span>
          </h1>
          <p className="text-xs text-[var(--muted)] mt-1">
            Estimate your net payout per order including optional charges and marketing investments
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-transparent text-[var(--muted)] border border-[var(--border)] rounded-lg hover:border-[var(--border-h)] hover:text-[var(--text)] transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Left Column - Order Details */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Order Details
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Product Price (₹)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                step={50}
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] font-medium focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Weight (grams)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                step={50}
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Shipping Zone
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value as 'local' | 'zonal' | 'national')}
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237a7875' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                }}
              >
                <option value="local">Local (within city)</option>
                <option value="zonal">Zonal (within state)</option>
                <option value="national">National (inter-state)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Order Type
              </label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237a7875' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                }}
              >
                <option value="prepaid">Prepaid</option>
                <option value="cod">COD</option>
              </select>
            </div>

            <div className="pt-3 mt-3 border-t border-[var(--border)]">
              <div className="text-[9.5px] font-medium uppercase tracking-wide text-[var(--accent)] opacity-80 mb-3">
                Optional Charges & Marketing
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text)]">RTO Penalty (forward + reverse)</span>
                  <label className="flex items-center gap-2 text-[11px] text-[var(--muted)] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rtoPenalty}
                      onChange={(e) => setRtoPenalty(e.target.checked)}
                      className="accent-[var(--teal)]"
                    />
                    Apply ₹70 fee
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text)]">Return Penalty (vendor error)</span>
                  <label className="flex items-center gap-2 text-[11px] text-[var(--muted)] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={returnPenalty}
                      onChange={(e) => setReturnPenalty(e.target.checked)}
                      className="accent-[var(--teal)]"
                    />
                    Apply ₹50 fee
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Campaign Ad Spend (₹)
              </label>
              <input
                type="number"
                value={campaignAd}
                onChange={(e) => setCampaignAd(Number(e.target.value))}
                step={100}
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
              <p className="text-[10px] text-[var(--muted)] mt-1">
                Deducted from Ad Wallet. Estimated 5× ROI on incremental sales.
              </p>
            </div>

            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">
                Akhtar AI Boost (₹)
              </label>
              <input
                type="number"
                value={aiBoost}
                onChange={(e) => setAiBoost(Number(e.target.value))}
                step={100}
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
              <p className="text-[10px] text-[var(--muted)] mt-1">
                AI-matched recommendations. Estimated 8× ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Payout Estimate */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Net Payout Estimate
          </h3>

          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-base text-[var(--muted)]">₹</span>
            <div className="font-serif text-[38px] font-medium leading-none text-[var(--text)]">
              {Math.round(calculations.net)}
            </div>
            <span className="text-[11px] text-[var(--muted)] ml-1">
              {calculations.margin.toFixed(1)}% margin
            </span>
          </div>

          <div className="space-y-1.5 text-[11.5px]">
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Gross Sales</span>
              <span className="font-medium text-[var(--text)]">₹{price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Forward Logistics</span>
              <span className="font-medium text-[var(--red)]">−₹{Math.round(calculations.logistics)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-[var(--muted)] border-b border-dotted border-[var(--muted)] cursor-help"
                title="2% held for 14 days, refundable if no RTO"
              >
                Shipping Reserve (refundable)
              </span>
              <span className="font-medium text-[var(--amber)]">−₹{Math.round(calculations.reserve)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-[var(--muted)] border-b border-dotted border-[var(--muted)] cursor-help"
                title="Tax Collected at Source (1%)"
              >
                TCS (1%)
              </span>
              <span className="font-medium text-[var(--red)]">−₹{Math.round(calculations.tcs)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-[var(--muted)] border-b border-dotted border-[var(--muted)] cursor-help"
                title="TDS under Section 194-O (adjustable)"
              >
                TDS (1%)
              </span>
              <span className="font-medium text-[var(--red)]">−₹{Math.round(calculations.tds)}</span>
            </div>

            {rtoPenalty && (
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted)]">RTO Penalty (fwd + rev)</span>
                <span className="font-medium text-[var(--red)]">−₹70</span>
              </div>
            )}

            {returnPenalty && (
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted)]">Return Penalty (vendor error)</span>
                <span className="font-medium text-[var(--red)]">−₹50</span>
              </div>
            )}

            <hr className="border-t border-[var(--border)] my-2" />

            <div className="flex items-center justify-between">
              <span className="font-medium text-[var(--text)]">Net Payout</span>
              <span className="font-medium text-[var(--teal)]">₹{Math.round(calculations.net)}</span>
            </div>
          </div>

          <div className="mt-4 bg-[var(--surface2)] rounded-lg p-3.5">
            <div className="text-[11px] font-medium text-[var(--accent)] mb-2">
              Marketing Investment & Impact
            </div>
            <div className="space-y-1.5 text-[11.5px]">
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted)]">Campaign Ad Spend</span>
                <span className="font-medium text-[var(--text)]">₹{campaignAd}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted)]">Akhtar AI Boost Spend</span>
                <span className="font-medium text-[var(--text)]">₹{aiBoost}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5 mt-1.5 border-t border-[var(--border)]">
                <span className="text-[var(--muted)]">Est. incremental revenue</span>
                <span className="font-medium text-[var(--green)]">₹{incrementalRevenue}</span>
              </div>
            </div>
            <p className="text-[10px] text-[var(--muted)] mt-2 leading-relaxed">
              Marketing costs are prepaid from your Ad Wallet and <strong>do not reduce the payout above</strong>.
              Higher ROI from AI Boost due to personalised recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
        <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-3">
          How to maximise your net payout
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-[var(--surface2)] rounded-lg p-3">
            <div className="text-lg mb-1">📦</div>
            <div className="text-xs font-medium text-[var(--text)] mb-1">Reduce RTO</div>
            <div className="text-[10px] text-[var(--muted)] leading-relaxed">
              COD orders have higher RTO risk. Use OTP verification to cut RTO rates and avoid the ₹70
              forward+reverse penalty.
            </div>
          </div>
          <div className="bg-[var(--surface2)] rounded-lg p-3">
            <div className="text-lg mb-1">⚖️</div>
            <div className="text-xs font-medium text-[var(--text)] mb-1">Accurate weights</div>
            <div className="text-[10px] text-[var(--muted)] leading-relaxed">
              Avoid weight discrepancy fees by keeping SKU profiles updated. Discrepancies are deducted from your
              shipping reserve.
            </div>
          </div>
          <div className="bg-[var(--surface2)] rounded-lg p-3">
            <div className="text-lg mb-1">🎯</div>
            <div className="text-xs font-medium text-[var(--text)] mb-1">Use Ad Wallet</div>
            <div className="text-[10px] text-[var(--muted)] leading-relaxed">
              Reinvest saved commission into Campaign Ads (5× ROI) or Akhtar AI Boosts (8× ROI) — no deduction from
              payout.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
