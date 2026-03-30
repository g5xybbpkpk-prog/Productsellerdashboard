import { Button } from '../components/ui/button';
import { UserPlus, Mail, Shield } from 'lucide-react';

export default function TeamAccess() {
  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Team <span className="italic" style={{ color: 'var(--accent)' }}>Access</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Manage team members and their permissions
          </p>
        </div>
        <Button size="sm" className="text-xs" style={{ background: 'var(--accent)', color: '#1a1208' }}>
          <UserPlus size={14} className="mr-1.5" />
          Invite Team Member
        </Button>
      </div>

      <div className="space-y-2.5">
        {[
          { name: 'Priya Sharma', email: 'priya@lumierebotanics.in', role: 'Admin', status: 'Active' },
          { name: 'Rohan Kapoor', email: 'rohan@lumierebotanics.in', role: 'Manager', status: 'Active' },
          { name: 'Ananya Singh', email: 'ananya@lumierebotanics.in', role: 'Viewer', status: 'Pending' },
        ].map((member, i) => (
          <div
            key={i}
            className="rounded-[13px] p-4 flex items-center gap-4"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                color: 'var(--accent)',
              }}
            >
              {member.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                {member.name}
              </div>
              <div className="text-xs flex items-center gap-1.5 mt-0.5" style={{ color: 'var(--muted)' }}>
                <Mail size={10} />
                {member.email}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className="text-[10px] font-medium px-2 py-1 rounded-full inline-flex items-center gap-1"
                style={{
                  background: member.role === 'Admin' ? 'rgba(232, 196, 160, 0.1)' : member.role === 'Manager' ? 'rgba(107, 184, 168, 0.1)' : 'rgba(155, 139, 212, 0.1)',
                  color: member.role === 'Admin' ? 'var(--accent)' : member.role === 'Manager' ? 'var(--teal)' : 'var(--purple)',
                }}
              >
                <Shield size={10} />
                {member.role}
              </span>
              <span
                className="text-[10px] font-medium px-2 py-1 rounded-full"
                style={{
                  background: member.status === 'Active' ? 'rgba(122, 184, 122, 0.11)' : 'rgba(212, 168, 87, 0.11)',
                  color: member.status === 'Active' ? 'var(--green)' : 'var(--amber)',
                }}
              >
                {member.status}
              </span>
            </div>
            <Button size="sm" variant="outline" className="text-xs">
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
