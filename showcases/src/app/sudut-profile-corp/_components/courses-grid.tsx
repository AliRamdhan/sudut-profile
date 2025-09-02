import TransitionLink from "@/components/shared/transition-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

const Courses = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 mb-16">
      <div className="mb-8">
        <Badge
          variant={"outline"}
          className="text-sm uppercase tracking-wide shadow-xl"
        >
          COURSES
        </Badge>
        <h1 className="max-w-xl text-7xl font-bold text-gray-900 uppercase tracking-tighter">
          Kelas dari SUDUT CORP
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Card className="overflow-hidden max-w-2xl">
          <div className="flex">
            <div className="flex-1 p-6">
              <h3 className="font-bold text-lg mb-2">
                Kelas Menulis Cerita oleh Raditya Dika
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ikut video kelas belajar menulis oleh Raditya Dika untuk
                memahami fondasi menulis sebuah cerita.
              </p>
              <Button className="text-sm px-4 py-2 rounded">
                Tonton Sekarang →
              </Button>
            </div>
            <div className="w-32 h-32 bg-purple-100 flex-shrink-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-purple-600 font-bold text-lg">Menulis</div>
                <div className="text-purple-400 text-xs">KELAS</div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden max-w-2xl">
          <div className="flex">
            <div className="flex-1 p-6">
              <h3 className="font-bold text-lg mb-2">
                Kelas Menulis Cerita oleh Raditya Dika
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ikut video kelas belajar menulis oleh Raditya Dika untuk
                memahami fondasi menulis sebuah cerita.
              </p>
              <Button className="text-sm px-4 py-2 rounded">
                Tonton Sekarang →
              </Button>
            </div>
            <div className="w-32 h-32 bg-purple-100 flex-shrink-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-purple-600 font-bold text-lg">Menulis</div>
                <div className="text-purple-400 text-xs">KELAS</div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden max-w-2xl">
          <div className="flex">
            <div className="flex-1 p-6">
              <h3 className="font-bold text-lg mb-2">
                Kelas Menulis Cerita oleh Raditya Dika
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ikut video kelas belajar menulis oleh Raditya Dika untuk
                memahami fondasi menulis sebuah cerita.
              </p>
              <Button className="text-sm px-4 py-2 rounded">
                Tonton Sekarang →
              </Button>
            </div>
            <div className="w-32 h-32 bg-purple-100 flex-shrink-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-purple-600 font-bold text-lg">Menulis</div>
                <div className="text-purple-400 text-xs">KELAS</div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden max-w-2xl">
          <div className="flex">
            <div className="flex-1 p-6">
              <h3 className="font-bold text-lg mb-2">
                Kelas Menulis Cerita oleh Raditya Dika
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ikut video kelas belajar menulis oleh Raditya Dika untuk
                memahami fondasi menulis sebuah cerita.
              </p>
              <Button className="text-sm px-4 py-2 rounded">
                Tonton Sekarang →
              </Button>
            </div>
            <div className="w-32 h-32 bg-purple-100 flex-shrink-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-purple-600 font-bold text-lg">Menulis</div>
                <div className="text-purple-400 text-xs">KELAS</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-8 w-full flex justify-center items-center">
        <TransitionLink href={`/sudut-profile-corp/activities`}>
          <Button
            variant={`link`}
            className="px-16 border transition duration-300 hover:scale-105"
          >
            View All Courses
          </Button>
        </TransitionLink>
      </div>
    </section>
  );
};

export default Courses;
