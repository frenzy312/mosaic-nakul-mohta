import { useMemo } from "react";
import { FileText } from "lucide-react";
import { weeklyBriefPoints } from "@/data/mockData";
import { startOfWeek, endOfWeek, format } from "date-fns";

interface WeeklyBriefProps {
  isOpen: boolean;
}

const WeeklyBrief = ({ isOpen }: WeeklyBriefProps) => {
  const weekLabel = useMemo(() => {
    const now = new Date();
    const start = startOfWeek(now, { weekStartsOn: 1 });
    const end = endOfWeek(now, { weekStartsOn: 1 });
    return `Week of ${format(start, "MMM d")}–${format(end, "d, yyyy")}`;
  }, []);

  if (!isOpen) return null;

  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <FileText className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-foreground">Weekly Intelligence Brief</h2>
          <p className="text-[10px] text-muted-foreground">{weekLabel}</p>
        </div>
      </div>

      <div className="space-y-3">
        {weeklyBriefPoints.map((point, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5">
              <span className="text-[9px] font-bold text-primary">{i + 1}</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyBrief;
