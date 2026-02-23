import { Lightbulb } from "lucide-react";
import { gapDetections } from "@/data/mockData";

const impactStyles = {
  high: "badge-performer",
  medium: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-warning/10 text-warning",
  low: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-muted text-muted-foreground",
};

const GapDetection = () => {
  return (
    <div className="stat-card animate-slide-in-right">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-warning/10">
          <Lightbulb className="h-4 w-4 text-warning" />
        </div>
        <h3 className="text-sm font-semibold text-foreground">Gap Detection</h3>
      </div>

      <p className="text-[11px] text-muted-foreground mb-3">
        Creative formats & messages competitors aren't using — opportunities for you.
      </p>

      <div className="space-y-3">
        {gapDetections.map(gap => (
          <div key={gap.id} className="insight-card">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <p className="text-xs font-semibold text-foreground">{gap.opportunity}</p>
              <span className={impactStyles[gap.impact]}>{gap.impact}</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{gap.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GapDetection;
