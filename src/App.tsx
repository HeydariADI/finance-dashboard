import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}

export default App;