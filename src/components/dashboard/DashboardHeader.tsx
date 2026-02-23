import { Activity, FileText } from "lucide-react";

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

      <button
        onClick={onToggleBrief}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          briefOpen
            ? 'bg-primary text-primary-foreground shadow-md'
            : 'bg-secondary text-secondary-foreground hover:bg-accent'
        }`}
      >
        <FileText className="h-4 w-4" />
        Weekly Brief
      </button>
    </header>
  );
};

export default DashboardHeader;
