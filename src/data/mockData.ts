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
  engagement: string;
  imageUrl: string;
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
  // --- MAN MATTERS SEGMENT ---
  { name: "Mars by GHC", parentBrand: "Man Matters", totalAds: 58, activeAds: 42, topPerformers: 12, dominantFormat: "Video", dominantTheme: "Science-Based", trendDirection: "up", adSpendTrend: "+18%" },
  { name: "Beardo", parentBrand: "Man Matters", totalAds: 94, activeAds: 71, topPerformers: 28, dominantFormat: "Video", dominantTheme: "Influencer-Led", trendDirection: "up", adSpendTrend: "+45%" },
  { name: "Bombay Shaving Co", parentBrand: "Man Matters", totalAds: 45, activeAds: 32, topPerformers: 9, dominantFormat: "Static", dominantTheme: "Lifestyle", trendDirection: "stable", adSpendTrend: "+8%" },
  // --- BE BODYWISE SEGMENT ---
  { name: "Minimalist", parentBrand: "Be Bodywise", totalAds: 110, activeAds: 88, topPerformers: 32, dominantFormat: "Carousel", dominantTheme: "Science-Based", trendDirection: "up", adSpendTrend: "+52%" },
  { name: "Mamaearth", parentBrand: "Be Bodywise", totalAds: 145, activeAds: 102, topPerformers: 41, dominantFormat: "Video", dominantTheme: "UGC", trendDirection: "stable", adSpendTrend: "+16%" },
  { name: "Pilgrim", parentBrand: "Be Bodywise", totalAds: 78, activeAds: 56, topPerformers: 18, dominantFormat: "Video", dominantTheme: "Influencer-Led", trendDirection: "up", adSpendTrend: "+47%" },
  { name: "Bare Anatomy", parentBrand: "Be Bodywise", totalAds: 64, activeAds: 48, topPerformers: 14, dominantFormat: "Static", dominantTheme: "Science-Based", trendDirection: "stable", adSpendTrend: "+12%" },
  // --- LITTLE JOYS SEGMENT ---
  { name: "Slurrp Farm", parentBrand: "Little Joys", totalAds: 75, activeAds: 52, topPerformers: 19, dominantFormat: "Video", dominantTheme: "Lifestyle", trendDirection: "up", adSpendTrend: "+30%" },
  { name: "Troovy", parentBrand: "Little Joys", totalAds: 42, activeAds: 36, topPerformers: 11, dominantFormat: "Video", dominantTheme: "UGC", trendDirection: "up", adSpendTrend: "+50%" },
  { name: "Gritzo", parentBrand: "Little Joys", totalAds: 38, activeAds: 22, topPerformers: 7, dominantFormat: "Video", dominantTheme: "Influencer-Led", trendDirection: "stable", adSpendTrend: "+5%" },
];

// Image URLs for ad thumbnails (using placeholder images with brand-relevant colors)
const adImages: Record<string, string> = {
  "Mars by GHC": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
  "Beardo": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=300&fit=crop",
  "Bombay Shaving Co": "https://images.unsplash.com/photo-1585747860036-4cb2e1e8b4e1?w=400&h=300&fit=crop",
  "Minimalist": "https://images.unsplash.com/photo-1570194065650-d99fb4a38c0a?w=400&h=300&fit=crop",
  "Mamaearth": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
  "Pilgrim": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop",
  "Bare Anatomy": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
  "Slurrp Farm": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop",
  "Troovy": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop",
  "Gritzo": "https://images.unsplash.com/photo-1505576399279-0e06b7f3b30b?w=400&h=300&fit=crop",
};

