import { Upload } from 'lucide-react';
import { toast } from 'sonner';

export default function BankKYC() {
  const documents = [
    { name: 'PAN Card', detail: 'AAACL1234F · Verified', status: 'Verified' },
    { name: 'Certificate of Incorporation', detail: 'Uploaded Mar 2024', status: 'Verified' },
    { name: 'Cancelled Cheque', detail: 'HDFC Bank account ending 4421', status: 'Verified' },
  ];

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight">
            Bank <span className="text-[var(--accent)] italic">& KYC</span>
          </h1>
          <p className="text-xs text-[var(--muted)] mt-1">Manage payout bank account and KYC documentation</p>
        </div>
        <button
          onClick={() => toast.success('Changes saved')}
          className="px-4 py-2 text-xs font-medium bg-[var(--accent)] text-[#1a1208] rounded-lg hover:bg-[var(--accent2)] transition-all"
        >
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bank Account Details */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Bank Account Details
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">Account Holder Name</label>
              <input
                type="text"
                defaultValue="Lumière Botanics Pvt. Ltd."
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">Bank Name</label>
              <input
                type="text"
                defaultValue="HDFC Bank"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">Account Number</label>
              <input
                type="password"
                defaultValue="XXXXXXXXXXXX4421"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">IFSC Code</label>
              <input
                type="text"
                defaultValue="HDFC0001234"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] text-[var(--muted)] uppercase mb-1.5">GSTIN</label>
              <input
                type="text"
                defaultValue="27AAACL1234F1Z5"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* KYC Documents */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">KYC Documents</h3>
          <div className="space-y-2.5">
            {documents.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between p-3 bg-[var(--surface2)] border border-[var(--border)] rounded-lg"
              >
                <div className="flex-1">
                  <div className="text-xs font-medium text-[var(--text)]">{doc.name}</div>
                  <div className="text-[10.5px] text-[var(--muted)] mt-0.5">{doc.detail}</div>
                </div>
                <span className="inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full bg-[rgba(122,184,122,0.11)] text-[var(--green)]">
                  {doc.status}
                </span>
              </div>
            ))}
            <button
              onClick={() => toast.info('Upload modal would open here')}
              className="w-full mt-1 flex items-center justify-center gap-2 p-2.5 border border-dashed border-[var(--border)] rounded-lg bg-[var(--surface2)] text-[var(--muted)] text-[11.5px] cursor-pointer hover:border-[var(--border-h)] hover:text-[var(--text)] transition-all"
            >
              <Upload className="w-3.5 h-3.5" />+ Upload New KYC Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
