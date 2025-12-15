import { getDashboardSummary, getLowStockProducts } from "@/lib/dal";
import DashboardOverview from "./dashboard-overview";

export default async function DashboardPage() {
  const lowStockItems = await getLowStockProducts();
  const dashboardSummary = await getDashboardSummary();
  return (
    <div>
      <DashboardOverview
        lowStockItems={lowStockItems}
        dashboardSummary={dashboardSummary}
      />
    </div>
  );
}
