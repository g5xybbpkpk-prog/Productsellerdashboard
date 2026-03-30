export const mockInventory = [
  { id: 1, name: "Niacinamide 10% Serum", sku: "LB-NIA-30", stock: 218, status: "Good", hsn: "3304", reorderThreshold: 50 },
  { id: 2, name: "Vitamin C Brightening SPF", sku: "LB-VTC-50", stock: 94, status: "Good", hsn: "3304", reorderThreshold: 50 },
  { id: 3, name: "Hyaluronic Acid Toner", sku: "LB-HAT-100", stock: 12, status: "Low", hsn: "3304", reorderThreshold: 20 },
  { id: 4, name: "Retinol Night Repair", sku: "LB-RET-30", stock: 0, status: "Out of stock", hsn: "3304", reorderThreshold: 30 },
  { id: 5, name: "Rose Hip Face Oil", sku: "LB-RHO-20", stock: 57, status: "Good", hsn: "3305", reorderThreshold: 40 },
  { id: 6, name: "Ceramide Repair Cream", sku: "LB-CER-50", stock: 0, status: "Out of stock", hsn: "3304", reorderThreshold: 30 },
];

export const mockLeakage = {
  chart: [
    { label: "RTO logistics", amount: "₹4,320", pct: 72, color: "var(--red)", dispute: false },
    { label: "Return pickups", amount: "₹1,980", pct: 38, color: "var(--rose)", dispute: false },
    { label: "Return penalties", amount: "₹950", pct: 18, color: "var(--amber)", dispute: true },
    { label: "Weight discrepancy", amount: "₹520", pct: 10, color: "var(--purple)", dispute: true },
  ],
  summary: [
    { val: "₹7,770", color: "var(--red)", lbl: "Total lost this month" },
    { val: "8%", color: "var(--amber)", lbl: "RTO rate — 10% triggers surcharge" },
    { val: "₹4,320", color: "var(--rose)", lbl: "RTO spend — COD exposure" },
    { val: "₹2,930", color: "var(--green)", lbl: "Reserve held — releases Jul 16" },
  ],
};

export const mockOrders = [
  { id: "RNR-88430", date: "Jun 26, 9:14am", customer: "Priya Mehta", city: "Mumbai", product: "Niacinamide 10% Serum 30ml", sku: "LB-NIA-30", amount: "₹599", type: "Prepaid", status: "confirmed", sla: "breach", slaText: "1h 22m left" },
  { id: "RNR-88427", date: "Jun 26, 8:58am", customer: "Rohan Kapoor", city: "Delhi NCR", product: "Vitamin C Brightening SPF 50ml", sku: "LB-VTC-50", amount: "₹899", type: "Prepaid", status: "confirmed", sla: "breach", slaText: "1h 48m left" },
  { id: "RNR-88419", date: "Jun 26, 7:33am", customer: "Ananya Singh", city: "Bengaluru", product: "HA Toner 100ml + Serum Bundle", sku: "LB-HAT-100", amount: "₹1,098", type: "Prepaid", status: "confirmed", sla: "breach", slaText: "2h 06m left" },
  { id: "RNR-88411", date: "Jun 26, 6:10am", customer: "Sneha Rao", city: "Pune", product: "Rose Hip Face Oil 20ml", sku: "LB-RHO-20", amount: "₹799", type: "COD", status: "confirmed", sla: "ok", slaText: "6h 40m" },
  { id: "RNR-88398", date: "Jun 25, 11:45pm", customer: "Kiran Nair", city: "Hyderabad", product: "Niacinamide 10% Serum 30ml", sku: "LB-NIA-30", amount: "₹599", type: "Prepaid", status: "transit", sla: "ok", slaText: "On time" },
  { id: "RNR-88391", date: "Jun 25, 10:22pm", customer: "Aisha Hussain", city: "Chennai", product: "Vitamin C Brightening SPF", sku: "LB-VTC-50", amount: "₹899", type: "Prepaid", status: "transit", sla: "ok", slaText: "On time" },
  { id: "RNR-88380", date: "Jun 25, 8:14pm", customer: "Dev Sharma", city: "Jaipur", product: "HA Toner 100ml", sku: "LB-HAT-100", amount: "₹649", type: "COD", status: "transit", sla: "ok", slaText: "On time" },
  { id: "RNR-88342", date: "Jun 25, 3:30pm", customer: "Meera Patel", city: "Ahmedabad", product: "Rose Hip Face Oil 20ml", sku: "LB-RHO-20", amount: "₹799", type: "Prepaid", status: "delivered", sla: "ok", slaText: "Delivered" },
  { id: "RNR-88310", date: "Jun 24, 11:00am", customer: "Vikram Joshi", city: "Mumbai", product: "Niacinamide 10% Serum", sku: "LB-NIA-30", amount: "₹599", type: "COD", status: "cod", sla: "ok", slaText: "Awaiting COD" },
  { id: "RNR-88304", date: "Jun 24, 9:48am", customer: "Risha Desai", city: "Bengaluru", product: "Vitamin C Brightening SPF", sku: "LB-VTC-50", amount: "₹899", type: "Prepaid", status: "return", sla: "warn", slaText: "Return dispute" },
];

