import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export default function CustomerSupport() {
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'them', user: 'Sneha R.', text: 'Is the Vitamin C serum suitable for sensitive skin? I have rosacea.' },
    {
      type: 'you',
      user: 'Lumière Botanics',
      text: 'Our Vitamin C SPF is formulated at 10% — gentle enough for most skin types. We do recommend patch testing first if you have rosacea. The Niacinamide Serum may actually be a better fit!',
    },
    { type: 'them', user: 'Sneha R.', text: 'Thanks! Does the niacinamide help with redness?' },
  ]);

  const tickets = [
    {
      id: 'T-3421',
      customer: 'Priya M.',
      city: 'Mumbai',
      issue: 'Is this safe for use during pregnancy?',
      priority: 'Medium',
      priorityType: 'low',
      action: 'Reply',
      actionClass: 'btn-primary',
    },
    {
      id: 'T-3420',
      customer: 'Rohan K.',
      city: 'Delhi',
      issue: 'Order shows delivered but not received',
      priority: 'Urgent',
      priorityType: 'out',
      action: 'Check',
      actionClass: 'btn-danger',
    },
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    setMessages([...messages, { type: 'you', user: 'Lumière Botanics', text: chatMessage }]);
    setChatMessage('');
    toast.success('Message sent');
  };

  return (
    <div className="p-7 max-w-[1400px] animate-fade-up">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight">
            Customer <span className="text-[var(--accent)] italic">Support</span>
          </h1>
          <p className="text-xs text-[var(--muted)] mt-1">
            Respond to pre-purchase queries and manage open tickets · 2 open tickets
          </p>
        </div>
        <button className="px-4 py-2 text-xs font-medium bg-transparent text-[var(--muted)] border border-[var(--border)] rounded-lg hover:border-[var(--border-h)] hover:text-[var(--text)] transition-all">
          View all tickets
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Open Tickets */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">Open Tickets</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Ticket #
                  </th>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Customer
                  </th>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Issue
                  </th>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Priority
                  </th>
                  <th className="text-left text-[9.5px] font-medium uppercase tracking-wide text-[var(--muted)] opacity-65 pb-2.5 border-b border-[var(--border)]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="py-2.5 border-b border-[var(--border)] text-xs text-[var(--accent)] font-medium">
                      {ticket.id}
                    </td>
                    <td className="py-2.5 border-b border-[var(--border)]">
                      <div className="text-xs">{ticket.customer}</div>
                      <div className="text-[10px] text-[var(--muted)]">{ticket.city}</div>
                    </td>
                    <td className="py-2.5 border-b border-[var(--border)] text-[11.5px] text-[var(--text)]">
                      {ticket.issue}
                    </td>
                    <td className="py-2.5 border-b border-[var(--border)]">
                      <span
                        className={`inline-block text-[9.5px] font-medium px-2 py-0.5 rounded-full ${
                          ticket.priorityType === 'out'
                            ? 'bg-[rgba(201,96,96,0.11)] text-[var(--red)]'
                            : 'bg-[rgba(212,168,87,0.11)] text-[var(--amber)]'
                        }`}
                      >
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-2.5 border-b border-[var(--border)]">
                      <button
                        onClick={() => toast.success('Ticket opened')}
                        className={`text-[10px] px-2 py-1 rounded font-medium transition-all ${
                          ticket.actionClass === 'btn-primary'
                            ? 'bg-[var(--accent)] text-[#1a1208] hover:bg-[var(--accent2)]'
                            : 'bg-[rgba(201,96,96,0.12)] text-[var(--red)] border border-[rgba(201,96,96,0.2)] hover:bg-[rgba(201,96,96,0.2)]'
                        }`}
                      >
                        {ticket.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[13px] p-5 hover:border-[var(--border-h)] transition-colors">
          <h3 className="text-[10.5px] font-medium text-[var(--muted)] uppercase tracking-wide mb-4">Live Chat</h3>
          <div className="h-[180px] bg-[var(--surface2)] rounded-lg p-3 overflow-y-auto mb-3 flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-xs leading-relaxed p-2 rounded-lg max-w-[85%] ${
                  msg.type === 'them'
                    ? 'bg-[var(--surface3)] text-[var(--text)] self-start'
                    : 'bg-[rgba(232,196,160,0.1)] text-[var(--accent)] self-end border border-[rgba(232,196,160,0.18)]'
                }`}
              >
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your reply as Lumière Botanics…"
              className="flex-1 bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-3 py-2 text-xs text-[var(--text)] focus:border-[var(--border-h)] outline-none transition-colors"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 text-xs font-medium bg-[var(--accent)] text-[#1a1208] rounded-lg hover:bg-[var(--accent2)] transition-all flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
