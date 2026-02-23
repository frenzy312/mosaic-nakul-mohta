import { adLifespanData } from "@/data/mockData";
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell, Label, LabelList } from "recharts";

const brandColorMap: Record<string, string> = {
  "Man Matters": "hsl(152, 55%, 38%)",
  "Be Bodywise": "hsl(210, 80%, 52%)",
  "Little Joys": "hsl(38, 92%, 50%)",
};

const AdLifespanChart = () => {
  const data = adLifespanData.map((d) => ({
    x: d.totalAds,
    y: d.avgLifespan,
    z: d.topPerformers * 100,
    name: d.competitor,
    brand: d.parentBrand,
    longest: d.longestAd,
  }));

  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Ad Lifespan Bubble Chart — All 10 Competitors</h3>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            X: Total Ads · Y: Avg. Lifespan (days) · Size: Top Performers
          </p>
        </div>
        <div className="flex items-center gap-3">
          {Object.entries(brandColorMap).map(([brand, color]) => (
            <div key={brand} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[10px] text-muted-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 30, left: 20 }}>
          <XAxis
            type="number"
            dataKey="x"
            name="Total Ads"
            tick={{ fontSize: 11, fill: 'hsl(160, 5%, 45%)' }}
            axisLine={{ stroke: 'hsl(150, 10%, 90%)' }}
            tickLine={false}
            label={{ value: 'Total Ads', position: 'bottom', offset: 10, style: { fontSize: 11, fill: 'hsl(160, 5%, 45%)' } }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Avg Lifespan"
            tick={{ fontSize: 11, fill: 'hsl(160, 5%, 45%)' }}
            axisLine={{ stroke: 'hsl(150, 10%, 90%)' }}
            tickLine={false}
            label={{ value: 'Avg Days Active', angle: -90, position: 'insideLeft', offset: 5, style: { fontSize: 11, fill: 'hsl(160, 5%, 45%)' } }}
          />
          <ZAxis type="number" dataKey="z" range={[300, 1500]} />
          <Tooltip
            content={({ payload }) => {
              if (!payload?.[0]) return null;
              const d = payload[0].payload;
              return (
                <div className="glass-panel p-3 text-xs">
                  <p className="font-semibold text-foreground">{d.name}</p>
                  <p className="text-muted-foreground">Parent: {d.brand}</p>
                  <div className="mt-1.5 space-y-0.5 font-mono">
                    <p>{d.x} total ads</p>
                    <p>{d.y}d avg lifespan</p>
                    <p>{d.longest}d longest ad</p>
                  </div>
                </div>
              );
            }}
          />
          <Scatter data={data}>
            {data.map((entry, index) => (
              <Cell key={index} fill={brandColorMap[entry.brand]} fillOpacity={0.75} stroke={brandColorMap[entry.brand]} strokeWidth={1.5} />
            ))}
            <LabelList dataKey="name" position="top" style={{ fontSize: 9, fill: 'hsl(160, 5%, 40%)' }} offset={8} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdLifespanChart;
