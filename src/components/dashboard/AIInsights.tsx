import { Brain, TrendingUp, ArrowRightLeft, AlertTriangle } from "lucide-react";
import { aiInsights } from "@/data/mockData";

const severityStyles = {
  high: "border-l-primary bg-primary/5",
  medium: "border-l-warning bg-warning/5",
  low: "border-l-muted-foreground bg-muted/50",
};

const typeIcons = {
  trend: TrendingUp,
  shift: ArrowRightLeft,
};

const AIInsights = () => {
  return (
    <div className="stat-card animate-slide-in-right">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-primary/10">
          <Brain className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-sm font-semibold text-foreground">AI Insights</h3>
        <span className="ml-auto badge-performer">Live</span>
      </div>

      <div className="space-y-3">
        {aiInsights.map(insight => {
          const Icon = typeIcons[insight.type];
          return (
            <div
              key={insight.id}
              className={`border-l-2 rounded-r-lg p-3 ${severityStyles[insight.severity]}`}
            >
              <div className="flex items-start gap-2">
                <Icon className="h-3.5 w-3.5 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground">{insight.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIInsights;
