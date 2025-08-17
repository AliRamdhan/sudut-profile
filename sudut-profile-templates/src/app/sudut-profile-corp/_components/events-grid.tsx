/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";

const Events = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 my-16">
      <div className="mb-2">
        <Badge
          variant={"outline"}
          className="text-sm uppercase tracking-wide shadow-xl"
        >
          DIGITAL DOWNLOAD & Event&apos;s
        </Badge>
        <h1 className="max-w-2xl text-7xl font-bold text-gray-900 uppercase tracking-tighter">
          Beli Tiket & Digital Download-nya!
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Event Show Cards */}
        <Card className="overflow-hidden">
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div className="relative bg-white p-3">
              <h3 className="text-xl font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Basic Tee
              </h3>

              <p className="mt-1.5 text-base">
                <span className="sr-only"> Regular Price </span>

                <span className="tracking-wider text-gray-900">Rp.24.000</span>
              </p>
            </div>
          </a>
        </Card>

        <Card className="overflow-hidden">
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div className="relative bg-white p-3">
              <h3 className="text-xl font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Basic Tee
              </h3>

              <p className="mt-1.5 text-base">
                <span className="sr-only"> Regular Price </span>

                <span className="tracking-wider text-gray-900">Rp.24.000</span>
              </p>
            </div>
          </a>
        </Card>

        <Card className="overflow-hidden">
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div className="relative bg-white p-3">
              <h3 className="text-xl font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Basic Tee
              </h3>

              <p className="mt-1.5 text-base">
                <span className="sr-only"> Regular Price </span>

                <span className="tracking-wider text-gray-900">Rp.24.000</span>
              </p>
            </div>
          </a>
        </Card>
      </div>

      <div className="mt-8 w-full flex justify-center items-center">
        <TransitionLink href={`/sudut-profile-corp/activities`}>
          <Button
            variant={`link`}
            className="px-16 border transition duration-300 hover:scale-105"
          >
            View All Activities
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Events;
