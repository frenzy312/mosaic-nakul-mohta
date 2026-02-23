import { useState } from "react";
import type { Brand, AdFormat, MessagingTheme, RecencyFilter } from "@/data/mockData";
import { Filter, X } from "lucide-react";

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
  const [expanded, setExpanded] = useState(true);

  const brands: (Brand | "All")[] = ["All", "Man Matters", "Be Bodywise", "Little Joys"];
  const formats: (AdFormat | "All")[] = ["All", "Video", "Static", "Carousel"];
  const themes: (MessagingTheme | "All")[] = ["All", "Science-Based", "Influencer-Led", "UGC", "Discount/Offer", "Testimonial", "Lifestyle"];
  const recencies: RecencyFilter[] = ["All", "New (< 7 days)", "Active", "Top Performers (30+ days)"];

  const hasFilters = selectedBrand !== "All" || selectedFormat !== "All" || selectedTheme !== "All" || selectedRecency !== "All";

  const clearAll = () => {
    setSelectedBrand("All");
    setSelectedFormat("All");
    setSelectedTheme("All");
    setSelectedRecency("All");
  };

  const Chip = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`filter-chip ${active ? 'filter-chip-active' : 'filter-chip-inactive'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Filters</h3>
          {hasFilters && (
            <button onClick={clearAll} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <X className="h-3 w-3" /> Clear all
            </button>
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>

      {expanded && (
        <div className="space-y-4">
          <div>
            <p className="section-title mb-2">Brand</p>
            <div className="flex flex-wrap gap-2">
              {brands.map(b => <Chip key={b} label={b} active={selectedBrand === b} onClick={() => setSelectedBrand(b)} />)}
            </div>
          </div>
          <div>
            <p className="section-title mb-2">Format</p>
            <div className="flex flex-wrap gap-2">
              {formats.map(f => <Chip key={f} label={f} active={selectedFormat === f} onClick={() => setSelectedFormat(f)} />)}
            </div>
          </div>
          <div>
            <p className="section-title mb-2">Messaging Theme</p>
            <div className="flex flex-wrap gap-2">
              {themes.map(t => <Chip key={t} label={t} active={selectedTheme === t} onClick={() => setSelectedTheme(t)} />)}
            </div>
          </div>
          <div>
            <p className="section-title mb-2">Recency</p>
            <div className="flex flex-wrap gap-2">
              {recencies.map(r => <Chip key={r} label={r} active={selectedRecency === r} onClick={() => setSelectedRecency(r)} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
