import useDashboard from "../features/dashboard/useDashboard";
import MobileDashboard from "../features/dashboard/MobileDashboard";
import DesktopDashboard from "../features/dashboard/DesktopDashboard";

export default function Dashboard() {
  const dashboard = useDashboard();

  return (
    <>
      <div className="lg:hidden">
        <MobileDashboard {...dashboard} />
      </div>

      <div className="hidden lg:block">
        <DesktopDashboard {...dashboard} />
      </div>
    </>
  );
}