export const activityFeed = [
  {
    date: "Today",
    items: [
      { time: "2 min ago", icon: "🚨", type: "order", badge: "Order", title: "3 orders approaching SLA breach", detail: "#RNR-88430, #RNR-88427, #RNR-88419 require dispatch within 2 hours", expandable: true },
      { time: "14 min ago", icon: "⭐", type: "review", badge: "Review", title: "New 5★ review on Niacinamide Serum", detail: "Ananya K. from Bengaluru — 'Akhtar recommended it and it was 100% right!'" },
      { time: "22 min ago", icon: "✦", type: "ai", badge: "AI", title: "Akhtar matched 48 new users to your products", detail: "Acne-prone + Dehydration profiles · 34% avg conversion rate this session" },
      { time: "1h ago", icon: "📦", type: "order", badge: "Order", title: "Order #RNR-88411 confirmed", detail: "Rose Hip Face Oil · Sneha Rao, Pune · ₹799 COD" },
      { time: "1h 20m ago", icon: "💳", type: "finance", badge: "Finance", title: "Weekly settlement processed", detail: "₹42,400 net payout for Jun 15–21 · Transferred to bank account ending 4421" },
      { time: "2h ago", icon: "↩", type: "return", badge: "Return", title: "Return dispute filed for #RNR-88304", detail: "Customer claims damaged pump · Packing video upload required by EOD" },
      { time: "3h ago", icon: "⭐", type: "review", badge: "Review", title: "Review flagged: packaging issue", detail: "Rishi D. (Delhi) · 3★ · 'pump dispenser stopped working after a week'" },
      { time: "4h ago", icon: "◁", type: "promo", badge: "Campaign", title: "BOGO campaign hit usage cap", detail: "Buy 1 Get 1 Niacinamide Serum · 200 redemptions · Revenue lifted ₹8,400" },
    ],
  },
  {
    date: "Yesterday",
    items: [
      { time: "Jun 25, 8:44pm", icon: "📦", type: "order", badge: "Order", title: "Bulk dispatch completed · 31 orders", detail: "Avg dispatch time 13.4h · All within SLA · Delhivery + Bluedart" },
      { time: "Jun 25, 4:12pm", icon: "✦", type: "ai", badge: "AI", title: "Akhtar skin match report available", detail: "2,841 monthly impressions · Acne-prone (72%), Pigmentation (58%), Dehydrated (49%)" },
      { time: "Jun 25, 2:30pm", icon: "⚙", type: "system", badge: "System", title: "Inventory alert: HA Toner low stock", detail: "LB-HAT-100 at 12 units · Below reorder threshold of 20 units" },
      { time: "Jun 25, 11:00am", icon: "💳", type: "finance", badge: "Finance", title: "Ad wallet deduction: ₹1,200", detail: "Akhtar Boost impressions (67 clicks) · Balance remaining: ₹6,800" },
      { time: "Jun 25, 9:18am", icon: "⭐", type: "review", badge: "Review", title: "2 new 5★ reviews received", detail: "Niacinamide Serum · Vitamin C SPF · Both verified purchases" },
      { time: "Jun 25, 8:00am", icon: "⚙", type: "system", badge: "System", title: "Daily performance digest ready", detail: "847 total orders · ₹2.4L MTD revenue · 94% dispatch rate · View full report" },
    ],
  },
];

