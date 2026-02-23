import { TrendingUp, TrendingDown, Minus, BarChart3, Eye, Trophy, Zap } from "lucide-react";
import { competitors, competitorAds } from "@/data/mockData";

const StatsOverview = () => {
  const totalAds = competitors.reduce((sum, c) => sum + c.totalAds, 0);
  const activeAds = competitors.reduce((sum, c) => sum + c.activeAds, 0);
  const topPerformers = competitors.reduce((sum, c) => sum + c.topPerformers, 0);
  const avgDaysActive = Math.round(
    competitorAds.reduce((sum, a) => sum + a.daysActive, 0) / competitorAds.length
  );

  const stats = [
    { label: "Total Ads Tracked", value: totalAds.toLocaleString(), icon: BarChart3, change: "+12%", up: true },
    { label: "Currently Active", value: activeAds.toLocaleString(), icon: Eye, change: "+8%", up: true },
    { label: "Top Performers", value: topPerformers.toLocaleString(), icon: Trophy, change: "+3", up: true },
    { label: "Avg. Days Active", value: `${avgDaysActive}d`, icon: Zap, change: "-2d", up: false },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card animate-fade-in">
          <div className="flex items-start justify-between">
            <div>
              <p className="data-label">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
            <div className="p-2 rounded-lg bg-accent">
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1">
            {stat.up ? (
              <TrendingUp className="h-3 w-3 text-primary" />
            ) : (
              <TrendingDown className="h-3 w-3 text-destructive" />
            )}
            <span className={`text-xs font-medium ${stat.up ? 'text-primary' : 'text-destructive'}`}>
              {stat.change}
            </span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
