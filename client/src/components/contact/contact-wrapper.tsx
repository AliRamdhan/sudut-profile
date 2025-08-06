"use client";

import React from "react";
import { Map, MessageCircleHeart, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import ContactItemCard from "@/components/cards/contact-item-card";

const contactsData = [
  {
    icon: <MessageCircleHeart className="w-6 h-6" />,
    label: "Chat to sales",
    description: "Speak to our friendly team.",
    highlight: "hello@merakiui.com",
  },
  {
    icon: <Map className="w-6 h-6" />,
    label: "Chat to support",
    description: "We're here to help.",
    highlight: "Start new chat",
  },
  {
    icon: <Map className="w-6 h-6" />,
    label: "Visit us",
    description: "Visit our office HQ..",
    highlight: "100 Smith Street Collingwood VIC 3066 AU",
  },
  {
    icon: <PhoneCall className="w-6 h-6" />,
    label: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    highlight: "+1 (555) 000-0000",
  },
];

const ContactWrapper = () => {
  return (
    <div className="h-full lg:h-[75vh] flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-neutral-300 mb-12">
          We&apos;d love to hear from you. Drop us a line below.
        </p>
        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contactsData.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center cursor-default"
            >
              <ContactItemCard contact={contact} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactWrapper;
