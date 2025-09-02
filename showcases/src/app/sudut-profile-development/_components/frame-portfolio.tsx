"use client";
import { Slider } from "@/components/ui/slider";
import { useRef } from "react";

interface FramePortfolioProps {
  video: string;
  width: number | string;
  height: number | string;
  className?: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  onMediaSizeChange: (value: number) => void;
  onBorderThicknessChange: (value: number) => void;
  onBorderSizeChange: (value: number) => void;
  showControls: boolean;
  label: string;
}

export function FramePortfolio({
  video,
  width,
  height,
  className = "",
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
}: FramePortfolioProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Video with Border */}
        <div
          className="absolute inset-0 flex items-center justify-center w-full h-full left-0 top-0 p-0"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src={video}
              loop
              muted
              playsInline
              autoPlay={false} // autoplay dimatikan
              ref={videoRef}
              onMouseEnter={(e) => {
                e.currentTarget.play(); // play ketika hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause(); // pause ketika leave
              }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 z-10">
          <div className="text-white font-bold mb-2">{label}</div>
          <div className="space-y-2">
            <div>
              <label
                htmlFor={`media-size-${label}`}
                className="block text-sm font-medium text-white"
              >
                Media Size: {mediaSize.toFixed(2)}
              </label>
              <Slider
                id={`media-size-${label}`}
                min={0.5}
                max={3}
                step={0.01}
                value={[mediaSize]}
                onValueChange={(value) => onMediaSizeChange(value[0])}
              />
            </div>
            <div>
              <label
                htmlFor={`border-thickness-${label}`}
                className="block text-sm font-medium text-white"
              >
                Border Thickness: {borderThickness}px
              </label>
              <Slider
                id={`border-thickness-${label}`}
                min={0}
                max={20}
                step={1}
                value={[borderThickness]}
                onValueChange={(value) => onBorderThicknessChange(value[0])}
              />
            </div>
            <div>
              <label
                htmlFor={`border-size-${label}`}
                className="block text-sm font-medium text-white"
              >
                Border Size: {borderSize}%
              </label>
              <Slider
                id={`border-size-${label}`}
                min={50}
                max={100}
                step={1}
                value={[borderSize]}
                onValueChange={(value) => onBorderSizeChange(value[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
