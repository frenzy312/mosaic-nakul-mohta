import { TrendingUp, TrendingDown, Minus, Video, Image, Layers } from "lucide-react";
import type { Competitor, CompetitorAd } from "@/data/mockData";

interface CompetitorCardProps {
  competitor: Competitor;
  ads: CompetitorAd[];
}

const formatIcon: Record<string, typeof Video> = {
  Video: Video,
  Static: Image,
  Carousel: Layers,
};

const trendIcon = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const brandAccent: Record<string, string> = {
  "Man Matters": "bg-primary/10 text-primary",
  "Be Bodywise": "bg-info/10 text-info",
  "Little Joys": "bg-warning/10 text-warning",
};

const CompetitorCard = ({ competitor, ads }: CompetitorCardProps) => {
  const TrendIcon = trendIcon[competitor.trendDirection];
  const FormatIcon = formatIcon[competitor.dominantFormat] || Video;
  const topAds = ads.filter(a => a.isTopPerformer);

  return (
    <div className="stat-card group animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-foreground text-sm">{competitor.name}</h4>
          <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${brandAccent[competitor.parentBrand]}`}>
            vs {competitor.parentBrand}
          </span>
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium ${
          competitor.trendDirection === 'up' ? 'text-primary' :
          competitor.trendDirection === 'down' ? 'text-destructive' : 'text-muted-foreground'
        }`}>
          <TrendIcon className="h-3 w-3" />
          {competitor.adSpendTrend}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <p className="data-label">Total</p>
          <p className="text-lg font-bold text-foreground">{competitor.totalAds}</p>
        </div>
        <div>
          <p className="data-label">Active</p>
          <p className="text-lg font-bold text-foreground">{competitor.activeAds}</p>
        </div>
        <div>
          <p className="data-label">Top ⭐</p>
          <p className="text-lg font-bold text-primary">{competitor.topPerformers}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
          <FormatIcon className="h-3 w-3" />
          <span className="text-[11px] font-medium">{competitor.dominantFormat}</span>
        </div>
        <div className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
          <span className="text-[11px] font-medium">{competitor.dominantTheme}</span>
        </div>
      </div>

      {topAds.length > 0 && (
        <div className="border-t pt-3 space-y-2">
          <p className="section-title text-[10px]">Top Performing Ads</p>
          {topAds.slice(0, 2).map(ad => (
            <div key={ad.id} className="flex items-start gap-2">
              <div className="badge-performer shrink-0 mt-0.5">
                {ad.daysActive}d
              </div>
              <p className="text-[11px] text-muted-foreground leading-tight line-clamp-2">{ad.headline}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompetitorCard;
