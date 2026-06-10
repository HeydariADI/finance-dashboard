import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-6">Finance App</h2>

        <nav className="space-y-3">
          <a className="block text-gray-700 hover:text-blue-600" href="#">
            Dashboard
          </a>
          <a className="block text-gray-700 hover:text-blue-600" href="#">
            Transactions
          </a>
          <a className="block text-gray-700 hover:text-blue-600" href="#">
            Reports
          </a>
          <a className="block text-gray-700 hover:text-blue-600" href="#">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;