export interface PresetBackground {
  id: string;
  type: "color" | "gradient" | "transparent" | "blur";
  value: string | null;
  label: string;
  thumbnail?: string;
}

export const PRESET_COLORS: PresetBackground[] = [
  { id: "white", type: "color", value: "#FFFFFF", label: "Weiß" },
  { id: "black", type: "color", value: "#000000", label: "Schwarz" },
  { id: "light-gray", type: "color", value: "#F3F4F6", label: "Hellgrau" },
  { id: "dark-gray", type: "color", value: "#374151", label: "Dunkelgrau" },
  { id: "navy", type: "color", value: "#1E3A5F", label: "Marineblau" },
  { id: "blue", type: "color", value: "#3B82F6", label: "Blau" },
  { id: "light-blue", type: "color", value: "#DBEAFE", label: "Hellblau" },
  { id: "green", type: "color", value: "#16A34A", label: "Grün" },
  { id: "light-green", type: "color", value: "#DCFCE7", label: "Hellgrün" },
  { id: "red", type: "color", value: "#DC2626", label: "Rot" },
  { id: "light-red", type: "color", value: "#FEE2E2", label: "Hellrot" },
  { id: "yellow", type: "color", value: "#EAB308", label: "Gelb" },
  { id: "light-yellow", type: "color", value: "#FEF9C3", label: "Hellgelb" },
  { id: "purple", type: "color", value: "#9333EA", label: "Violett" },
  { id: "pink", type: "color", value: "#EC4899", label: "Pink" },
  { id: "orange", type: "color", value: "#F97316", label: "Orange" },
  { id: "teal", type: "color", value: "#14B8A6", label: "Türkis" },
  { id: "brown", type: "color", value: "#78350F", label: "Braun" },
];

export const PRESET_GRADIENTS: PresetBackground[] = [
  {
    id: "sunset",
    type: "gradient",
    value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    label: "Sonnenuntergang",
  },
  {
    id: "ocean",
    type: "gradient",
    value: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    label: "Ozean",
  },
  {
    id: "forest",
    type: "gradient",
    value: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    label: "Wald",
  },
  {
    id: "purple-haze",
    type: "gradient",
    value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    label: "Violett",
  },
  {
    id: "gold",
    type: "gradient",
    value: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    label: "Gold",
  },
  {
    id: "rose",
    type: "gradient",
    value: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
    label: "Rose",
  },
  {
    id: "night",
    type: "gradient",
    value: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)",
    label: "Nacht",
  },
  {
    id: "lavender",
    type: "gradient",
    value: "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)",
    label: "Lavendel",
  },
  {
    id: "peach",
    type: "gradient",
    value: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    label: "Pfirsich",
  },
  {
    id: "mint",
    type: "gradient",
    value: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    label: "Minze",
  },
  {
    id: "fire",
    type: "gradient",
    value: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    label: "Feuer",
  },
  {
    id: "arctic",
    type: "gradient",
    value: "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)",
    label: "Arktis",
  },
];

export const SPECIAL_BACKGROUNDS: PresetBackground[] = [
  {
    id: "transparent",
    type: "transparent",
    value: null,
    label: "Transparent",
  },
  {
    id: "blur-light",
    type: "blur",
    value: "5",
    label: "Leicht unscharf",
  },
  {
    id: "blur-medium",
    type: "blur",
    value: "10",
    label: "Unscharf",
  },
  {
    id: "blur-strong",
    type: "blur",
    value: "20",
    label: "Stark unscharf",
  },
];

export const ALL_PRESET_BACKGROUNDS = [
  ...SPECIAL_BACKGROUNDS,
  ...PRESET_COLORS,
  ...PRESET_GRADIENTS,
];

/**
 * Parse a gradient string to extract colors
 */
export function parseGradientColors(gradient: string): string[] {
  const colors: string[] = [];
  const regex = /#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}|rgb\([^)]+\)|rgba\([^)]+\)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(gradient)) !== null) {
    colors.push(match[0]);
  }
  return colors;
}

/**
 * Get a preset background by ID
 */
export function getPresetBackground(id: string): PresetBackground | undefined {
  return ALL_PRESET_BACKGROUNDS.find((bg) => bg.id === id);
}
