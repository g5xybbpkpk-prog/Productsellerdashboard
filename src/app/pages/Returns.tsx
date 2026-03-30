import { mockReturns } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Upload, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Returns() {
  const handleUploadVideo = (returnId: string) => {
    toast.success('Video uploaded successfully!');
  };

  return (
    <div className="max-w-[1400px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Returns & <span className="italic" style={{ color: 'var(--accent)' }}>RTO</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Manage return requests and disputes
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 mb-4.5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {[
          { label: 'Pending Review', val: '2', color: 'var(--amber)' },
          { label: 'In Dispute', val: '1', color: 'var(--red)' },
          { label: 'Approved', val: '8', color: 'var(--green)' },
          { label: 'RTO Rate', val: '8%', color: 'var(--amber)' },
        ].map((stat, i) => (
          <div key={i} className="rounded-[10px] p-3" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="font-serif text-[22px] font-medium leading-none" style={{ color: stat.color }}>
              {stat.val}
            </div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--muted)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Returns Table */}
      <div className="rounded-[13px] overflow-hidden animate-fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', animationDelay: '0.1s' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Return ID
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Customer
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Product
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Reason
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Status
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockReturns.map((ret) => (
                <tr key={ret.id} className="border-b hover:bg-white/[0.015]" style={{ borderColor: 'var(--border)' }}>
                  <td className="px-4 py-3 align-middle">
                    <div className="font-serif text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      #{ret.id}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      Order #{ret.orderId}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                      {ret.customer}
                    </div>
                    <div className="text-[10.5px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {ret.city}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-[11.5px]" style={{ color: 'var(--text)' }}>
                      {ret.product}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--muted)' }}>
                      {ret.sku}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-xs" style={{ color: 'var(--text)' }}>
                      {ret.reason}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <span
                      className="text-[10px] font-medium px-2 py-1 rounded-full inline-flex items-center gap-1"
                      style={{
                        background:
                          ret.status === 'dispute'
                            ? 'rgba(201, 96, 96, 0.11)'
                            : ret.status === 'pending'
                            ? 'rgba(212, 168, 87, 0.11)'
                            : ret.status === 'approved'
                            ? 'rgba(122, 184, 122, 0.11)'
                            : 'rgba(155, 139, 212, 0.11)',
                        color:
                          ret.status === 'dispute'
                            ? 'var(--red)'
                            : ret.status === 'pending'
                            ? 'var(--amber)'
                            : ret.status === 'approved'
                            ? 'var(--green)'
                            : 'var(--purple)',
                      }}
                    >
                      {ret.status === 'dispute' && <AlertCircle size={10} />}
                      {ret.status === 'approved' && <CheckCircle size={10} />}
                      {ret.status === 'rejected' && <XCircle size={10} />}
                      {ret.status === 'dispute' ? 'Dispute' : ret.status === 'pending' ? 'Pending' : ret.status === 'approved' ? 'Approved' : 'Rejected'}
                    </span>
                    {ret.daysLeft !== null && (
                      <div className="text-[10px] mt-1" style={{ color: 'var(--muted)' }}>
                        {ret.daysLeft === 0 ? 'Due today' : `${ret.daysLeft}d left`}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="flex flex-col gap-1.5">
                      {ret.requiresVideo && ret.status === 'dispute' ? (
                        <Button size="sm" className="text-[10px] h-7" style={{ background: 'rgba(201, 96, 96, 0.12)', color: 'var(--red)', border: '1px solid rgba(201, 96, 96, 0.25)' }} onClick={() => handleUploadVideo(ret.id)}>
                          <Upload size={12} className="mr-1" />
                          Upload Video
                        </Button>
                      ) : ret.status === 'pending' ? (
                        <>
                          <Button size="sm" className="text-[10px] h-7" style={{ background: 'rgba(122, 184, 122, 0.12)', color: 'var(--green)', border: '1px solid rgba(122, 184, 122, 0.2)' }}>
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="text-[10px] h-7">
                            Reject
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" variant="outline" className="text-[10px] h-7">
                          View Details
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
