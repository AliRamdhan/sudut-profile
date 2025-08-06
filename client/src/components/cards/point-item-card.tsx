import React from "react";
import { pointItem } from "@/types/types";
import { motion } from "framer-motion";

export interface PointItemCardProps {
  point: pointItem;
}
const PointItemCard = ({ point }: PointItemCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="h-full lg:h-64 bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
    >
      <div className="mb-2 text-white/70 flex justify-center">{point.icon}</div>
      <motion.div
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {point.label}
      </motion.div>
      <div className="text-sm text-justify text-zinc-400">{point.description}</div>
    </motion.div>
  );
};

export default PointItemCard;
