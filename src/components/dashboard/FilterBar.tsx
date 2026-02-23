import type { Brand, AdFormat, MessagingTheme, RecencyFilter } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

interface FilterBarProps {
  selectedBrand: Brand | "All";
  setSelectedBrand: (brand: Brand | "All") => void;
  selectedFormat: AdFormat | "All";
  setSelectedFormat: (format: AdFormat | "All") => void;
  selectedTheme: MessagingTheme | "All";
  setSelectedTheme: (theme: MessagingTheme | "All") => void;
  selectedRecency: RecencyFilter;
  setSelectedRecency: (recency: RecencyFilter) => void;
}

const FilterBar = ({
  selectedBrand, setSelectedBrand,
  selectedFormat, setSelectedFormat,
  selectedTheme, setSelectedTheme,
  selectedRecency, setSelectedRecency,
}: FilterBarProps) => {
  const brands: (Brand | "All")[] = ["All", "Man Matters", "Be Bodywise", "Little Joys"];
  const formats: (AdFormat | "All")[] = ["All", "Video", "Static", "Carousel"];
  const themes: (MessagingTheme | "All")[] = ["All", "Science-Based", "Influencer-Led", "UGC", "Discount/Offer", "Testimonial", "Lifestyle"];
  const recencies: RecencyFilter[] = ["All", "New (< 7 days)", "Active", "Top Performers (30+ days)"];

  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 shrink-0">
          <Filter className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Filters</span>
        </div>

        <div className="flex items-center gap-3 flex-wrap flex-1">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Brand</label>
            <Select value={selectedBrand} onValueChange={(v) => setSelectedBrand(v as Brand | "All")}>
              <SelectTrigger className="w-[160px] h-9 text-sm bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border z-50">
                {brands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Format</label>
            <Select value={selectedFormat} onValueChange={(v) => setSelectedFormat(v as AdFormat | "All")}>
              <SelectTrigger className="w-[130px] h-9 text-sm bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border z-50">
                {formats.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Theme</label>
            <Select value={selectedTheme} onValueChange={(v) => setSelectedTheme(v as MessagingTheme | "All")}>
              <SelectTrigger className="w-[160px] h-9 text-sm bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border z-50">
                {themes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Recency</label>
            <Select value={selectedRecency} onValueChange={(v) => setSelectedRecency(v as RecencyFilter)}>
              <SelectTrigger className="w-[200px] h-9 text-sm bg-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border z-50">
                {recencies.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
