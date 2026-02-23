import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { Competitor } from "@/data/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CompetitorTableProps {
  competitors: Competitor[];
}

const brandAccent: Record<string, string> = {
  "Man Matters": "bg-primary/10 text-primary",
  "Be Bodywise": "bg-info/10 text-info",
  "Little Joys": "bg-warning/10 text-warning",
};

const trendIcon = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const CompetitorTable = ({ competitors }: CompetitorTableProps) => {
  if (competitors.length === 0) {
    return (
      <div className="stat-card flex items-center justify-center py-12">
        <p className="text-muted-foreground text-sm">No competitors match your filters.</p>
      </div>
    );
  }

  return (
    <div className="stat-card animate-fade-in overflow-x-auto">
      <h2 className="section-title mb-3">Competitor Overview</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">#</TableHead>
            <TableHead>Competitor</TableHead>
            <TableHead>Segment</TableHead>
            <TableHead className="text-center">Total Ads</TableHead>
            <TableHead className="text-center">Active</TableHead>
            <TableHead className="text-center">Top ⭐</TableHead>
            <TableHead>Format</TableHead>
            <TableHead>Theme</TableHead>
            <TableHead className="text-right">Spend Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {competitors.map((c, i) => {
            const TrendIcon = trendIcon[c.trendDirection];
            return (
              <TableRow key={c.name}>
                <TableCell className="font-mono text-xs text-muted-foreground">{i + 1}</TableCell>
                <TableCell className="font-semibold text-foreground">{c.name}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${brandAccent[c.parentBrand]}`}>
                    {c.parentBrand}
                  </span>
                </TableCell>
                <TableCell className="text-center font-semibold">{c.totalAds}</TableCell>
                <TableCell className="text-center">{c.activeAds}</TableCell>
                <TableCell className="text-center font-semibold text-primary">{c.topPerformers}</TableCell>
                <TableCell>
                  <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[11px] font-medium">
                    {c.dominantFormat}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-xs text-muted-foreground">{c.dominantTheme}</span>
                </TableCell>
                <TableCell className="text-right">
                  <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                    c.trendDirection === 'up' ? 'text-primary' :
                    c.trendDirection === 'down' ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    <TrendIcon className="h-3 w-3" />
                    {c.adSpendTrend}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompetitorTable;
