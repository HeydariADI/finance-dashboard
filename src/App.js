import { jsx as _jsx } from "react/jsx-runtime";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
function App() {
    return (_jsx(DashboardLayout, { children: _jsx(Dashboard, {}) }));
}
export default App;
