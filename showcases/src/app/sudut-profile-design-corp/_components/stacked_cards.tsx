"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]) // Top card moves most
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]) // Second card moves less
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]) // Third card moves even less
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]) // Bottom card moves least

  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]) // Top card scales down most
  const scale2 = useTransform(scrollYProgress, [0.25, 0.5], [1, 0.93]) // Second card scales down less
  const scale3 = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.96]) // Third card scales down even less
  const scale4 = useTransform(scrollYProgress, [0.75, 1], [1, 0.98]) // Bottom card scales down least

  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.7]) // Top card fades more
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.5], [1, 0.8]) // Second card fades less
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.85]) // Third card fades even less
  const opacity4 = useTransform(scrollYProgress, [0.75, 1], [1, 0.9]) // Bottom card fades least

  return (
    <section ref={containerRef} className="px-6 py-20 max-w-7xl mx-auto relative">
      <div className="space-y-8">
        {/* Spotify Project */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 sticky top-20"
          style={{
            y: y1,
            scale: scale1,
            opacity: opacity1,
            zIndex: 40, // Highest z-index for top card
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl md:text-5xl font-bold mb-2">WEB DESIGN</h3>
              <p className="text-lg text-gray-600">Sleek Web Experience</p>
            </div>
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full bg-transparent transition-all duration-300 hover:scale-125"
            >
              <ArrowUpRight />
            </Button>
          </div>
          <div className="rounded-2xl h-[540px] flex items-center justify-center">
            <Image
              src={"/images/sudut-profile-design-corp/design-2.jpg"}
              alt="Design Portfolio"
              className="w-full h-full object-cover object-center rounded-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </motion.div>

        {/* Figma Project */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 sticky top-20"
          style={{
            y: y2,
            scale: scale2,
            opacity: opacity2,
            zIndex: 30, // Second highest z-index
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
              <p className="text-gray-600">Refined UI/UX Design</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-2xl h-[540px] flex items-center justify-center">
            <Image
              src={"/images/sudut-profile-design-corp/design-2.jpg"}
              alt="Design Portfolio"
              className="w-full h-full object-cover object-center rounded-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </motion.div>

        {/* Wallet Project */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 sticky top-20"
          style={{
            y: y3,
            scale: scale3,
            opacity: opacity3,
            zIndex: 20, // Third highest z-index
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Product Design</h3>
              <p className="text-gray-600">Minimalist Product Design</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-2xl h-[540px] flex items-center justify-center">
            <Image
              src={"/images/sudut-profile-design-corp/design-2.jpg"}
              alt="Design Portfolio"
              className="w-full h-full object-cover object-center rounded-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </motion.div>

        {/* Wooter Project */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 sticky top-20"
          style={{
            y: y4,
            scale: scale4,
            opacity: opacity4,
            zIndex: 10, // Lowest z-index for bottom card
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Branding</h3>
              <p className="text-gray-600">Minimalist Brand Identity</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent transition-all duration-300 hover:scale-105"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-2xl h-[540px] flex items-center justify-center">
            <Image
              src={"/images/sudut-profile-design-corp/design-2.jpg"}
              alt="Design Portfolio"
              className="w-full h-full object-cover object-center rounded-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
