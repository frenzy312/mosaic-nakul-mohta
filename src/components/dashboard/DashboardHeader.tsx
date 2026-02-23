import { Activity } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface DashboardHeaderProps {
  onToggleBrief: () => void;
  briefOpen: boolean;
}

const DashboardHeader = ({ onToggleBrief, briefOpen }: DashboardHeaderProps) => {
  return (
    <header className="flex items-center justify-between animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-primary">
          <Activity className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">Mosaic Intelligence</h1>
          <p className="text-xs text-muted-foreground">Competitive Ad Intelligence · 10 competitors tracked</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="weekly-brief-toggle" className="text-sm font-medium text-foreground cursor-pointer">
          Weekly Brief
        </label>
        <Switch
          id="weekly-brief-toggle"
          checked={briefOpen}
          onCheckedChange={onToggleBrief}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
