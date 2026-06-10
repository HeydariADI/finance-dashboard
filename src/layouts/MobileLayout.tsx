import { ReactNode } from "react";
import BottomNav from "../components/mobile/BottomNav";

type Props = {
  children: ReactNode;
};

export default function MobileLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {children}
      <BottomNav />
    </div>
  );
}