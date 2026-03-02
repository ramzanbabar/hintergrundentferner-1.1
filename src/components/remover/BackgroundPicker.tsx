"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRESET_COLORS, PRESET_GRADIENTS, SPECIAL_BACKGROUNDS } from "@/lib/presetBackgrounds";
import { cn } from "@/lib/utils";
import { Paintbrush, Palette, Image, Sparkles, Blur, Transparency } from "lucide-react";

interface BackgroundPickerProps {
  onSelect: (type: string, value: string | null) => void;
  defaultTab?: string;
  className?: string;
}

export function BackgroundPicker({
  onSelect,
  defaultTab = "transparent",
  className,
}: BackgroundPickerProps) {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [customColor, setCustomColor] = useState("#FFFFFF");
  const [selectedGradient, setSelectedGradient] = useState(PRESET_GRADIENTS[0].id);
  const [blurAmount, setBlurAmount] = useState(10);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onSelect("color", color);
  };

  const handleCustomColorChange = (color: string) => {
    setCustomColor(color);
    setSelectedColor(color);
    onSelect("color", color);
  };

  const handleGradientSelect = (gradientId: string) => {
    setSelectedGradient(gradientId);
    const gradient = PRESET_GRADIENTS.find((g) => g.id === gradientId);
    if (gradient?.value) {
      onSelect("gradient", gradient.value);
    }
  };

  const handleBlurChange = (amount: number) => {
    setBlurAmount(amount);
    onSelect("blur", amount.toString());
  };

  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="transparent" className="flex items-center gap-1">
            <Transparency className="h-4 w-4" />
            <span className="hidden sm:inline">Transparent</span>
          </TabsTrigger>
          <TabsTrigger value="color" className="flex items-center gap-1">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Farbe</span>
          </TabsTrigger>
          <TabsTrigger value="gradient" className="flex items-center gap-1">
            <Paintbrush className="h-4 w-4" />
            <span className="hidden sm:inline">Verlauf</span>
          </TabsTrigger>
          <TabsTrigger value="blur" className="flex items-center gap-1">
            <Blur className="h-4 w-4" />
            <span className="hidden sm:inline">Unscharf</span>
          </TabsTrigger>
        </TabsList>

        {/* Transparent */}
        <TabsContent value="transparent" className="mt-4">
          <button
            onClick={() => onSelect("transparent", null)}
            className="w-full rounded-lg border-2 border-dashed border-gray-300 p-8 hover:border-indigo-500 dark:border-gray-600"
          >
            <div
              className="mx-auto h-32 w-32 rounded-lg"
              style={{
                backgroundImage:
                  "repeating-conic-gradient(#808080 0% 25%, #fff 0% 50%)",
                backgroundSize: "16px 16px",
              }}
            />
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Transparenter Hintergrund (PNG)
            </p>
          </button>
        </TabsContent>

        {/* Color */}
        <TabsContent value="color" className="mt-4 space-y-4">
          {/* Custom color picker */}
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={customColor}
              onChange={(e) => handleCustomColorChange(e.target.value)}
              className="h-12 w-12 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700"
            />
            <input
              type="text"
              value={customColor}
              onChange={(e) => handleCustomColorChange(e.target.value)}
              className="w-28 rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
              placeholder="#FFFFFF"
            />
          </div>

          {/* Preset colors */}
          <div className="grid grid-cols-6 gap-2 sm:grid-cols-9">
            {PRESET_COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => handleColorSelect(color.value ?? "#FFFFFF")}
                className={cn(
                  "h-10 w-10 rounded-lg border-2 transition-transform hover:scale-110",
                  selectedColor === color.value
                    ? "border-indigo-500 ring-2 ring-indigo-200"
                    : "border-gray-200 dark:border-gray-700"
                )}
                style={{ backgroundColor: color.value ?? "#FFFFFF" }}
                title={color.label}
              />
            ))}
          </div>
        </TabsContent>

        {/* Gradient */}
        <TabsContent value="gradient" className="mt-4">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {PRESET_GRADIENTS.map((gradient) => (
              <button
                key={gradient.id}
                onClick={() => handleGradientSelect(gradient.id)}
                className={cn(
                  "h-16 w-full rounded-lg border-2 transition-transform hover:scale-105",
                  selectedGradient === gradient.id
                    ? "border-indigo-500 ring-2 ring-indigo-200"
                    : "border-gray-200 dark:border-gray-700"
                )}
                style={{ background: gradient.value ?? undefined }}
                title={gradient.label}
              >
                <span className="sr-only">{gradient.label}</span>
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Blur */}
        <TabsContent value="blur" className="mt-4 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Der ursprüngliche Hintergrund wird unscharf gemacht (Bokeh-Effekt).
          </p>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="30"
              value={blurAmount}
              onChange={(e) => handleBlurChange(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="min-w-[3rem] text-sm text-gray-600 dark:text-gray-400">
              {blurAmount}px
            </span>
          </div>
          <div className="flex gap-2">
            {[5, 10, 20].map((preset) => (
              <button
                key={preset}
                onClick={() => handleBlurChange(preset)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm",
                  blurAmount === preset
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                )}
              >
                {preset}px
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
