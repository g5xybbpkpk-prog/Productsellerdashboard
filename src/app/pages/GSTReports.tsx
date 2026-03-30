import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';

export default function GSTReports() {
  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            GST <span className="italic" style={{ color: 'var(--accent)' }}>Reports</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Download GST reports and manage tax compliance
          </p>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          <Download size={14} className="mr-1.5" />
          Download GSTR-8
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {['June 2025', 'May 2025', 'April 2025', 'March 2025'].map((month, i) => (
          <div key={i} className="rounded-[13px] p-5 flex items-center justify-between" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div>
              <div className="text-sm font-medium mb-1" style={{ color: 'var(--text)' }}>
                {month}
              </div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>
                GSTR-1 & GSTR-3B
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-xs">
              <Download size={12} className="mr-1" />
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
