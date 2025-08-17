import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[480px] bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/sudut-profile-corp/events/event-hero.jpg"
            alt="Musician playing guitar"
            className="w-full h-full object-cover object-center opacity-80"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="h-full relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Dream World Wide in Jakarta
              </h2>
              <p className="text-lg text-gray-300 mb-6">By David Guetta</p>
              <p className="text-gray-300 mb-6">
                Join us for an unforgettable night of music and entertainment.
                Experience the magic of live performance in the heart of
                Jakarta.
              </p>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>View Map</span>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white text-gray-900 rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Date & Time</h3>
              <p className="text-gray-600 mb-4">
                Saturday, May 15, 2024 at 8:00 PM
              </p>
              <p className="text-gray-600 mb-6">Add to Calendar</p>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                Book Now (Free)
              </Button>

              <p className="text-center text-gray-600">Powered by Eventbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get ready for an electrifying night as Dream World Wide takes
                the stage in Jakarta! This spectacular event promises to deliver
                an unforgettable experience filled with incredible music,
                stunning visuals, and an atmosphere that will leave you
                breathless.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join thousands of music lovers for this once-in-a-lifetime
                concert featuring world-renowned DJ David Guetta. Experience the
                perfect blend of electronic beats and live performance in one of
                Jakarta&apos;s most prestigious venues.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Don&apos;t miss this opportunity to be part of something
                extraordinary. Book your tickets now and prepare for a night
                that will stay with you forever.
              </p>
            </section>

            {/* Hours */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Doors Open</span>
                  <span className="font-medium">7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Show Starts</span>
                  <span className="font-medium">8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Show Ends</span>
                  <span className="font-medium">11:00 PM</span>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h3 className="text-2xl font-bold mb-4">
                How can I contact the organizer with any questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Please use the contact information below to reach out to the
                event organizer with any questions or concerns.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">+62 21 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">info@dreamworldwide.com</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Event Location */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Event Location</h3>
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                  <p className="text-gray-600">Map View</p>
                </div>
              </div>
              <h4 className="font-semibold mb-2">
                Dream World Wide in Jakarta
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                Jakarta Convention Center
              </p>
              <p className="text-gray-600 text-sm">
                Jl. Gatot Subroto, Jakarta Pusat
              </p>
            </section>

            {/* Tags */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Music Event
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Concert
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  David Guetta
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Electronic Music
                </span>
              </div>
            </section>

            {/* Share With Friends */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Share With Friends</h3>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Other Events Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Other Events You May Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/sudut-profile-corp/events/event-1.jpg"
                  alt="Electronic music event"
                  className="w-full h-48 object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">15</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <h4 className="font-semibold mb-1">
                  Synthwave - Retro Conference
                </h4>
                <p className="text-gray-600 text-sm">
                  Electronic music conference featuring retro synthwave artists
                </p>
              </CardContent>
            </Card>

            {/* Event Card 2 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/sudut-profile-corp/events/event-2.jpg"
                  alt="Jazz concert"
                  className="w-full h-48 object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">18</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <h4 className="font-semibold mb-1">
                  Dream World Wide in Jakarta
                </h4>
                <p className="text-gray-600 text-sm">
                  An evening of smooth jazz and contemporary music
                </p>
              </CardContent>
            </Card>

            {/* Event Card 3 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/sudut-profile-corp/events/event-3.jpg"
                  alt="Music festival"
                  className="w-full h-48 object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">22</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <h4 className="font-semibold mb-1">
                  Armin Embracing the Techno
                </h4>
                <p className="text-gray-600 text-sm">
                  Techno music festival with international DJs
                </p>
              </CardContent>
            </Card>

            {/* Event Card 4 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/sudut-profile-corp/events/event-3.jpg"
                  alt="Rock concert"
                  className="w-full h-48 object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">25</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <h4 className="font-semibold mb-1">
                  UI UX Design & Prototyping
                </h4>
                <p className="text-gray-600 text-sm">
                  Design workshop and networking event
                </p>
              </CardContent>
            </Card>

            {/* Event Card 5 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/sudut-profile-corp/events/event-2.jpg"
                  alt="Acoustic performance"
                  className="w-full h-48 object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">28</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <h4 className="font-semibold mb-1">
                  Mandala Awakening Conference
                </h4>
                <p className="text-gray-600 text-sm">
                  Spiritual and wellness conference with live music
                </p>
              </CardContent>
            </Card>

            {/* Event Card 6 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/sudut-profile-corp/events/event-1.jpg"
                  alt="Business conference"
                  className="w-full h-48 object-cover"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                  LIVE
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">30</span>
                  <span className="text-sm text-gray-500">May</span>
                </div>
                <h4 className="font-semibold mb-1">
                  Ethical Hacking Bootcamp (4)
                </h4>
                <p className="text-gray-600 text-sm">
                  Cybersecurity training and certification program
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
