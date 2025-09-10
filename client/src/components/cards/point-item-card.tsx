import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export interface PointItemCardProps {
  icon: ReactNode;
  label: string;
  description: string;
}
const PointItemCard = ({ icon, label, description }: PointItemCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="h-full lg:min-h-56 bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
    >
      <div className="mb-2 text-white/70 flex justify-center">{icon}</div>
      <motion.div
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.div>
      <div className="text-sm text-justify text-zinc-400">{description}</div>
    </motion.div>
  );
};

export default PointItemCard;
