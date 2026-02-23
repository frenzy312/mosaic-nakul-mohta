import { Star, Clock, Video, Image, Layers } from "lucide-react";
import type { CompetitorAd } from "@/data/mockData";

interface AdCardGridProps {
  ads: CompetitorAd[];
}

const formatIcon: Record<string, typeof Video> = {
  Video: Video,
  Static: Image,
  Carousel: Layers,
};

const brandAccent: Record<string, string> = {
  "Man Matters": "bg-primary/10 text-primary",
  "Be Bodywise": "bg-info/10 text-info",
  "Little Joys": "bg-warning/10 text-warning",
};

const AdCardGrid = ({ ads }: AdCardGridProps) => {
  if (ads.length === 0) {
    return (
      <div className="stat-card flex items-center justify-center py-12">
        <p className="text-muted-foreground text-sm">No ads match your filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="section-title">Ads ({ads.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ads.map(ad => {
          const FormatIcon = formatIcon[ad.format] || Video;
          return (
            <div key={ad.id} className="stat-card relative animate-fade-in">
              {/* Top Performer Badge */}
              {ad.isTopPerformer && (
                <div className="absolute top-3 right-3 badge-performer flex items-center gap-1">
                  <Star className="h-3 w-3 fill-primary" />
                  Top
                </div>
              )}

              {/* Header */}
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-foreground">{ad.competitor}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${brandAccent[ad.parentBrand]}`}>
                    {ad.parentBrand}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground text-sm leading-snug">{ad.headline}</h4>
              </div>

              {/* Ad copy */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{ad.adCopy}</p>

              {/* Meta row */}
              <div className="flex items-center gap-3 flex-wrap text-[11px]">
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  <FormatIcon className="h-3 w-3" />
                  {ad.format}
                </div>
                <div className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {ad.messagingTheme}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {ad.daysActive} days
                </div>
                <span className="text-muted-foreground">{ad.platform}</span>
                <span className="text-muted-foreground font-medium">{ad.estimatedSpend}</span>
                <span className="text-primary font-medium">{ad.engagement} eng.</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdCardGrid;
