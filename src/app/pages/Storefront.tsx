import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Upload, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function Storefront() {
  const handleSave = () => {
    toast.success('Changes saved successfully!');
  };

  return (
    <div className="max-w-[1200px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Brand <span className="italic" style={{ color: 'var(--accent)' }}>Profile</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Manage your public storefront on Relaxed & Refresh
          </p>
        </div>
        <div className="flex gap-2.5">
          <Button variant="outline" size="sm" className="text-xs">
            Preview Storefront
          </Button>
          <Button size="sm" className="text-xs" style={{ background: 'var(--accent)', color: '#1a1208' }} onClick={handleSave}>
            <Save size={14} className="mr-1.5" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {/* Preview */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Storefront Preview
          </div>
          <div className="rounded-[10px] overflow-hidden mb-3.5" style={{ border: '1px solid var(--border)' }}>
            <div
              className="h-[70px] flex items-center justify-center relative"
              style={{ background: 'linear-gradient(135deg, rgba(107, 184, 168, 0.2), rgba(155, 139, 212, 0.15))' }}
            >
              <div className="font-serif text-[13px] opacity-50" style={{ color: 'var(--accent)', letterSpacing: '1px' }}>
                Hero Banner — 1440×400px
              </div>
              <button
                className="absolute top-1.5 right-2 text-[10px] px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(0, 0, 0, 0.4)', color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                ✎ Edit
              </button>
            </div>
            <div className="flex items-center gap-3 p-3" style={{ background: 'var(--surface2)' }}>
              <div
                className="w-[38px] h-[38px] rounded-lg flex items-center justify-center text-base"
                style={{ background: 'rgba(232, 196, 160, 0.12)', border: '1px solid rgba(232, 196, 160, 0.18)', color: 'var(--accent)' }}
              >
                ✦
              </div>
              <div>
                <div className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>
                  Lumière Botanics
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>
                  Clean skincare · India
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {['✓ Cruelty-free', '✓ Vegan', '✓ Dermatologist tested', '✓ PETA certified'].map((cert, i) => (
              <span
                key={i}
                className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(122, 184, 122, 0.1)', color: 'var(--green)', border: '1px solid rgba(122, 184, 122, 0.15)' }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Brand Details Form */}
        <div className="rounded-[13px] p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="text-[10.5px] font-medium uppercase tracking-wider mb-3.5" style={{ color: 'var(--muted)', letterSpacing: '0.6px' }}>
            Brand Details
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider block mb-1.5" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
                Brand Name
              </label>
              <Input
                defaultValue="Lumière Botanics"
                className="text-xs"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider block mb-1.5" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
                Tagline
              </label>
              <Input
                defaultValue="Clean beauty, honest ingredients."
                className="text-xs"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider block mb-1.5" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
                About Us
              </label>
              <Textarea
                defaultValue="Lumière Botanics was founded in 2019 with a simple belief — skincare should be transparent, effective, and kind."
                className="text-xs min-h-[70px] resize-none"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider block mb-1.5" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
                Website
              </label>
              <Input
                defaultValue="https://lumierebotanics.in"
                className="text-xs"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider block mb-1.5" style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
                Hero Banner
              </label>
              <button
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed transition-colors text-xs"
                style={{ background: 'var(--surface2)', borderColor: 'var(--border)', color: 'var(--muted)' }}
              >
                <Upload size={14} />
                Upload Image (1440×400px)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
