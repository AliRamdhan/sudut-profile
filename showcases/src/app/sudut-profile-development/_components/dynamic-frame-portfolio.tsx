"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FramePortfolio } from "./frame-portfolio"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface Frame {
  id: number
  image: string // Changed from video to image
  defaultPos: { x: number; y: number; w: number; h: number }
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
}

const initialFrames: Frame[] = [
  {
    id: 1,
    image: "/images/sudut-profile-development/projects/secana-beachtown.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 2,
    image: "/images/sudut-profile-development/projects/sunset-villas.jpg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 3,
    image: "/images/sudut-profile-development/projects/sanur-beachfront.jpg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 4,
    image: "/images/sudut-profile-development/projects/cocana-resort.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 5,
    image: "/images/sudut-profile-development/projects/finns-resort.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 6,
    image: "/images/sudut-profile-development/projects/kuara-resort.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 7,
    image: "/images/sudut-profile-development/news/kuara-resort-launch.jpg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 8,
    image: "/images/sudut-profile-development/news/klara-ocean-place.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 9,
    image: "/images/sudut-profile-development/news/finns-bali-resort.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(5) // Adjusted hover size for better mobile experience
  const [gapSize, setGapSize] = useState(2) // Reduced gap for mobile
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)

  const getRowSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  const toggleCleanInterface = () => {
    setCleanInterface(!cleanInterface)
    if (!cleanInterface) {
      setShowControls(false)
    }
  }

  const updateCodebase = () => {
    console.log("Updating codebase with current values:")
    console.log("Hover Size:", hoverSize)
    console.log("Gap Size:", gapSize)
    console.log("Frames:", frames)
    // Here you would typically make an API call to update the codebase
    // For now, we'll just log the values
  }

  return (
    <div className="space-y-2 md:space-y-4 w-full h-full">
      {!cleanInterface && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
          <h2 className="text-lg md:text-2xl font-bold text-white">Dynamic Frame Layout</h2>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={toggleControls}>
              {showControls ? "Hide Controls" : "Show Controls"}
            </Button>
            <Button size="sm" onClick={updateCodebase}>
              Update Codebase
            </Button>
            <Button size="sm" onClick={toggleCleanInterface}>
              {cleanInterface ? "Show UI" : "Hide UI"}
            </Button>
          </div>
        </div>
      )}

      {!cleanInterface && showControls && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="hover-size" className="block text-xs md:text-sm font-medium text-gray-200">
              Hover Size: {hoverSize}
            </label>
            <Slider
              id="hover-size"
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gap-size" className="block text-xs md:text-sm font-medium text-gray-200">
              Gap Size: {gapSize}px
            </label>
            <Slider
              id="gap-size"
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </div>
      )}

      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows: window.innerWidth < 768 ? "1fr 1fr 1fr" : getRowSizes(),
          gridTemplateColumns: window.innerWidth < 768 ? "1fr 1fr 1fr" : getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FramePortfolio
                image={frame.image}
                width="100%"
                height="100%"
                className="absolute inset-0"
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={`Frame ${frame.id}`}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
