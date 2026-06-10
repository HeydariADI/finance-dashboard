import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t flex justify-around items-center text-xl">
      
      <button
        onClick={() => navigate("/")}
        className={isActive("/") ? "text-blue-600" : "text-gray-400"}
      >
        🏠
      </button>

      <button
        onClick={() => navigate("/transactions")}
        className={isActive("/transactions") ? "text-blue-600" : "text-gray-400"}
      >
        📊
      </button>

      <button
        onClick={() => navigate("/reports")}
        className={isActive("/reports") ? "text-blue-600" : "text-gray-400"}
      >
        💳
      </button>

      <button
        onClick={() => navigate("/settings")}
        className={isActive("/settings") ? "text-blue-600" : "text-gray-400"}
      >
        ⚙️
      </button>
    </nav>
  );
}