import { useState } from 'react';
import { mockInventory } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Edit, Package } from 'lucide-react';
import { toast } from 'sonner';

export default function Inventory() {
  const [editingItem, setEditingItem] = useState<any>(null);
  const [stock, setStock] = useState('');

  const handleUpdateStock = () => {
    toast.success('Stock updated successfully!');
    setEditingItem(null);
    setStock('');
  };

  return (
    <div className="max-w-[1400px]">
      <div className="flex items-start justify-between mb-5 animate-fade-up">
        <div>
          <h1 className="font-serif text-[30px] font-medium tracking-tight leading-none">
            Inventory <span className="italic" style={{ color: 'var(--accent)' }}>Management</span>
          </h1>
          <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>
            Track and manage your product stock levels
          </p>
        </div>
        <Button size="sm" className="text-xs" style={{ background: 'var(--accent)', color: '#1a1208' }}>
          <Plus size={14} className="mr-1.5" />
          Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 mb-4.5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {[
          { label: 'Total SKUs', val: mockInventory.length, color: 'var(--text)' },
          { label: 'Out of Stock', val: mockInventory.filter(i => i.status === 'Out of stock').length, color: 'var(--red)' },
          { label: 'Low Stock', val: mockInventory.filter(i => i.status === 'Low').length, color: 'var(--amber)' },
          { label: 'Good Stock', val: mockInventory.filter(i => i.status === 'Good').length, color: 'var(--green)' },
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

      {/* Inventory Table */}
      <div className="rounded-[13px] overflow-hidden animate-fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', animationDelay: '0.1s' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Product
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  SKU
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Current Stock
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Reorder Threshold
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Status
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  HSN
                </th>
                <th className="text-left px-4 py-3 text-[9.5px] font-medium uppercase tracking-wide opacity-70" style={{ color: 'var(--muted)' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockInventory.map((item) => (
                <tr key={item.id} className="border-b hover:bg-white/[0.015]" style={{ borderColor: 'var(--border)' }}>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                      {item.name}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                      {item.sku}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                      {item.stock}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-sm" style={{ color: 'var(--muted)' }}>
                      {item.reorderThreshold}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <span
                      className="text-[10px] font-medium px-2 py-1 rounded-full inline-block"
                      style={{
                        background:
                          item.status === 'Low'
                            ? 'rgba(212, 168, 87, 0.11)'
                            : item.status === 'Out of stock'
                            ? 'rgba(201, 96, 96, 0.11)'
                            : 'rgba(122, 184, 122, 0.11)',
                        color:
                          item.status === 'Low'
                            ? 'var(--amber)'
                            : item.status === 'Out of stock'
                            ? 'var(--red)'
                            : 'var(--green)',
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>
                      {item.hsn}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-[10px] h-7"
                      onClick={() => {
                        setEditingItem(item);
                        setStock(item.stock.toString());
                      }}
                    >
                      <Edit size={12} className="mr-1" />
                      Update Stock
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Stock Dialog */}
      <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
        <DialogContent className="sm:max-w-[425px]" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
          <DialogHeader>
            <DialogTitle className="font-serif text-xl" style={{ color: 'var(--accent)' }}>
              Update Stock
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label className="text-xs mb-1.5 block" style={{ color: 'var(--muted)' }}>
                Product
              </Label>
              <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                {editingItem?.name}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                {editingItem?.sku}
              </div>
            </div>
            <div>
              <Label htmlFor="stock" className="text-xs mb-1.5 block" style={{ color: 'var(--muted)' }}>
                New Stock Level
              </Label>
              <Input
                id="stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="text-sm"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setEditingItem(null)}>
              Cancel
            </Button>
            <Button size="sm" style={{ background: 'var(--accent)', color: '#1a1208' }} onClick={handleUpdateStock}>
              <Package size={14} className="mr-1.5" />
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
