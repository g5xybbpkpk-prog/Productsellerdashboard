import { useState } from 'react';
import { mockReviews } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Star, Send } from 'lucide-react';
import { cn } from '../components/ui/utils';
import { toast } from 'sonner';

export default function Reviews() {
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (reviewId: number) => {
    toast.success('Reply sent successfully!');
    setReplyingTo(null);
    setReplyText('');
  };

  return (
    <div className="max-w-[1200px]">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Customer <span className="italic" style={{ color: 'var(--accent)' }}>Reviews</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Manage feedback and respond to customer reviews
          </p>
        </div>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 mb-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        <div className="text-center">
          <div className="font-serif text-5xl font-medium leading-none mb-2" style={{ color: 'var(--text)' }}>
            4.7
          </div>
          <div className="flex justify-center gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < 5 ? 'var(--amber)' : 'none'} stroke={i < 5 ? 'var(--amber)' : 'var(--faint)'} />
            ))}
          </div>
          <div className="text-xs" style={{ color: 'var(--muted)' }}>
            Based on 247 reviews
          </div>
        </div>

        <div className="space-y-1.5">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = stars === 5 ? 180 : stars === 4 ? 42 : stars === 3 ? 15 : stars === 2 ? 7 : 3;
            const pct = Math.round((count / 247) * 100);
            return (
              <div key={stars} className="flex items-center gap-2">
                <div className="text-[11px] w-2 text-right" style={{ color: 'var(--muted)' }}>
                  {stars}
                </div>
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'var(--amber)' }} />
                </div>
                <div className="text-[11px] w-6.5" style={{ color: 'var(--muted)' }}>
                  {count}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-2.5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="rounded-[10px] p-4 transition-colors"
            style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-start gap-2.5 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill={i < review.rating ? 'var(--amber)' : 'none'} stroke={i < review.rating ? 'var(--amber)' : 'var(--faint)'} />
                ))}
              </div>
              <div className="flex-1 text-[10.5px]" style={{ color: 'var(--muted)' }}>
                {review.product}
              </div>
              <div className="text-[10px]" style={{ color: 'var(--muted)' }}>
                {review.date}
              </div>
            </div>

            <div className="text-xs leading-relaxed mb-2" style={{ color: 'var(--text)' }}>
              {review.text}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[10.5px]" style={{ color: 'var(--muted)' }}>
                {review.user} · {review.city}
                {review.verified && <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(122, 184, 122, 0.11)', color: 'var(--green)' }}>✓ Verified</span>}
              </div>
              <div className="flex gap-1.5">
                {review.status === 'critical' && (
                  <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(201, 96, 96, 0.11)', color: 'var(--red)' }}>
                    Critical
                  </span>
                )}
                {review.status === 'pending' && (
                  <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(212, 168, 87, 0.11)', color: 'var(--amber)' }}>
                    Needs Reply
                  </span>
                )}
                {review.status === 'resolved' && (
                  <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(122, 184, 122, 0.11)', color: 'var(--green)' }}>
                    Resolved
                  </span>
                )}
              </div>
            </div>

            {replyingTo === review.id ? (
              <div className="mt-3 p-2.5 rounded-lg" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <Textarea
                  placeholder="Write your response..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="text-[11.5px] mb-2 min-h-[80px]"
                  style={{ background: 'transparent', border: 'none', color: 'var(--text)' }}
                />
                <div className="flex justify-end gap-1.5">
                  <Button size="sm" variant="outline" className="text-[10px] h-7" onClick={() => setReplyingTo(null)}>
                    Cancel
                  </Button>
                  <Button size="sm" className="text-[10px] h-7" style={{ background: 'var(--accent)', color: '#1a1208' }} onClick={() => handleSendReply(review.id)}>
                    <Send size={12} className="mr-1" />
                    Send Reply
                  </Button>
                </div>
              </div>
            ) : review.status !== 'resolved' ? (
              <Button
                size="sm"
                variant="outline"
                className="text-[10px] h-7 mt-3"
                onClick={() => setReplyingTo(review.id)}
              >
                Reply
              </Button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