export const mockNotifications = [
  { icon: "🚨", title: "SLA breach imminent", time: "2m", body: "3 orders need dispatch — 1h 48m window remaining", action: "Print Labels", unread: true },
  { icon: "↩", title: "Return dispute deadline", time: "4h", body: "Upload packing video for #RNR-88304 by end of day", action: "Upload Now", unread: true },
  { icon: "⭐", title: "2 reviews need reply", time: "6h", body: "Pump complaint reviews from Priya M. and Rishi D.", action: "Reply Now", unread: true },
  { icon: "📦", title: "HA Toner low stock", time: "1d", body: "Only 12 units left — below reorder threshold", action: "Restock", unread: false },
];

export const mockReviews = [
  { id: 1, rating: 5, product: "Niacinamide 10% Serum", date: "Jun 26, 2025", user: "Ananya K.", city: "Bengaluru", text: "Akhtar recommended it and it was 100% right! My skin has never looked better. The texture is lightweight and absorbs quickly.", verified: true, status: "pending" },
  { id: 2, rating: 3, product: "Vitamin C Brightening SPF", date: "Jun 25, 2025", user: "Rishi D.", city: "Delhi", text: "The product is good but the pump dispenser stopped working after a week. Had to transfer it to another bottle.", verified: true, status: "critical" },
  { id: 3, rating: 5, product: "Hyaluronic Acid Toner", date: "Jun 24, 2025", user: "Priya M.", city: "Mumbai", text: "Amazing hydration! I use it morning and night. My skin feels plump and hydrated all day long.", verified: true, status: "resolved" },
  { id: 4, rating: 4, product: "Rose Hip Face Oil", date: "Jun 23, 2025", user: "Sneha R.", city: "Pune", text: "Good quality oil, helps with my dry patches. Wish it came in a larger size though.", verified: true, status: "pending" },
  { id: 5, rating: 2, product: "Vitamin C Brightening SPF", date: "Jun 22, 2025", user: "Karan S.", city: "Hyderabad", text: "Received a damaged product. The pump was broken and some product had leaked out. Very disappointing.", verified: true, status: "critical" },
];

export const mockReturns = [
  { id: "RET-1024", orderId: "RNR-88304", date: "Jun 24, 9:48am", customer: "Risha Desai", city: "Bengaluru", product: "Vitamin C Brightening SPF", sku: "LB-VTC-50", amount: "₹899", reason: "Damaged/Defective", status: "dispute", daysLeft: 0, requiresVideo: true },
  { id: "RET-1023", orderId: "RNR-88256", date: "Jun 23, 2:15pm", customer: "Amit Kumar", city: "Delhi", product: "Niacinamide 10% Serum", sku: "LB-NIA-30", amount: "₹599", reason: "Quality Issue", status: "pending", daysLeft: 2, requiresVideo: false },
  { id: "RET-1022", orderId: "RNR-88198", date: "Jun 22, 11:30am", customer: "Neha Sharma", city: "Mumbai", product: "Rose Hip Face Oil", sku: "LB-RHO-20", amount: "₹799", reason: "Wrong Product", status: "approved", daysLeft: null, requiresVideo: false },
  { id: "RET-1021", orderId: "RNR-88145", date: "Jun 21, 4:45pm", customer: "Rajesh Patel", city: "Ahmedabad", product: "HA Toner", sku: "LB-HAT-100", amount: "₹649", reason: "Not as Expected", status: "rejected", daysLeft: null, requiresVideo: false },
];

export const revenueData = {
  '7d': [3800, 4200, 5100, 3900, 4800, 5400, 4620],
  '30d': [18000, 22000, 19000, 25000, 21000, 28000, 24000, 30000, 26000, 32000, 28000, 35000, 31000, 38000, 34000, 40000, 36000, 42000, 38000, 44000, 40000, 45000, 42000, 47000, 43000, 48000, 44000, 50000, 46000, 52000],
  '90d': [62000, 71000, 78000, 85000, 79000, 92000, 88000, 99000, 94000, 108000, 102000, 115000],
  'ytd': [155000, 178000, 190000, 210000, 195000, 240000]
};

export const periodLabels = { '7d': 'Last 7 days', '30d': 'Last 30 days', '90d': 'Last 90 days', 'ytd': 'Year to date' };

export const chartLabels = {
  '7d': ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  '30d': Array.from({ length: 30 }, (_, i) => `${i + 1}`).filter((_, i) => i % 5 === 0 || i === 29),
  '90d': ['Apr W1', 'Apr W2', 'Apr W3', 'Apr W4', 'May W1', 'May W2', 'May W3', 'May W4', 'Jun W1', 'Jun W2', 'Jun W3', 'Jun W4'],
  'ytd': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
};
