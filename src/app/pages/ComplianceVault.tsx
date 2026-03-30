import { useState } from 'react';
import { Upload, FileText, CheckCircle2, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ComplianceVault() {
  const [showModal, setShowModal] = useState(false);

  const documents = [
    {
      id: 1,
      name: 'Drug License (Cosmetics)',
      detail: 'Uploaded Jun 10, 2025 · Valid',
      status: 'Active',
      statusType: 'good',
    },
    {
      id: 2,
      name: 'GST Certificate',
      detail: 'GSTIN: 27AAACL1234F1Z5 · Verified',
      status: 'Active',
      statusType: 'good',
    },
    {
      id: 3,
      name: 'Trademark / Brand Proof',
      detail: 'TM Reg. No. 4821390 · Class 3',
      status: 'Active',
      statusType: 'good',
    },
    {
      id: 4,
      name: 'Dermatologist Tested Certificate',
      detail: 'Expires Aug 2025 — renew soon',
      status: 'Expiring',
      statusType: 'expiring',
      warning: true,
    },
  ];

  const skuApprovals = [
    { name: 'Retinol Night Repair (new batch)', status: 'Pending Admin Review', statusType: 'pending', action: 'Edit Draft' },
    { name: 'Ceramide Barrier Cream', status: 'Ingredients Check', statusType: 'pending', action: 'View' },
    { name: 'Bakuchiol Retinol Alt. Serum', status: 'Approved', statusType: 'good', action: 'Live' },
  ];

  const products = [
    { name: 'Niacinamide 10% Serum', tags: ['Niacinamide', 'Vitamin B3', 'Pore Control'], tagColor: 'teal' },
    { name: 'Vitamin C Brightening SPF', tags: ['Vitamin C', 'SPF', 'Antioxidant'], tagColor: 'amber' },
    { name: 'Hyaluronic Acid Toner', tags: ['HA', 'Hydrating'], tagColor: 'blue' },
  ];

  const handleUpload = () => {
    setShowModal(false);
    toast.success('Document uploaded successfully');
  };

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight">
            Compliance <span className="text-[var(--accent)] italic">Vault</span>
          </h1>
          <p className="text-xs text-[var(--muted)] mt-1">
            Manage regulatory documents, SKU approvals and certifications
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 text-xs font-medium bg-[var(--accent)] text-[#1a1208] rounded-lg hover:bg-[var(--accent2)] transition-all"
        >
          + Upload Document
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Regulatory Documents */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            Regulatory Documents
          </h3>
          <div className="space-y-2.5">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  doc.warning
                    ? 'bg-[rgba(212,168,87,0.06)] border-[rgba(212,168,87,0.18)]'
                    : 'bg-[var(--surface2)] border-[var(--border)]'
                }`}
              >
                <div className="flex-1">
                  <div className="text-xs font-medium text-[var(--text)]">{doc.name}</div>
                  <div className={`text-[10.5px] mt-0.5 ${doc.warning ? 'text-[var(--amber)]' : 'text-[var(--muted)]'}`}>
                    {doc.detail}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full ${
                      doc.statusType === 'good'
                        ? 'bg-[rgba(122,184,122,0.11)] text-[var(--green)]'
                        : 'bg-[rgba(212,168,87,0.11)] text-[var(--amber)]'
                    }`}
                  >
                    {doc.status}
                  </span>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`text-[10px] px-2 py-1 rounded ${
                      doc.warning
                        ? 'bg-[rgba(212,168,87,0.12)] text-[var(--amber)] border border-[rgba(212,168,87,0.2)]'
                        : 'bg-transparent text-[var(--muted)] border border-[var(--border)] hover:border-[var(--border-h)] hover:text-[var(--text)]'
                    }`}
                  >
                    {doc.warning ? 'Renew' : 'Update'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SKU Approval Workflow */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
            SKU Approval Workflow
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    SKU Name
                  </th>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Status
                  </th>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {skuApprovals.map((sku, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 border-b border-[var(--border)] text-xs text-[var(--text)] font-medium">
                      {sku.name}
                    </td>
                    <td className="py-2.5 border-b border-[var(--border)]">
                      <span
                        className={`inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full ${
                          sku.statusType === 'good'
                            ? 'bg-[rgba(122,184,122,0.11)] text-[var(--green)]'
                            : 'bg-[rgba(155,139,212,0.11)] text-[var(--purple)]'
                        }`}
                      >
                        {sku.status}
                      </span>
                    </td>
                    <td className="py-2.5 border-b border-[var(--border)]">
                      <button className="text-[10px] px-2 py-1 rounded bg-transparent text-[var(--muted)] border border-[var(--border)] hover:border-[var(--border-h)] hover:text-[var(--text)] transition-all">
                        {sku.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3.5 p-3 bg-[rgba(232,196,160,0.05)] border border-[rgba(232,196,160,0.12)] rounded-lg text-[11px] text-[var(--muted)]">
            ✦ Akhtar AI will only recommend SKUs with full ingredient tags and active approval status.
          </div>
        </div>
      </div>

      {/* Ingredient Tagging */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide">
            Ingredient Tagging — Akhtar AI Optimisation
          </h3>
          <button className="text-[11px] text-[var(--accent)] opacity-80 hover:opacity-100">
            View AI Insights →
          </button>
        </div>
        <div className="space-y-2.5">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-[var(--surface2)] border border-[var(--border)] rounded-lg"
            >
              <div className="flex-1">
                <div className="text-xs font-medium text-[var(--text)]">{product.name}</div>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${
                      product.tagColor === 'teal'
                        ? 'bg-[rgba(107,184,168,0.1)] text-[var(--teal)] border-[rgba(107,184,168,0.15)]'
                        : product.tagColor === 'amber'
                        ? 'bg-[rgba(212,168,87,0.1)] text-[var(--amber)] border-[rgba(212,168,87,0.15)]'
                        : 'bg-[rgba(106,159,212,0.1)] text-[var(--blue)] border-[rgba(106,159,212,0.15)]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setShowModal(true);
                  toast.info('Tag editor would open here');
                }}
                className="text-[10px] px-2 py-1 rounded bg-transparent text-[var(--muted)] border border-[var(--border)] hover:border-[var(--border-h)] hover:text-[var(--text)] transition-all"
              >
                Edit Tags
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-up"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[var(--surface)] border border-[var(--border-h)] rounded-2xl p-7 min-w-[340px] max-w-[460px] w-11/12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3.5 right-4 text-[var(--muted)] hover:text-[var(--text)] text-xl leading-none"
            >
              ×
            </button>
            <h2 className="font-serif text-xl font-medium text-[var(--accent)] mb-4">Upload Document</h2>
            <div
              className="border border-dashed border-[var(--border-h)] rounded-lg p-5 text-center text-xs text-[var(--muted)] mb-3.5 cursor-pointer hover:border-[var(--accent)] hover:text-[var(--text)] transition-colors bg-[var(--surface2)]"
              onClick={handleUpload}
            >
              📁 Click to upload
              <br />
              <span className="text-[10px] opacity-60 block mt-1">PDF/JPEG · Max 5MB · Regulatory documents</span>
            </div>
            <button
              onClick={handleUpload}
              className="w-full px-4 py-2 text-xs font-medium bg-[var(--accent)] text-[#1a1208] rounded-lg hover:bg-[var(--accent2)] transition-all"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
