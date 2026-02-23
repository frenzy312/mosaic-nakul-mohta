export type Brand = "Man Matters" | "Be Bodywise" | "Little Joys";

export type CompetitorBrand =
  | "Mars by GHC" | "Bombay Shaving Co" | "Beardo"
  | "Minimalist" | "Pilgrim" | "Mamaearth" | "Bare Anatomy"
  | "Troovy" | "Gritzo" | "Slurrp Farm";

export type AdFormat = "Video" | "Static" | "Carousel";
export type MessagingTheme = "Science-Based" | "Influencer-Led" | "UGC" | "Discount/Offer" | "Testimonial" | "Lifestyle";
export type RecencyFilter = "All" | "New (< 7 days)" | "Active" | "Top Performers (30+ days)";

export interface CompetitorAd {
  id: string;
  competitor: CompetitorBrand;
  parentBrand: Brand;
  format: AdFormat;
  messagingTheme: MessagingTheme;
  headline: string;
  adCopy: string;
  startDate: string;
  daysActive: number;
  isTopPerformer: boolean;
  platform: string;
  estimatedSpend: string;
  engagement: string;
}

export interface Competitor {
  name: CompetitorBrand;
  parentBrand: Brand;
  totalAds: number;
  activeAds: number;
  topPerformers: number;
  dominantFormat: AdFormat;
  dominantTheme: MessagingTheme;
  trendDirection: "up" | "down" | "stable";
  adSpendTrend: string;
}

export const competitors: Competitor[] = [
  { name: "Mars by GHC", parentBrand: "Man Matters", totalAds: 47, activeAds: 32, topPerformers: 8, dominantFormat: "Video", dominantTheme: "Science-Based", trendDirection: "up", adSpendTrend: "+22%" },
  { name: "Bombay Shaving Co", parentBrand: "Man Matters", totalAds: 38, activeAds: 24, topPerformers: 5, dominantFormat: "Static", dominantTheme: "Lifestyle", trendDirection: "stable", adSpendTrend: "+3%" },
  { name: "Beardo", parentBrand: "Man Matters", totalAds: 55, activeAds: 41, topPerformers: 12, dominantFormat: "Video", dominantTheme: "Influencer-Led", trendDirection: "up", adSpendTrend: "+35%" },
  { name: "Minimalist", parentBrand: "Be Bodywise", totalAds: 63, activeAds: 48, topPerformers: 15, dominantFormat: "Carousel", dominantTheme: "Science-Based", trendDirection: "up", adSpendTrend: "+41%" },
  { name: "Pilgrim", parentBrand: "Be Bodywise", totalAds: 42, activeAds: 29, topPerformers: 7, dominantFormat: "Video", dominantTheme: "UGC", trendDirection: "up", adSpendTrend: "+18%" },
  { name: "Mamaearth", parentBrand: "Be Bodywise", totalAds: 71, activeAds: 52, topPerformers: 18, dominantFormat: "Video", dominantTheme: "Testimonial", trendDirection: "down", adSpendTrend: "-8%" },
  { name: "Bare Anatomy", parentBrand: "Be Bodywise", totalAds: 28, activeAds: 19, topPerformers: 4, dominantFormat: "Static", dominantTheme: "Science-Based", trendDirection: "stable", adSpendTrend: "+5%" },
  { name: "Troovy", parentBrand: "Little Joys", totalAds: 22, activeAds: 16, topPerformers: 3, dominantFormat: "Video", dominantTheme: "UGC", trendDirection: "up", adSpendTrend: "+28%" },
  { name: "Gritzo", parentBrand: "Little Joys", totalAds: 35, activeAds: 25, topPerformers: 6, dominantFormat: "Carousel", dominantTheme: "Testimonial", trendDirection: "stable", adSpendTrend: "+7%" },
  { name: "Slurrp Farm", parentBrand: "Little Joys", totalAds: 44, activeAds: 33, topPerformers: 9, dominantFormat: "Video", dominantTheme: "Lifestyle", trendDirection: "up", adSpendTrend: "+19%" },
];