export const competitorAds: CompetitorAd[] = [
  // Mars by GHC
  { id: "ad-1", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Video", messagingTheme: "Science-Based", headline: "Clinically Proven Hair Growth", adCopy: "95% of users saw visible results in 3 months. Doctor-formulated solutions for hair loss.", startDate: "2025-12-15", daysActive: 70, isTopPerformer: true, platform: "Facebook", engagement: "12.4K", imageUrl: adImages["Mars by GHC"] },
  { id: "ad-2", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Static", messagingTheme: "Discount/Offer", headline: "Flat 40% Off - New Year Sale", adCopy: "Start your wellness journey. Use code NEWYEAR40.", startDate: "2026-01-20", daysActive: 34, isTopPerformer: true, platform: "Instagram", engagement: "8.2K", imageUrl: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=300&fit=crop" },
  { id: "ad-3", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Carousel", messagingTheme: "Testimonial", headline: "Real Results, Real Men", adCopy: "See how 10,000+ men transformed their confidence with our products.", startDate: "2026-02-01", daysActive: 22, isTopPerformer: false, platform: "Facebook", engagement: "5.7K", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { id: "ad-24", competitor: "Mars by GHC", parentBrand: "Man Matters", format: "Video", messagingTheme: "Science-Based", headline: "Dermatologist Explains DHT Blockers", adCopy: "Understanding the science behind hair retention. Our formulations target root causes.", startDate: "2026-02-10", daysActive: 13, isTopPerformer: false, platform: "YouTube", engagement: "6.8K", imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" },

  // Beardo
  { id: "ad-6", competitor: "Beardo", parentBrand: "Man Matters", format: "Video", messagingTheme: "Influencer-Led", headline: "Ranveer's Top Picks for 2026", adCopy: "Celebrity-endorsed grooming products that actually work.", startDate: "2025-12-20", daysActive: 65, isTopPerformer: true, platform: "Instagram", engagement: "28.3K", imageUrl: adImages["Beardo"] },
  { id: "ad-7", competitor: "Beardo", parentBrand: "Man Matters", format: "Video", messagingTheme: "Lifestyle", headline: "Beard Goals: The Ultimate Guide", adCopy: "Transform your beard game with our complete grooming range.", startDate: "2026-01-15", daysActive: 39, isTopPerformer: true, platform: "Facebook", engagement: "11.5K", imageUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=400&h=300&fit=crop" },
  { id: "ad-25", competitor: "Beardo", parentBrand: "Man Matters", format: "Video", messagingTheme: "Influencer-Led", headline: "Beardo x Grooming Drop Q1", adCopy: "The biggest grooming launch of 2026. Limited edition products curated by top creators.", startDate: "2026-01-28", daysActive: 26, isTopPerformer: true, platform: "Instagram", engagement: "32.5K", imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop" },
  { id: "ad-26", competitor: "Beardo", parentBrand: "Man Matters", format: "Carousel", messagingTheme: "UGC", headline: "Real Men, Real Beards", adCopy: "Community submissions: show us your Beardo transformation.", startDate: "2026-02-12", daysActive: 11, isTopPerformer: false, platform: "Facebook", engagement: "7.2K", imageUrl: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=400&h=300&fit=crop" },

  // Bombay Shaving Co
  { id: "ad-4", competitor: "Bombay Shaving Co", parentBrand: "Man Matters", format: "Video", messagingTheme: "Lifestyle", headline: "The Modern Man's Grooming Kit", adCopy: "Upgrade your daily routine with premium grooming essentials.", startDate: "2026-01-05", daysActive: 49, isTopPerformer: true, platform: "Instagram", engagement: "15.8K", imageUrl: adImages["Bombay Shaving Co"] },
  { id: "ad-5", competitor: "Bombay Shaving Co", parentBrand: "Man Matters", format: "Static", messagingTheme: "UGC", headline: "My Morning Routine ft. BSC", adCopy: "User-generated content showcasing real morning routines.", startDate: "2026-02-10", daysActive: 13, isTopPerformer: false, platform: "Facebook", engagement: "3.2K", imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop" },

  // Minimalist
  { id: "ad-8", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "Science-Based", headline: "Ingredient Transparency Report", adCopy: "Every ingredient. Every percentage. No secrets. Just science.", startDate: "2025-11-28", daysActive: 87, isTopPerformer: true, platform: "Instagram", engagement: "22.6K", imageUrl: adImages["Minimalist"] },
  { id: "ad-9", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Science-Based", headline: "How Niacinamide Actually Works", adCopy: "A dermatologist explains the science behind our best-selling serum.", startDate: "2026-01-08", daysActive: 46, isTopPerformer: true, platform: "YouTube", engagement: "18.9K", imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop" },
  { id: "ad-10", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Static", messagingTheme: "Discount/Offer", headline: "Buy 2 Get 1 Free", adCopy: "Stock up on your skincare essentials. Limited time offer.", startDate: "2026-02-15", daysActive: 8, isTopPerformer: false, platform: "Facebook", engagement: "6.4K", imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop" },
  { id: "ad-27", competitor: "Minimalist", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "Science-Based", headline: "HUL-Backed R&D Breakthroughs", adCopy: "Leveraging cross-brand research to deliver proven formulations at scale.", startDate: "2026-02-05", daysActive: 18, isTopPerformer: true, platform: "Instagram", engagement: "20.1K", imageUrl: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=400&h=300&fit=crop" },

  // Mamaearth
  { id: "ad-13", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "UGC", headline: "Mom-Approved Skincare", adCopy: "Hear from real moms why they trust Mamaearth for their family.", startDate: "2025-12-01", daysActive: 84, isTopPerformer: true, platform: "Facebook", engagement: "35.2K", imageUrl: adImages["Mamaearth"] },
  { id: "ad-14", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Influencer-Led", headline: "Shilpa Shetty's Skincare Secrets", adCopy: "Discover the products behind her ageless glow.", startDate: "2026-01-25", daysActive: 29, isTopPerformer: false, platform: "Instagram", engagement: "20.1K", imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop" },
  { id: "ad-15", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "UGC", headline: "Community Favorites 2026", adCopy: "The top 5 products our community can't stop raving about.", startDate: "2026-02-18", daysActive: 5, isTopPerformer: false, platform: "Instagram", engagement: "2.8K", imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop" },
  { id: "ad-28", competitor: "Mamaearth", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Lifestyle", headline: "Vernacular Beauty – हिंदी में", adCopy: "Regional language campaign targeting Tier 2 & 3 cities with localized content.", startDate: "2026-02-08", daysActive: 15, isTopPerformer: true, platform: "Facebook", engagement: "14.8K", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop" },

  // Pilgrim
  { id: "ad-11", competitor: "Pilgrim", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Influencer-Led", headline: "Rashmika Mandanna's Pilgrim Picks", adCopy: "Celebrity-endorsed K-beauty inspired skincare for Indian skin.", startDate: "2026-01-12", daysActive: 42, isTopPerformer: true, platform: "Instagram", engagement: "24.3K", imageUrl: adImages["Pilgrim"] },
  { id: "ad-12", competitor: "Pilgrim", parentBrand: "Be Bodywise", format: "Carousel", messagingTheme: "Lifestyle", headline: "K-Beauty Meets India", adCopy: "Korean skincare secrets, formulated for Indian skin.", startDate: "2026-02-05", daysActive: 18, isTopPerformer: false, platform: "Facebook", engagement: "4.5K", imageUrl: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=300&fit=crop" },
  { id: "ad-29", competitor: "Pilgrim", parentBrand: "Be Bodywise", format: "Video", messagingTheme: "Influencer-Led", headline: "Pilgrim Offline – Now in 25K+ Stores", adCopy: "From digital-first to omnichannel. Find Pilgrim at a store near you.", startDate: "2026-02-01", daysActive: 22, isTopPerformer: true, platform: "YouTube", engagement: "16.7K", imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop" },

  // Bare Anatomy
  { id: "ad-16", competitor: "Bare Anatomy", parentBrand: "Be Bodywise", format: "Static", messagingTheme: "Science-Based", headline: "Personalized Hair Care, Decoded", adCopy: "Take our quiz. Get a formula made just for your hair type.", startDate: "2026-01-03", daysActive: 51, isTopPerformer: true, platform: "Instagram", engagement: "7.3K", imageUrl: adImages["Bare Anatomy"] },
  { id: "ad-30", competitor: "Bare Anatomy", parentBrand: "Be Bodywise", format: "Static", messagingTheme: "Science-Based", headline: "Profitability Through Precision", adCopy: "High-ROAS catalog ads driving Innovist to FY26 profitability.", startDate: "2026-01-18", daysActive: 36, isTopPerformer: true, platform: "Facebook", engagement: "5.4K", imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop" },

  // Slurrp Farm
  { id: "ad-21", competitor: "Slurrp Farm", parentBrand: "Little Joys", format: "Video", messagingTheme: "Lifestyle", headline: "Healthy Snacking, Reimagined", adCopy: "From millet pancakes to ragi cookies — snacks kids love, parents trust.", startDate: "2025-12-28", daysActive: 57, isTopPerformer: true, platform: "Instagram", engagement: "11.8K", imageUrl: adImages["Slurrp Farm"] },
  { id: "ad-22", competitor: "Slurrp Farm", parentBrand: "Little Joys", format: "Carousel", messagingTheme: "UGC", headline: "Little Chefs in Action", adCopy: "Kids cooking with Slurrp Farm products. Pure joy in every bite.", startDate: "2026-01-28", daysActive: 26, isTopPerformer: false, platform: "Facebook", engagement: "3.8K", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop" },
  { id: "ad-23", competitor: "Slurrp Farm", parentBrand: "Little Joys", format: "Static", messagingTheme: "Discount/Offer", headline: "Family Pack @ ₹999", adCopy: "Get our best-selling variety pack at a special price. Limited stock!", startDate: "2026-02-20", daysActive: 3, isTopPerformer: false, platform: "Facebook", engagement: "1.9K", imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop" },

  // Troovy
  { id: "ad-17", competitor: "Troovy", parentBrand: "Little Joys", format: "Video", messagingTheme: "UGC", headline: "Kids Actually Love It!", adCopy: "Watch real kids trying Troovy for the first time. No scripts, just smiles.", startDate: "2026-01-18", daysActive: 36, isTopPerformer: true, platform: "Instagram", engagement: "6.9K", imageUrl: adImages["Troovy"] },
  { id: "ad-18", competitor: "Troovy", parentBrand: "Little Joys", format: "Static", messagingTheme: "Science-Based", headline: "Pediatrician Recommended", adCopy: "Backed by 50+ pediatricians across India.", startDate: "2026-02-12", daysActive: 11, isTopPerformer: false, platform: "Facebook", engagement: "2.1K", imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop" },
  { id: "ad-31", competitor: "Troovy", parentBrand: "Little Joys", format: "Video", messagingTheme: "UGC", headline: "No-Refined-Sugar Promise", adCopy: "Clean label nutrition that kids actually enjoy. Growing fast this quarter.", startDate: "2026-02-01", daysActive: 22, isTopPerformer: true, platform: "Instagram", engagement: "9.5K", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },

  // Gritzo
  { id: "ad-19", competitor: "Gritzo", parentBrand: "Little Joys", format: "Video", messagingTheme: "Influencer-Led", headline: "Celebrity Mom Endorsements", adCopy: "Top parenting influencers share why Gritzo is their go-to nutrition brand.", startDate: "2025-12-10", daysActive: 75, isTopPerformer: true, platform: "Facebook", engagement: "14.2K", imageUrl: adImages["Gritzo"] },
  { id: "ad-20", competitor: "Gritzo", parentBrand: "Little Joys", format: "Video", messagingTheme: "Lifestyle", headline: "Super Kids, Super Nutrition", adCopy: "Fuel your child's active lifestyle with Gritzo's protein shakes.", startDate: "2026-02-01", daysActive: 22, isTopPerformer: false, platform: "Instagram", engagement: "5.5K", imageUrl: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?w=400&h=300&fit=crop" },
];

export const aiInsights = [
  { id: 1, type: "trend" as const, title: "The 'House of Brands' Advantage", description: "Marico (Beardo) and HUL (Minimalist) are leveraging cross-brand data to lower CAC by 15% compared to standalone brands.", severity: "high" as const },
  { id: 2, type: "shift" as const, title: "Regional Language Dominance", description: "Mamaearth and Bombay Shaving Co have increased vernacular ad creatives by 40%, targeting Tier 2 & 3 markets.", severity: "medium" as const },
  { id: 3, type: "trend" as const, title: "The 'Clean Label' War", description: "Troovy and Slurrp Farm are in a high-spend battle for 'No-Refined-Sugar' keywords, increasing CPC by 22% in kids' nutrition.", severity: "high" as const },
  { id: 4, type: "shift" as const, title: "Innovist Profitability Pivot", description: "Bare Anatomy (Innovist) reached profitability in FY26 by doubling down on high-ROAS static catalog ads.", severity: "medium" as const },
  { id: 5, type: "trend" as const, title: "Pilgrim's Omnichannel Push", description: "Pilgrim's 47% growth is driven by a shift from digital-only to offline retail expansion across 25,000+ pin codes.", severity: "high" as const },
];

export const gapDetections = [
  { id: 1, opportunity: "Interactive Polls/Quizzes", description: "No competitor is using interactive ad formats like polls or quizzes. High engagement potential for skincare diagnostics.", impact: "high" as const },
  { id: 2, opportunity: "Before & After Comparison Ads", description: "None of the competitors are running structured before/after transformation campaigns with real user data — a proven high-conversion format in wellness.", impact: "high" as const },
  { id: 3, opportunity: "Podcast-Style Audio Ads", description: "Zero competitors leveraging audio ad placements on Spotify/JioSaavn despite target demo overlap.", impact: "medium" as const },
  { id: 4, opportunity: "Behind-the-Scenes Content", description: "No competitor showing manufacturing/lab processes. Trust-building opportunity for science-based brands.", impact: "medium" as const },
  { id: 5, opportunity: "Regional Language Ads Beyond Hindi", description: "Only Mamaearth & BSC run vernacular ads in Hindi. Tamil, Telugu, Bengali markets remain completely untapped.", impact: "high" as const },
];

export const whiteSpaceAnalysis = [
  { id: 1, category: "Man Matters vs Competitors", gaps: ["Beardo's influencer-led campaigns are generating 2-3x higher engagement than Man Matters", "Missing UGC strategy while Beardo is now investing in community content", "No vernacular ad strategy unlike BSC's regional language push"], opportunities: ["Before/after transformation campaigns — no competitor doing this well in men's grooming", "Science-based counter-positioning against Beardo's influencer dominance"] },
  { id: 2, category: "Be Bodywise vs Competitors", gaps: ["Minimalist's +52% growth backed by HUL cross-brand data creates CAC advantage", "Pilgrim's omnichannel expansion to 25K+ stores shifts competitive landscape", "No match for Mamaearth's vernacular content targeting Tier 2/3"], opportunities: ["Community-driven content strategy to counter UGC leaders", "Leverage Bare Anatomy's profitability playbook for high-ROAS campaigns"] },
  { id: 3, category: "Little Joys vs Competitors", gaps: ["Troovy's aggressive growth threatens share in kids' nutrition", "Slurrp Farm's lifestyle content with +30% growth outperforms segment", "Clean label keyword war driving up CPC by 22%"], opportunities: ["School partnership content untapped by all competitors", "Nutritionist-backed educational series to differentiate from UGC-heavy rivals"] },
];

export const weeklyBriefPoints = [
  "📊 Minimalist (now HUL-owned) has scaled to 110 total ads with +52% growth. Their science-based carousel strategy remains the longest-running format across all competitors.",
  "🌐 Regional language ads are the new battleground — Mamaearth and BSC have increased vernacular creatives by 40%, targeting Tier 2 & 3 markets. Other brands are missing this entirely.",
  "⚔️ Clean Label War: Troovy (+50%) and Slurrp Farm (+30%) are in an aggressive 'No-Refined-Sugar' keyword battle, pushing CPC up 22% in kids' nutrition.",
  "🏪 Pilgrim's omnichannel expansion to 25,000+ pin codes is driving +47% growth. First major D2C-to-offline pivot in the Be Bodywise competitive set.",
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
