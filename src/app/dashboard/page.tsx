import StatsCard from "@/components/dashboard/cards/StatsCard";
import {
  CalendarDays,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <DashboardHeader />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <StatsCard
    title="Active Bookings"
    value="12"
    subtitle="2 scheduled today"
    icon={<CalendarDays size={26} />}
  />

  <StatsCard
    title="Average Rating"
    value="4.9"
    subtitle="Based on customer reviews"
    icon={<Star size={26} />}
  />

  <StatsCard
    title="Available Workers"
    value="248"
    subtitle="Verified professionals"
    icon={<Users size={26} />}
  />

  <StatsCard
    title="Monthly Revenue"
    value="₹0"
    subtitle="Launch phase"
    icon={<Wallet size={26} />}
  />

</div>
      </div>
    </main>
  );
}