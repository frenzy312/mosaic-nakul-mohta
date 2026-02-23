import { Target, AlertCircle, Sparkles } from "lucide-react";
import { whiteSpaceAnalysis } from "@/data/mockData";

const WhiteSpaceTool = () => {
  return (
    <div className="stat-card animate-slide-in-right">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-info/10">
          <Target className="h-4 w-4 text-info" />
        </div>
        <h3 className="text-sm font-semibold text-foreground">White Space Analysis</h3>
      </div>

      <p className="text-[11px] text-muted-foreground mb-3">
        Compares your brand's ads against competitors. Highlights what's missing.
      </p>

      <div className="space-y-4">
        {whiteSpaceAnalysis.map(item => (
          <div key={item.id} className="border rounded-lg p-3">
            <h4 className="text-xs font-semibold text-foreground mb-2">{item.category}</h4>

            <div className="mb-2">
              <div className="flex items-center gap-1 mb-1.5">
                <AlertCircle className="h-3 w-3 text-destructive" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-destructive">Gaps</span>
              </div>
              <ul className="space-y-1">
                {item.gaps.map((gap, i) => (
                  <li key={i} className="text-[11px] text-muted-foreground pl-4 relative before:absolute before:left-1 before:top-[6px] before:w-1 before:h-1 before:rounded-full before:bg-destructive/50">
                    {gap}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-1.5">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">Opportunities</span>
              </div>
              <ul className="space-y-1">
                {item.opportunities.map((opp, i) => (
                  <li key={i} className="text-[11px] text-muted-foreground pl-4 relative before:absolute before:left-1 before:top-[6px] before:w-1 before:h-1 before:rounded-full before:bg-primary/50">
                    {opp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteSpaceTool;
