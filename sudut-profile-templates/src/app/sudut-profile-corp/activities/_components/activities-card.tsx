/* eslint-disable @next/next/no-img-element */
import React from "react";
import TransitionLink from "@/components/shared/transition-link";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const ActivitiesCard = () => {
  return (
    <Card className="overflow-hidden text-base">
      <TransitionLink
        href="activities/act-1"
        className="group relative block overflow-hidden"
      >
        <div className="h-[350px] w-full sm:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute top-0">
            <div className="px-8 mt-32 sm:mt-48 lg:mt-80">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mt-1.5 text-base">
                  <span className="tracking-wider text-white line-clamp-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique id assumenda distinctio voluptatibus, inventore
                    iste deleniti ipsam non suscipit dicta provident blanditiis,
                    veniam aperiam ex corrupti a rerum sequi repellendus.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-3">
          <h3 className="text-xl font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 mb-4">
            Basic Tee
          </h3>
          <div className="space-y-3 text-gray-800">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-600" />
              <span>22 AGUSTUS 2025</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-600" />
              <span>19.00 WIB</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
              <div>
                <div>Gedung Menara Citibank Lt.8</div>
                <div>Jalan Metro Pondok Indah,</div>
                <div>Jakarta Selatan</div>
              </div>
            </div>
          </div>
        </div>
      </TransitionLink>
    </Card>
  );
};

export default ActivitiesCard;
