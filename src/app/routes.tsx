import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import ActivityFeed from "./pages/ActivityFeed";
import Campaigns from "./pages/Campaigns";
import Finance from "./pages/Finance";
import Storefront from "./pages/Storefront";
import Reviews from "./pages/Reviews";
import Returns from "./pages/Returns";
import Inventory from "./pages/Inventory";
import AdWallet from "./pages/AdWallet";
import GSTReports from "./pages/GSTReports";
import TeamAccess from "./pages/TeamAccess";
import MishtiAI from "./pages/MishtiAI";
import PayoutSimulator from "./pages/PayoutSimulator";
import ComplianceVault from "./pages/ComplianceVault";
import AkhtarAI from "./pages/AkhtarAI";
import CustomerSupport from "./pages/CustomerSupport";
import Logistics from "./pages/Logistics";
import Benchmarking from "./pages/Benchmarking";
import BankKYC from "./pages/BankKYC";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "activity", Component: ActivityFeed },
      { path: "campaigns", Component: Campaigns },
      { path: "mishti-ai", Component: MishtiAI },
      { path: "ad-wallet", Component: AdWallet },
      { path: "orders", Component: Orders },
      { path: "returns", Component: Returns },
      { path: "inventory", Component: Inventory },
      { path: "analytics", Component: Analytics },
      { path: "benchmarking", Component: Benchmarking },
      { path: "finance", Component: Finance },
      { path: "gst-reports", Component: GSTReports },
      { path: "payout-simulator", Component: PayoutSimulator },
      { path: "logistics", Component: Logistics },
      { path: "support", Component: CustomerSupport },
      { path: "akhtar-ai", Component: AkhtarAI },
      { path: "compliance", Component: ComplianceVault },
      { path: "bank-kyc", Component: BankKYC },
      { path: "storefront", Component: Storefront },
      { path: "team-access", Component: TeamAccess },
      { path: "reviews", Component: Reviews },
    ],
  },
]);