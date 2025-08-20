import TransitionLink from "@/components/shared/transition-link";
import { MapPin, Phone, PhoneCall, Printer, Truck } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">ABOUT US</h3>
          <TransitionLink href="#" className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-[#007bff]" />
            <span className="text-xl font-bold">Transport</span>
          </TransitionLink>
          <p className="text-sm">
            For more then 30 years, Transport has been a reliable partner in the
            field of logistics and cargo forwarding.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">NAVIGATION</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                Home
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                Services
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                News
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                Contact us
              </TransitionLink>
            </li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                Vehicle fleet
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                About us
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="#" className="hover:text-[#007bff]">
                Shop
              </TransitionLink>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">TRANSPORT OFFICE</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
              <span>
                Transport ltd. inc.
                <br />
                300 Pennsylvania Ave NW,
                <br />
                Washington
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneCall className="h-4 w-4 flex-shrink-0" />
              <span>Telephone: +386 40 222 455</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>Mobile phone: +386 40 112 555</span>
            </div>
            <div className="flex items-center space-x-2">
              <Printer className="h-4 w-4 flex-shrink-0" />
              <span>FAX: +386 40 4444 1155</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">WORKING HOURS</h3>
          <p className="text-sm">
            We work 7 days a week, every day including major holidays. Contact
            us for any info.
          </p>
          <div className="grid grid-cols-2 gap-1 text-sm">
            <span>Monday - Friday:</span>
            <span>7:00 - 17:00</span>
            <span>Saturday:</span>
            <span>7:00 - 12:00</span>
            <span>Sunday and holidays:</span>
            <span>8:00 - 10:00</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
        <span>
          Transport wordpress theme | © 2015 Transport, All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
