import React from "react";
import { contactItem } from "@/types/types";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import TransitionLink from "../layout/transition-link";

export interface ContactItemCardProps {
  contact: contactItem;
}
const ContactItemCard = ({ contact }: ContactItemCardProps) => {
  const getLink = () => {
    const isEmail = contact.highlight.includes("@");
    const isPhone = contact.highlight.includes("+62");
    if (isEmail) return `mailto:${contact.highlight}`;
    if (isPhone) {
      // Clean up number: remove brackets, spaces, etc.
      const cleaned = contact.highlight.replace(/\D/g, "");
      return `https://wa.me/${cleaned}`;
    }
    return "#";
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative h-full lg:h-56 bg-zinc-900/50 rounded-xl p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
    >
      <TransitionLink href={getLink()} target="_blank">
        <div className="absolute top-0 left-0">
          <Button variant="secondary" size="icon" className="size-8">
            <Copy />
          </Button>
        </div>
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
      </TransitionLink>
    </motion.div>
  );
};

export default ContactItemCard;