export const competitorAds: CompetitorAd[] = [
  { id: "ad-1", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Video", messagingTheme: "Science-Based", headline: "Clinically Proven Hair Growth", adCopy: "95% of users saw visible results in 3 months. Doctor-formulated solutions for hair loss.", startDate: "2025-12-15", daysActive: 70, isTopPerformer: true, platform: "Facebook", estimatedSpend: "₹2.5L", engagement: "12.4K" },
  { id: "ad-2", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Static", messagingTheme: "Discount/Offer", headline: "Flat 40% Off - New Year Sale", adCopy: "Start your wellness journey. Use code NEWYEAR40.", startDate: "2026-01-20", daysActive: 34, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹1.8L", engagement: "8.2K" },
  { id: "ad-3", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Carousel", messagingTheme: "Testimonial", headline: "Real Results, Real Men", adCopy: "See how 10,000+ men transformed their confidence with our products.", startDate: "2026-02-01", daysActive: 22, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹1.2L", engagement: "5.7K" },
  { id: "ad-4", competitor: "Bombay Shaving Co", parentBrand: "Man Matters", format: "Video", messagingTheme: "Lifestyle", headline: "The Modern Man's Grooming Kit", adCopy: "Upgrade your daily routine with premium grooming essentials.", startDate: "2026-01-05", daysActive: 49, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹3.1L", engagement: "15.8K" },
  { id: "ad-5", competitor: "Bombay Shaving Co", parentBrand: "Man Matters", format: "Static", messagingTheme: "UGC", headline: "My Morning Routine ft. BSC", adCopy: "User-generated content showcasing real morning routines.", startDate: "2026-02-10", daysActive: 13, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹0.8L", engagement: "3.2K" },
  { id: "ad-6", competitor: "Beardo", parentBrand: "Man Matters", format: "Video", messagingTheme: "Influencer-Led", headline: "Ranveer's Top Picks for 2026", adCopy: "Celebrity-endorsed grooming products that actually work.", startDate: "2025-12-20", daysActive: 65, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹5.2L", engagement: "28.3K" },
  { id: "ad-7", competitor: "Beardo", parentBrand: "Man Matters", format: "Video", messagingTheme: "Lifestyle", headline: "Beard Goals: The Ultimate Guide", adCopy: "Transform your beard game with our complete grooming range.", startDate: "2026-01-15", daysActive: 39, isTopPerformer: true, platform: "Facebook", estimatedSpend: "₹2.8L", engagement: "11.5K" },
  { id: "ad-8", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "Science-Based", headline: "Ingredient Transparency Report", adCopy: "Every ingredient. Every percentage. No secrets. Just science.", startDate: "2025-11-28", daysActive: 87, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹4.1L", engagement: "22.6K" },
  { id: "ad-9", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Science-Based", headline: "How Niacinamide Actually Works", adCopy: "A dermatologist explains the science behind our best-selling serum.", startDate: "2026-01-08", daysActive: 46, isTopPerformer: true, platform: "YouTube", estimatedSpend: "₹3.5L", engagement: "18.9K" },
  { id: "ad-10", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Static", messagingTheme: "Discount/Offer", headline: "Buy 2 Get 1 Free", adCopy: "Stock up on your skincare essentials. Limited time offer.", startDate: "2026-02-15", daysActive: 8, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹1.5L", engagement: "6.4K" },
  { id: "ad-11", competitor: "Pilgrim", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "UGC", headline: "My Pilgrim Journey - Week 4", adCopy: "Real customers sharing their 30-day transformation with Pilgrim products.", startDate: "2026-01-12", daysActive: 42, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹2.2L", engagement: "9.8K" },
  { id: "ad-12", competitor: "Pilgrim", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "Lifestyle", headline: "K-Beauty Meets India", adCopy: "Korean skincare secrets, formulated for Indian skin.", startDate: "2026-02-05", daysActive: 18, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹1.0L", engagement: "4.5K" },
  { id: "ad-13", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Testimonial", headline: "Mom-Approved Skincare", adCopy: "Hear from real moms why they trust Mamaearth for their family.", startDate: "2025-12-01", daysActive: 84, isTopPerformer: true, platform: "Facebook", estimatedSpend: "₹6.3L", engagement: "35.2K" },
  { id: "ad-14", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Influencer-Led", headline: "Shilpa Shetty's Skincare Secrets", adCopy: "Discover the products behind her ageless glow.", startDate: "2026-01-25", daysActive: 29, isTopPerformer: false, platform: "Instagram", estimatedSpend: "₹4.5L", engagement: "20.1K" },
  { id: "ad-15", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "UGC", headline: "Community Favorites 2026", adCopy: "The top 5 products our community can't stop raving about.", startDate: "2026-02-18", daysActive: 5, isTopPerformer: false, platform: "Instagram", estimatedSpend: "₹0.9L", engagement: "2.8K" },
  { id: "ad-16", competitor: "Bare Anatomy", parentBrand: "Be Bodywise", format: "Static", messagingTheme: "Science-Based", headline: "Personalized Hair Care, Decoded", adCopy: "Take our quiz. Get a formula made just for your hair type.", startDate: "2026-01-03", daysActive: 51, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹1.6L", engagement: "7.3K" },
  { id: "ad-17", competitor: "Troovy", parentBrand: "Little Joys", format: "Video", messagingTheme: "UGC", headline: "Kids Actually Love It!", adCopy: "Watch real kids trying Troovy for the first time. No scripts, just smiles.", startDate: "2026-01-18", daysActive: 36, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹1.1L", engagement: "6.9K" },
  { id: "ad-18", competitor: "Troovy", parentBrand: "Little Joys", format: "Static", messagingTheme: "Science-Based", headline: "Pediatrician Recommended", adCopy: "Backed by 50+ pediatricians across India.", startDate: "2026-02-12", daysActive: 11, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹0.6L", engagement: "2.1K" },
  { id: "ad-19", competitor: "Gritzo", parentBrand: "Little Joys", format: "Carousel", messagingTheme: "Testimonial", headline: "Parents Share Their Stories", adCopy: "See how Gritzo helped 50,000+ kids get their daily nutrition.", startDate: "2025-12-10", daysActive: 75, isTopPerformer: true, platform: "Facebook", estimatedSpend: "₹2.9L", engagement: "14.2K" },
  { id: "ad-20", competitor: "Gritzo", parentBrand: "Little Joys", format: "Video", messagingTheme: "Lifestyle", headline: "Super Kids, Super Nutrition", adCopy: "Fuel your child's active lifestyle with Gritzo's protein shakes.", startDate: "2026-02-01", daysActive: 22, isTopPerformer: false, platform: "Instagram", estimatedSpend: "₹1.3L", engagement: "5.5K" },
  { id: "ad-21", competitor: "Slurrp Farm", parentBrand: "Little Joys", format: "Video", messagingTheme: "Lifestyle", headline: "Healthy Snacking, Reimagined", adCopy: "From millet pancakes to ragi cookies — snacks kids love, parents trust.", startDate: "2025-12-28", daysActive: 57, isTopPerformer: true, platform: "Instagram", estimatedSpend: "₹2.4L", engagement: "11.8K" },
  { id: "ad-22", competitor: "Slurrp Farm", parentBrand: "Little Joys", format: "Carousel", messagingTheme: "UGC", headline: "Little Chefs in Action", adCopy: "Kids cooking with Slurrp Farm products. Pure joy in every bite.", startDate: "2026-01-28", daysActive: 26, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹0.7L", engagement: "3.8K" },
  { id: "ad-23", competitor: "Slurrp Farm", parentBrand: "Little Joys", format: "Static", messagingTheme: "Discount/Offer", headline: "Family Pack @ ₹999", adCopy: "Get our best-selling variety pack at a special price. Limited stock!", startDate: "2026-02-20", daysActive: 3, isTopPerformer: false, platform: "Facebook", estimatedSpend: "₹0.5L", engagement: "1.9K" },
];

export const aiInsights = [
  { id: 1, type: "trend" as const, title: "UGC Content Up 30%", description: "Across all competitors, UGC-style ads increased by 30% compared to last month. Pilgrim and Troovy are leading this shift.", severity: "high" as const },
  { id: 2, type: "shift" as const, title: "Minimalist → Full Science Mode", description: "Minimalist has shifted 80% of their budget to science-based messaging, up from 55% last quarter.", severity: "medium" as const },
  { id: 3, type: "trend" as const, title: "Video Dominance Growing", description: "Video format now represents 58% of all competitor ads, up from 45% in Q3 2025. Beardo leads with 72% video.", severity: "high" as const },
  { id: 4, type: "shift" as const, title: "Mamaearth Reducing Spend", description: "Mamaearth's estimated ad spend dropped 8% MoM. Shifting from mass reach to targeted influencer campaigns.", severity: "low" as const },
  { id: 5, type: "trend" as const, title: "Carousel Comeback", description: "Carousel ads are seeing a 15% engagement boost. Minimalist and Gritzo using them for educational content.", severity: "medium" as const },
];

export const gapDetections = [
  { id: 1, opportunity: "Interactive Polls/Quizzes", description: "No competitor is using interactive ad formats like polls or quizzes. High engagement potential for skincare diagnostics.", impact: "high" as const },
  { id: 2, opportunity: "AR Try-On Ads", description: "None of the men's grooming competitors use AR filters. Beardo and BSC could be disrupted with virtual try-ons.", impact: "high" as const },
  { id: 3, opportunity: "Podcast-Style Audio Ads", description: "Zero competitors leveraging audio ad placements on Spotify/JioSaavn despite target demo overlap.", impact: "medium" as const },
  { id: 4, opportunity: "Behind-the-Scenes Content", description: "No competitor showing manufacturing/lab processes. Trust-building opportunity for science-based brands.", impact: "medium" as const },
  { id: 5, opportunity: "Regional Language Ads", description: "Only Mamaearth runs ads in Hindi. Tamil, Telugu, Bengali markets completely untapped by competitors.", impact: "high" as const },
];

export const whiteSpaceAnalysis = [
  { id: 1, category: "Man Matters vs Competitors", gaps: ["No influencer partnerships (Beardo dominates this)", "Missing discount/bundle strategy (BSC runs 3x more offers)", "Zero UGC content (Mars by GHC has 12 UGC ads)"], opportunities: ["First-mover advantage in AR grooming demos", "Educational long-form video content gap"] },
  { id: 2, category: "Be Bodywise vs Competitors", gaps: ["Lower science-based messaging than Minimalist", "No celebrity endorsements (Mamaearth has 4)", "Carousel format underutilized vs Minimalist"], opportunities: ["Community-driven content strategy", "Dermatologist-led video series potential"] },
  { id: 3, category: "Little Joys vs Competitors", gaps: ["Less UGC than Troovy and Slurrp Farm", "Missing parent testimonial content", "No seasonal/festival-based campaigns"], opportunities: ["School partnership content", "Nutritionist-backed educational series"] },
];

export const weeklyBriefPoints = [
  "🔥 Beardo ramped up influencer spend by 35% this week — now running 12 new celebrity-backed video ads targeting metro cities.",
  "📊 Minimalist continues to double down on science-based carousel ads. Their ingredient transparency campaign has been live for 87 days — longest running ad across all competitors.",
  "⚠️ Mamaearth is quietly pulling back on broad reach campaigns. Estimated spend down 8% MoM, suggesting a strategic pivot toward micro-influencers.",
  "🚀 Gap Alert: No competitor in the Little Joys segment is running AR/interactive ad formats. First-mover opportunity for engagement-driven campaigns.",
  "📈 Overall market trend: Video ads now represent 58% of all competitor creatives (up from 45% in Q3). UGC-style content specifically up 30% across the board.",
];

export const adLifespanData = competitors.map(c => {
  const ads = competitorAds.filter(a => a.competitor === c.name);
  return {
    competitor: c.name,
    parentBrand: c.parentBrand,
    avgLifespan: Math.round(ads.reduce((sum, a) => sum + a.daysActive, 0) / (ads.length || 1)),
    totalAds: c.totalAds,
    topPerformers: c.topPerformers,
    longestAd: Math.max(...ads.map(a => a.daysActive), 0),
  };
});

export const brandColors: Record<string, string> = {
  "Man Matters": "hsl(152, 55%, 38%)",
  "Be Bodywise": "hsl(280, 50%, 50%)",
  "Little Joys": "hsl(38, 92%, 50%)",
};

export const parentBrandMap: Record<CompetitorBrand, Brand> = {
  "Mars by GHC": "Man Matters",
  "Bombay Shaving Co": "Man Matters",
  "Beardo": "Man Matters",
  "Minimalist": "Be Bodywise",
  "Pilgrim": "Be Bodywise",
  "Mamaearth": "Be Bodywise",
  "Bare Anatomy": "Be Bodywise",
  "Troovy": "Little Joys",
  "Gritzo": "Little Joys",
  "Slurrp Farm": "Little Joys",
};
