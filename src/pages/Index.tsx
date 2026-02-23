import { useState, useMemo } from "react";
import type { Brand, AdFormat, MessagingTheme, RecencyFilter } from "@/data/mockData";
import { competitors as allCompetitors, competitorAds } from "@/data/mockData";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsOverview from "@/components/dashboard/StatsOverview";
import FilterBar from "@/components/dashboard/FilterBar";
import CompetitorTable from "@/components/dashboard/CompetitorTable";
import AdCardGrid from "@/components/dashboard/AdCardGrid";
import AIInsights from "@/components/dashboard/AIInsights";
import GapDetection from "@/components/dashboard/GapDetection";
import WhiteSpaceTool from "@/components/dashboard/WhiteSpaceTool";
import AdLifespanChart from "@/components/dashboard/AdLifespanChart";
import WeeklyBrief from "@/components/dashboard/WeeklyBrief";

const Index = () => {
  const [briefOpen, setBriefOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | "All">("All");
  const [selectedFormat, setSelectedFormat] = useState<AdFormat | "All">("All");
  const [selectedTheme, setSelectedTheme] = useState<MessagingTheme | "All">("All");
  const [selectedRecency, setSelectedRecency] = useState<RecencyFilter>("All");

  const filteredCompetitors = useMemo(() => {
    return allCompetitors.filter(c => {
      if (selectedBrand !== "All" && c.parentBrand !== selectedBrand) return false;
      if (selectedFormat !== "All" && c.dominantFormat !== selectedFormat) return false;
      if (selectedTheme !== "All" && c.dominantTheme !== selectedTheme) return false;
      return true;
    });
  }, [selectedBrand, selectedFormat, selectedTheme]);

  const filteredAds = useMemo(() => {
    return competitorAds.filter(ad => {
      if (selectedBrand !== "All" && ad.parentBrand !== selectedBrand) return false;
      if (selectedFormat !== "All" && ad.format !== selectedFormat) return false;
      if (selectedTheme !== "All" && ad.messagingTheme !== selectedTheme) return false;
      if (selectedRecency === "New (< 7 days)" && ad.daysActive >= 7) return false;
      if (selectedRecency === "Top Performers (30+ days)" && !ad.isTopPerformer) return false;
      if (selectedRecency === "Active" && ad.daysActive > 60) return false;
      return true;
    });
  }, [selectedBrand, selectedFormat, selectedTheme, selectedRecency]);

  const displayCompetitors = useMemo(() => {
    if (selectedRecency === "All") return filteredCompetitors;
    const competitorNames = new Set(filteredAds.map(a => a.competitor));
    return filteredCompetitors.filter(c => competitorNames.has(c.name));
  }, [filteredCompetitors, filteredAds, selectedRecency]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <DashboardHeader onToggleBrief={() => setBriefOpen(!briefOpen)} briefOpen={briefOpen} />

        {/* Weekly Brief - shown inline when toggled on */}
        <WeeklyBrief isOpen={briefOpen} />

        <StatsOverview />
        <FilterBar
          selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand}
          selectedFormat={selectedFormat} setSelectedFormat={setSelectedFormat}
          selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}
          selectedRecency={selectedRecency} setSelectedRecency={setSelectedRecency}
        />

        {/* Layout handled below */}

        {/* Competitor Table left + AI Insights stack right */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <CompetitorTable competitors={displayCompetitors} />
          </div>
          <div className="space-y-6">
            <AIInsights />
            <GapDetection />
            <WhiteSpaceTool />
          </div>
        </div>

        {/* Ad Cards */}
        <AdCardGrid ads={filteredAds} />

        {/* Ad Lifespan Chart - full width at bottom */}
        <AdLifespanChart />
      </div>
    </div>
  );
};

export default Index;
