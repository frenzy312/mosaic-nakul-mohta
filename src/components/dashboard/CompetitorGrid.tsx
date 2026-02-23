import CompetitorCard from "./CompetitorCard";
import type { Competitor, CompetitorAd } from "@/data/mockData";

interface CompetitorGridProps {
  competitors: Competitor[];
  ads: CompetitorAd[];
}

const CompetitorGrid = ({ competitors, ads }: CompetitorGridProps) => {
  if (competitors.length === 0) {
    return (
      <div className="stat-card flex items-center justify-center py-12">
        <p className="text-muted-foreground text-sm">No competitors match your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {competitors.map(c => (
        <CompetitorCard
          key={c.name}
          competitor={c}
          ads={ads.filter(a => a.competitor === c.name)}
        />
      ))}
    </div>
  );
};

export default CompetitorGrid;
