import { X, FileText } from "lucide-react";
import { weeklyBriefPoints } from "@/data/mockData";

interface WeeklyBriefProps {
  isOpen: boolean;
  onClose: () => void;
}

const WeeklyBrief = ({ isOpen, onClose }: WeeklyBriefProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-panel max-w-2xl w-full p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Weekly Intelligence Brief</h2>
              <p className="text-xs text-muted-foreground">Marketing Manager Mode · Week of Feb 17–23, 2026</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-secondary transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="space-y-4">
          {weeklyBriefPoints.map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5">
                <span className="text-[10px] font-bold text-primary">{i + 1}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <p className="text-[11px] text-muted-foreground">
            Generated from analysis of {10} competitors across {3} brand segments.
            Data sourced from Meta Ad Library. AI-powered trend detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBrief;
