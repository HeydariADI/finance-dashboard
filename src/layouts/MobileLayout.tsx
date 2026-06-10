import { ReactNode } from "react";
import BottomNav from "../components/mobile/BottomNav";

export default function MobileLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {children}
      <BottomNav />
    </div>
  );
}