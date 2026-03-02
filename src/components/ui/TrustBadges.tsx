import { Shield, Zap, Check, Lock } from "lucide-react";

const BADGES = [
  {
    icon: Shield,
    text: "Datenschutz: Bild verlässt nie deinen Browser",
  },
  {
    icon: Zap,
    text: "KI-Technologie",
  },
  {
    icon: Check,
    text: "Kostenlos",
  },
  {
    icon: Lock,
    text: "Kein Konto nötig",
  },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6 md:gap-6">
      {BADGES.map((badge) => (
        <div
          key={badge.text}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
        >
          <badge.icon className="h-4 w-4 text-emerald-500" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
