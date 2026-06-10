import { jsx as _jsx } from "react/jsx-runtime";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
function App() {
    return (_jsx(DashboardLayout, { children: _jsx(Dashboard, {}) }));
}
export default App;
