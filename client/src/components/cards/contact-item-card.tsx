import React from "react";
import { contactItem } from "@/types/types";
import { motion } from "framer-motion";

export interface ContactItemCardProps {
  contact: contactItem;
}
const ContactItemCard = ({ contact }: ContactItemCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="h-full lg:h-64 bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
    >
      <div className="mb-2 text-white/70 flex justify-center">
        {contact.icon}
      </div>
      <motion.div
        className="text-2xl font-medium mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {contact.label}
      </motion.div>
      <div className="h-full lg:h-32 flex flex-col justify-center items-center">
        <p className="mt-2 text-base text-zinc-400">{contact.description}</p>
        <p className="mt-2 text-sm text-blue-400">{contact.highlight}</p>
      </div>
    </motion.div>
  );
};

export default ContactItemCard;
